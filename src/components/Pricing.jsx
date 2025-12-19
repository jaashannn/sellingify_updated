import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(255, 165, 0, 0.3)' },
  };

  const [pricing, setPricing] = useState(null);

  const Loading = () => <div className="text-center py-12">Loading pricing…</div>;

  useEffect(() => {
    let mounted = true;

    const isLocalDev = () => {
      if (typeof window === 'undefined') return false;
      const h = window.location.hostname;
      return (
        h === 'localhost' ||
        h === '127.0.0.1' ||
        window.location.protocol === 'file:'
      );
    };

    (async () => {
      const candidates = [];
      // Primary fetch target (CloudFront shadow URL)
      candidates.push('/data/pricing.json');

      // If running locally, try local JSON files directly.
      if (isLocalDev()) {
        const params = new URLSearchParams(window.location.search);
        const forced = (params.get('pricing') || '').toLowerCase(); // accepts ?pricing=IN or ?pricing=GLOBAL/US

        if (forced === 'in') {
          candidates.push('/data/pricing-in.json');
        } else if (forced === 'global' || forced === 'us') {
          candidates.push('/data/pricing-global.json');
        } else {
          // try INR then GLOBAL locally
          candidates.push('/data/pricing-in.json', '/data/pricing-global.json');
        }
      }

      let loaded = null;
      for (const url of candidates) {
        try {
          const res = await fetch(url, { cache: 'no-store' });
          if (!res.ok) {
            // try next candidate
            continue;
          }
          const data = await res.json();
          loaded = data;
          break;
        } catch (err) {
          // network or parse error: try next candidate
          continue;
        }
      }

      if (mounted) {
        if (loaded) {
          setPricing(loaded);
        } else {
          console.warn('Pricing fetch failed for all candidates:', candidates);
          // minimal placeholder (no detailed hardcoded prices) and hint for maintenance
          setPricing({
            freelancerPlans: [
              {
                name: 'Freelancer Subscription',
                features: [],
                limitedTime: null,
                studentDiscount: null,
                price: 'To be updated',
                discount: null,
              },
            ],
            creditTiers: [],
            businessPlans: [
              {
                name: 'Business Basic',
                setup: 'To be updated',
                monthly: 'To be updated',
                discount: null,
                setupDiscount: null,
                bestFor: null,
                features: {},
              },
            ],
            _note:
              'Pricing data could not be loaded. Please update /data/pricing.json (pricing-in.json / pricing-global.json) in S3 and configure CloudFront rewrites.',
          });
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // scroll to anchor if URL has a hash (supports /pricing#business and /pricing#freelancers)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scrollToHashWithRetry = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace('#', '');
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          // smooth scroll when element available
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        attempts += 1;
        if (attempts < 10) {
          // retry after a short delay to allow animations/layout to finish
          setTimeout(tryScroll, 120);
        }
      };
      tryScroll();
    };
    // attempt on mount
    scrollToHashWithRetry();
    // listen for future hash changes
    window.addEventListener('hashchange', scrollToHashWithRetry);
    return () => window.removeEventListener('hashchange', scrollToHashWithRetry);
  }, []);

  if (!pricing) return <Loading />;

  const faqs = [
    {
      question: 'Can I cancel any time?',
      answer: 'Yes. Subscriptions are month to month after the one time setup fee. Cancel from your dashboard with no hidden penalties.',
    },
    {
      question: 'Are there additional transaction fees?',
      answer: 'No. Businesses only pay the referral fees they set. Reflo Hub does not skim commissions or charge payment processing spreads.',
    },
    {
      question: 'How are credits used?',
      answer: 'One credit equals one qualified lead submission. If a lead is rejected as invalid, the credit is automatically refunded to your balance.',
    },
    {
      question: 'Do credits expire?',
      answer: 'Paid credits roll over to the next month indefinitely. Monthly credits (from subscription) expire after 30 days if unused.',
    },
    {
      question: 'What counts as a “city” for Premium exclusivity?',
      answer: 'We use official municipal boundaries (e.g., City of Toronto, City of Dubai). Suburbs and neighboring towns are separate territories.',
    },
  ];

  // --- replaced: generic price formatter using pricing.currency (INR / USD) ---
  const formatPrice = (val) => {
    if (val == null) return '—';
    const cur = pricing?.currency || 'INR';
    if (typeof val === 'number') {
      if (cur === 'INR') return `₹${val.toLocaleString('en-IN')}`;
      // USD and others: show two decimals
      return `$${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return String(val);
  };
  // -------------------------------------------------------------------------------

  // --- added: small startCase helper to format feature keys (fixes ReferenceError) ---
  const startCase = (s = '') =>
    String(s)
      .replace(/[_-]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase());

  // --- added: parse numeric value from a price string like "₹699 / month" or "$9.99 / month" ---
  const parseNumeric = (s) => {
    if (s == null) return null;
    if (typeof s === 'number') return s;
    const m = String(s).match(/[\d,]+(?:\.\d+)?/);
    return m ? Number(m[0].replace(/,/g, '')) : null;
  };

  // helper: lookup monthly price (after first year) from businessPackagesAfterOneYear by key
  const getMonthlyAfterOneYear = (pkgKey) => {
    const row = (pricing.businessPackagesAfterOneYear || []).find((r) => r.key === pkgKey);
    return row ? formatPrice(row.monthlyPrice) : '—';
  };
  // --- new: extract configurable labels and launch offer from pricing.meta (with fallbacks) ---
  const meta = pricing?.meta || {};
  const businessLaunch = meta.launchOffer?.business || {};
  const freelancerLaunch = meta.launchOffer?.freelancer || {};
  const labels = meta.labels || {};
  const LABEL_MONTHLY = labels.monthly || 'Monthly';
  const LABEL_ANNUAL = labels.annual || 'Annual';
  const LABEL_SAVINGS = labels.savings || 'Savings';
  const LABEL_DISCOUNT = labels.discount || 'Discount';
  // -------------------------------------------------------------------------------

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-400/10 dark:from-sky-500/10 dark:to-orange-400/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 dark:bg-orange-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-1 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-100">Simple, Transparent Pricing</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you’re a solo referrer or a growing enterprise, Reflo Hub delivers pay-for-performance growth at a fraction of traditional advertising costs.
          </p>
          {/* <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition"
            >
              Book a Demo
            </a>
          </div> */}
        </motion.div>

        <motion.section
          className="mb-20"
          id="freelancers"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* static centered chip for Freelancer Plans */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-12 py-6 rounded-full text-white font-semibold text-2xl shadow-2xl bg-gradient-to-r from-sky-600 to-orange-400 dark:from-sky-500 dark:to-orange-300 ring-1 ring-white/10">
              Freelancer Plans
            </div>
          </div>

          {/* Freelancer Launch banner (styled like Business banner for consistent dark-mode) */}
          {(freelancerLaunch.title || freelancerLaunch.subtitle) && (
            <motion.div
              className="mx-auto max-w-4xl mb-10 rounded-2xl border border-orange-300/30 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/5 dark:to-orange-900/10 p-8 shadow-lg"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <Sparkles className="w-12 h-12 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-2xl lg:text-2xl font-extrabold text-orange-600 mb-2">
                    {freelancerLaunch.title || 'Launch Offer — 5 months FREE'}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-snug mb-2 max-w-3xl">
                    {freelancerLaunch.subtitle || 'Receive a full 5 months subscription free - Just pay the one-time setup fee.'}
                  </p>
                  {freelancerLaunch.note && <p className="mt-1 text-sm md:text-base text-gray-500 dark:text-gray-400">{freelancerLaunch.note}</p>}

                  {/* Register CTA for launch banner */}
                  <div className="mt-4">
                    <a href="/get-started" className="text-orange-400 font-semibold hover:underline">Register Now</a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-1 gap-6">
            {pricing.freelancerPlans.map((plan, index) => {
              // numeric-aware formatting
              const setupFeeStr = typeof plan.setupFee === 'number' ? formatPrice(plan.setupFee) : (plan.setupFee || plan.setup || '—');
              const freeMonths = plan.freeMonths || '';
              const monthlyStr = typeof plan.monthlyPrice === 'number' ? `${formatPrice(plan.monthlyPrice)}` : (plan.monthlyPrice || plan.price || '');
              const discountLabel = plan.discount || '';
              const originalPrice = typeof plan.originalPrice === 'number' ? formatPrice(plan.originalPrice) : null;
              const studentMsg = plan.studentDiscountMsg || plan.studentDiscount || '';

              return (
                <motion.div
                  key={index}
                  className="bg-gray-100/75 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 md:p-10"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold mb-3">{plan.name}</h3>

                      <div className="w-full bg-white dark:bg-gray-900/60 rounded-2xl border-2 border-orange-300/50 p-8 md:p-10 shadow-xl">
                        {/* highlight FREE first (bigger, green, bold) */}
                        <div className="text-xl md:text-3xl font-bold text-green-700 dark:text-green-300 mb-3">{freeMonths}</div>


                        <div className="mt-2">
                          <div className="text-xl md:text-xl text-orange-500 font-normal mt-1">One-time setup</div>
                          <div className="text-xl md:text-xl text-orange-500 font-normal leading-tight">{setupFeeStr}</div>
                          <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-3">
                          Pay the setup fee now and enjoy the subscription FREE for 5 Months
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 font-semibold">
                          Subscription (After Free Months):{' '}
                          <span className="text-sky-600">{discountLabel || '—'}</span>{' '}
                          -{' '}
                          {originalPrice ? <span className="line-through text-gray-400 mr-2 text-lg">{originalPrice}</span> : null}
                          <span className="text-orange-500 text-lg font-bold">{monthlyStr ? `${monthlyStr} /month` : '—'}</span>
                        </p>
                      </div>

                      {/* compact features below setup */}
                      <ul className="text-gray-600 dark:text-gray-300 space-y-2 mt-5 max-w-2xl">
                        {(plan.features || []).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-sky-400" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Student messaging only */}
                  {studentMsg && (
                    <div className="mt-3 inline-block px-3 py-2 rounded-md bg-sky-50 dark:bg-sky-800/30 border border-sky-100 dark:border-sky-700">
                      <strong className="text-sky-700 dark:text-sky-100">Student:</strong>{' '}
                      <span className="ml-2 text-sm text-sky-700 dark:text-sky-100">{studentMsg}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-center mb-4">Need More Credits?</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.creditTiers.map((pack) => (
                <motion.div
                  key={pack.key}
                  className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h5 className="text-lg font-semibold mb-2">{pack.name}</h5>

                  {/* reduced price size, neutral color, non-bold */}
                  <p className="text-lg md:text-xl font-normal text-black dark:text-white mb-2">
                    {typeof pack.price === 'number' ? formatPrice(pack.price) : pack.price}
                  </p>

                  {/* make credits count semi-bold */}
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    {pack.credits}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* use creditNotes from pricing JSON with fallback */}
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              {pricing.creditNotes || 'Paid credits roll over indefinitely. Monthly subscription credits expire after 30 days.'}
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          id="business"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* static centered chip for Business Plans */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-14 py-7 rounded-full text-white font-bold text-2xl shadow-2xl bg-gradient-to-r from-sky-600 to-orange-400 dark:from-sky-500 dark:to-orange-300 ring-1 ring-white/10">
              Business Plans
            </div>
          </div>

          <p className="text-center text-xl text-gray-600 font-extrabold dark:text-gray-300 mb-8">Scale Leads, Not Costs — choose a package that fits your city and growth stage</p>

          {/* Business Launch banner (section specific) */}
          {(businessLaunch.title || businessLaunch.subtitle) && (
            <motion.div className="mx-auto max-w-4xl mb-10 rounded-2xl border border-orange-300/30 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/5 dark:to-orange-900/10 p-8 shadow-lg"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0"><Sparkles className="w-12 h-12 text-orange-400" /></div>
                <div>
                  <h3 className="text-2xl md:text-2xl lg:text-2xl font-extrabold text-orange-600 mb-2">
                    {businessLaunch.title || 'Launch Offer — First 12 months free'}
                  </h3>
                  <p className="text-lg md:text-xl lg:text-1xl text-gray-700 dark:text-gray-300 leading-snug mb-2">
                    {businessLaunch.subtitle || 'Pay only the one-time setup fee and get a full 12 months subscription free during our launch period.'}
                  </p>
                  {businessLaunch.note && <p className="mt-1 text-sm md:text-base text-gray-500 dark:text-gray-400">{businessLaunch.note}</p>}

                  {/* Register CTA for launch banner */}
                  <div className="mt-4">
                    <a href="/get-started" className="text-orange-400 font-semibold hover:underline">Register Now</a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {(pricing.businessPackages || []).map((pkg, idx) => (
              <motion.div
                key={pkg.key || idx}
                className="bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-sm"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <div className="text-sm text-gray-500">{pkg.key?.toUpperCase()}</div>
                </div>

                <div className="mb-3 relative p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/10 dark:to-orange-900/5 border border-orange-200 dark:border-orange-700/30">
                  <div className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-300 mb-3">12 months FREE</div>

                  <div className="text-xl md:text-xl text-orange-500 font-normal">One-time setup</div>
                  <div className="text-xl md:text-xl text-orange-500 font-normal mb-1">{formatPrice(pkg.oneTimeSetup)}</div>

                </div>

                <div className="mb-3 mt-3">
                  {typeof pkg.features?.freeAdsPerMonth !== 'undefined' && (
                    <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-2">
                      <strong className="text-gray-800 dark:text-gray-100">Free ads / month: </strong>
                      <span className="text-gray-700 dark:text-gray-300 font-normal text-sm md:text-base">{pkg.features.freeAdsPerMonth}</span>
                    </div>
                  )}

                  {pkg.verifiedBadge && pkg.verifiedBadge.inclusive ? (
                    <div className="mt-3">
                      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-700 text-sky-700 dark:text-sky-200 font-semibold text-sm md:text-base shadow-sm">
                        <span aria-hidden className="inline-block w-5 h-5 rounded-full bg-sky-600/10 text-sky-600 flex items-center justify-center">
                          ✓
                        </span>
                        <span>Verified badge included</span>
                      </div>
                    </div>
                  ) : pkg.verifiedBadge && !pkg.verifiedBadge.inclusive ? (
                    <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-1">
                      <strong className="text-gray-800 dark:text-gray-100">Verified badge:</strong>{' '}
                      {pkg.verifiedBadge.monthly ? <span className="font-semibold">{formatPrice(pkg.verifiedBadge.monthly)}/mo</span> : ''}
                      {pkg.verifiedBadge.monthly && pkg.verifiedBadge.annual ? ' · ' : ''}
                      {pkg.verifiedBadge.annual ? <span className="font-semibold">{formatPrice(pkg.verifiedBadge.annual)}/yr</span> : ''}
                    </div>
                  ) : null}
                </div>


              </motion.div>
            ))}
          </div>

          {/* Pricing (applies after first year) table */}
          <div className="mb-8">
            <h4 className="text-xl md:text-2xl font-semibold text-center mb-3">Pricing (Applies After First Year)</h4>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10">
              <table className="w-full text-left table-auto border-collapse">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th className="p-3 border border-gray-200 dark:border-white/10 text-base text-gray-700 dark:text-gray-100">Plan</th>
                    <th className="p-3 border border-gray-200 dark:border-white/10 text-base text-gray-700 dark:text-gray-100 text-center">{LABEL_MONTHLY}</th>
                    <th className="p-3 border border-gray-200 dark:border-white/10 text-base text-gray-700 dark:text-gray-100 text-center">
                      <div>{LABEL_ANNUAL}</div>
                      {/* highlighted in blueish tone for better visibility */}
                      <div className="text-sm mt-1 font-semibold text-sky-700 dark:text-sky-200">Verified Badge Included</div>
                    </th>
                    <th className="p-3 border border-gray-200 dark:border-white/10 text-base text-gray-700 dark:text-gray-100 text-center">Discount (Annual plans)</th>
                    <th className="p-3 border border-gray-200 dark:border-white/10 text-base text-gray-700 dark:text-gray-100 text-center">
                      {LABEL_SAVINGS}
                      {/* savings subtext more visible in blue tone */}
                      <div className="text-sm text-sky-600 dark:text-sky-300">verified badge + annual plan discounts</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(pricing.businessPackagesAfterOneYear || []).map((row, i) => {
                    const monthlyCell = getMonthlyAfterOneYear(row.key);
                    const annualPrice = row.annualPrice;
                    const originalAnnual = row.originalAnnualPrice;
                    const savings = row.savings ?? 0;
                    const discountPercent = row.discountPercent ?? null;
                    return (
                      <tr key={row.key || i} className="border-t border-gray-100 dark:border-white/5">
                        <td className="p-3 border border-gray-200 dark:border-white/10 text-base">{row.name}</td>
                        <td className="p-3 border border-gray-200 dark:border-white/10 text-center text-base font-semibold">{monthlyCell}</td>
                        <td className="p-3 border border-gray-200 dark:border-white/10 text-center text-base">
                          {/* original + current on same line */}
                          {originalAnnual ? <span className="line-through text-gray-400 mr-2 text-base">{formatPrice(originalAnnual)}</span> : null}
                          <span className="font-semibold text-orange-500 text-base">{formatPrice(annualPrice)}</span>
                        </td>
                        <td className="p-3 border border-gray-200 dark:border-white/10 text-center text-base">{discountPercent ? `${discountPercent}%` : '—'}</td>
                        <td className="p-3 border border-gray-200 dark:border-white/10 text-center text-base text-green-600 font-semibold">
                          {formatPrice(savings)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Feature comparison table — reads features from businessPackages */}
          <div className="mb-8">
            <h4 className="text-lg md:text-2xl font-semibold text-center mb-4">Plans Feature Comparison</h4>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10">
              {/* build feature keys dynamically */}
              {(() => {
                const pkgs = pricing.businessPackages || [];
                const featureKeys = Array.from(new Set(pkgs.flatMap(p => Object.keys(p.features || {}))));
                return (
                  <table className="w-full text-left table-auto border-collapse">
                    <thead className="bg-gray-50 dark:bg-gray-900/50">
                      <tr>
                        <th className="p-3 border border-gray-200 dark:border-white/10 text-base text-gray-700 dark:text-gray-100">Feature</th>
                        {pkgs.map((p, i) => (
                          <th key={p.key || i} className="p-3 border border-gray-200 dark:border-white/10 text-base text-center text-gray-700 dark:text-gray-100">{p.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {featureKeys.map((fk) => (
                        <tr key={fk} className="border-t border-gray-100 dark:border-white/5">
                          <td className="p-3 border border-gray-200 dark:border-white/10 capitalize text-base text-gray-700 dark:text-gray-100">{startCase(fk)}</td>
                          {pkgs.map((p, j) => {
                            const v = p.features?.[fk];
                            return (
                              <td key={j} className="p-3 border border-gray-200 dark:border-white/10 text-center">
                                {typeof v === 'boolean' ? (v ? <span className="text-sky-400">✔</span> : '—') : (v ?? '—')}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              })()}
            </div>
          </div>

           <p className="text-gray-600 dark:text-gray-300 mt-6 text-sm">
             Pricing shown is indicative. For enterprise or multi-city packages please contact{' '}
             <a href="mailto:sales@reflohub.com" className="text-orange-400 hover:underline">sales@reflohub.com</a>.
           </p>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Need a Custom Solution?</h2>
          <div className="bg-gradient-to-r from-sky-200/30 dark:from-sky-500/10 to-orange-200/30 dark:to-orange-400/10 border border-gray-200 dark:border-white/10 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Enterprise multi-location or franchise network? Email{' '}
              <a href="mailto:sales@reflohub.com" className="text-orange-400 hover:underline font-semibold">
                sales@reflohub.com
              </a>{' '}
              for volume pricing and data residency options.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Grow?</h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose your plan and start generating—or receiving—qualified leads in minutes.
          </p>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4 text-sm">
            Prices exclude applicable taxes. Reflo Hub reserves the right to modify pricing with 30 days' notice.
          </p>
        </motion.section>
      </div>
    </section>
  );
};

export default Pricing;

