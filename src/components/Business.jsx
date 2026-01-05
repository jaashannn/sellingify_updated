import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Shield, Globe, Star, BarChart } from 'lucide-react';
import { getSaaSWebsite } from '../utils/env';

// Reusable Card Component
const Card = ({ title, description, icon: Icon, index, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
  >
    {Icon && <Icon className="w-8 h-8 text-orange-300 mx-auto mb-4" aria-hidden="true" />}
    <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
  </motion.div>
);

// Reusable Button Component
const Button = ({ href, children, gradient = false, ariaLabel, className = '' }) => (
  <motion.a
    href={href}
    role="button"
    aria-label={ariaLabel}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-block w-full text-center font-medium rounded-lg py-3 px-6 transition-all duration-300 ${gradient
      ? 'bg-gradient-to-r from-sky-500 to-orange-300 text-white hover:shadow-lg hover:shadow-orange-300/20'
      : 'bg-gray-100/60 dark:bg-white/5 hover:bg-gray-200/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
      } ${className}`}
  >
    {children}
  </motion.a>
);

const Business = () => {
  const ref = useRef(null);
  // ensure computed position is non-static for useScroll
  // add explicit inline style below on the container div

  const [pricing, setPricing] = useState(null);
  useEffect(() => {
    let mounted = true;
    const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:');
    (async () => {
      const candidates = ['/data/pricing.json'];
      if (isLocal) {
        const params = new URLSearchParams(window.location.search);
        const forced = (params.get('pricing') || '').toLowerCase();
        if (forced === 'in') {
          candidates.push('/data/pricing-in.json');
        } else if (forced === 'us' || forced === 'global') {
          candidates.push('/data/pricing-global.json');
        } else {
          candidates.push('/data/pricing-in.json', '/data/pricing-global.json');
        }
      }
      for (const url of candidates) {
        try {
          const res = await fetch(url, { cache: 'no-store' });
          if (!res.ok) continue;
          const data = await res.json();
          if (mounted) setPricing(data);
          break;
        } catch (e) {
          continue;
        }
      }
    })();
    return () => { mounted = false; };
  }, []);

  // --- helper: startCase for nicer labels ---
  const startCase = (s = '') =>
    String(s)
      .replace(/[_-]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase());

  // --- helper: normalize plan.features to an array for safe mapping ---
  const planFeaturesArray = (features) => {
    if (!features) return [];
    if (Array.isArray(features)) return features;
    if (typeof features === 'object') {
      return Object.entries(features).map(([k, v]) => {
        if (typeof v === 'boolean') return v ? startCase(k) : `No ${startCase(k)}`;
        return `${startCase(k)}: ${v}`;
      });
    }
    return [String(features)];
  };

  // helper: format price using pricing.currency (INR / USD)
  const formatPrice = (val) => {
    if (val == null) return '—';
    const cur = pricing?.currency || 'INR';
    if (typeof val === 'number') {
      if (cur === 'INR') return `₹${val.toLocaleString('en-IN')}`;
      return `$${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return String(val);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} style={{ position: 'relative' }} className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </motion.div>

      {/* Floating Particles (Reduced to 30 for performance) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const delay = Math.random() * 5;
          const duration = Math.random() * 10 + 10;
          const x = Math.random() * 100;
          const y = Math.random() * 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: i % 3 === 0 ? 'rgba(255, 165, 0, 0.3)' : i % 2 === 0 ? 'rgba(14, 165, 233, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                boxShadow: `0 0 ${size * 2}px ${size}px ${i % 3 === 0 ? 'rgba(255, 165, 0, 0.1)' : i % 2 === 0 ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255, 255, 255, 0.05)'}`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [(Math.random() - 0.5) * 50, 0, (Math.random() - 0.5) * 50],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <section className="pt-12 pb-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 text-center">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-orange-300" aria-hidden="true" />
              {/* <span className="text-sm text-gray-700 dark:text-gray-100">Last Updated: July 01, 2025</span> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block mb-2">🏆 Dominate Your City.</span>
                <span className="block mb-4">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Lock Out</span> your Competitors.
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-6 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Get exclusive access to ready-to-buy customers via{' '}
                <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent font-bold">Reflo Hub</span>.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-400 rounded-lg p-4 md:p-6 mb-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium mb-2">
                  <span className="font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">Only 2-3 businesses</span> per category per city
                </p>
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium">
                  <span className="font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">Premium plan = ONLY 1 business</span> per city
                </p>
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">
                  ⚡ Secure your slot before someone else takes your city.
                </span>
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Join as Freelancer
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </a>

              <a href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 0 40px rgba(30, 64, 175, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-orange-300 to-sky-500 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-white dark:text-white rounded-xl font-semibold text-lg hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Join as Business
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {[
                { icon: Check, text: 'No Portal Commission' },
                { icon: Globe, text: 'Global Leads' },
                { icon: BarChart, text: 'High ROI' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-4 py-2"
                >
                  <item.icon className="w-4 h-4 text-orange-300 mr-2" aria-hidden="true" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Why Join Reflo Hub */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🌟 Why Join <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Reflo Hub</span>?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tired of wasting marketing budgets on leads that don’t convert? With Reflo Hub, connect directly with qualified leads from verified freelancers actively seeking clients for your services. No commission. Predictable monthly fees. Maximum ROI.
          </motion.p>
        </section>

        {/* Limited Availability */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📌 Limited Availability: <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Exclusive Business Listings</span>!
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Reflo Hub limits listings to 2-3 businesses per category per city to ensure top lead quality.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: BarChart, title: 'Better Quality Leads', description: 'Exclusive listings ensure high-quality referrals.' },
              { icon: Globe, title: 'Less Competition', description: 'Only 2-3 businesses per category per city.' },
              { icon: Star, title: 'Improved Conversion Rates', description: 'Targeted leads boost your closing success.' },
              { icon: Check, title: 'Enhanced Visibility', description: 'Stand out in your category and location.' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} icon={item.icon} index={index} className="text-center" />
            ))}
          </div>

        </section>

        {/* Industries We Serve */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💼 Industries We <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Serve</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              'Mortgages and Real Estate',
              'Immigration Advisors',
              'Dentistry and Skincare Clinics',
              'Attorneys and Insurance Representatives',
              'Home Improvements & HVAC',
              'Automobile Parts & Sales',
              'Truck Driving Schools',
              'Education and Language Study',
              'Driveways, Concrete, and Landscaping',
              'Events & Travel Locations',
              'Furniture and Interior Design',
              'Website Development and Digital Marketing',
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-gray-900 dark:text-gray-300">{industry}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-600 dark:text-gray-300 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            View All Categories on our <a href="/all-categories" className="text-orange-300 hover:underline" aria-label="View all categories">All Categories</a> page.

          </motion.p>
        </section>

        {/* How Reflo Hub Benefits Your Company */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📊 How Reflo Hub <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Benefits Your Company</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: '1️⃣ Easy Registration', description: 'Fill out a brief registration with live photo verification to prevent fraud.' },
              { title: '2️⃣ Simple Lead Administration', description: 'Freelancers submit leads directly via the dashboard. Review leads with full contact details instantly.' },
              { title: '3️⃣ Closing Deals and Paying Directly', description: 'Contact leads and close deals independently. Pay freelancers directly with no platform fees.' },
              { title: '4️⃣ Monitor and Scale', description: 'Track leads and conversions via your dashboard. Negotiate commissions privately and scale with flexible marketing campaigns.' },
              { title: '5️⃣ Lock in your territory', description: 'secure city-wide exclusivity and be the only business in your niche to receive leads from Reflo Hub.' },
              { title: '6️⃣ One Year Free', description: 'We are giving you one year free for business. Start your journey with Reflo Hub at no cost for the first 12 months and experience the power of quality leads.' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} index={index} className="text-center" />
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🎖 Pricing Plans Designed for <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Maximum ROI</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Transparent, predictable pricing with no hidden fees. Choose your plan:
          </motion.p>

          {/* Launch Offer banner on Business page (from pricing.meta.launchOffer.business) */}
          {pricing?.meta?.launchOffer?.business && (
            <motion.div className="mx-auto max-w-3xl mb-6 rounded-2xl border border-orange-300/25 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/5 dark:to-orange-900/10 p-6 shadow-md"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
               <div className="flex items-start gap-4">
                 <div className="flex-shrink-0"><Sparkles className="w-8 h-8 text-orange-400" /></div>
                 <div>
                   <h3 className="text-xl md:text-2xl font-extrabold text-orange-600 mb-1">
                     {pricing.meta.launchOffer.business.title}
                   </h3>
                   <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-snug mb-1">
                     {pricing.meta.launchOffer.business.subtitle}
                   </p> 
                   {pricing.meta.launchOffer.business.note && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{pricing.meta.launchOffer.business.note}</p>}

                  <div className="mt-4 flex justify-center">
                    <motion.a
                      href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Register Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                  </div>
                 </div>
               </div>
             </motion.div>
           )}

          {/* Single partitioned container for the three plans */}
          <div className="max-w-6xl mx-auto mb-6">
            <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-200 dark:md:divide-white/10">
                 {(pricing?.businessPackages || []).map((pkg, idx) => (
                  <div key={pkg.key || idx} className="flex-1 p-6 md:p-8">
                    <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{pkg.bestFor || pkg.description || ''}</p>

                    <div className="mb-4 p-4 bg-gradient-to-br from-orange-400/20 to-orange-300/10 dark:from-orange-400/30 dark:to-orange-300/20 rounded-lg border-2 border-orange-400/50 shadow-sm">
                      {/* highlight FREE first (larger, green, bold) */}
                      <div className="text-xl md:text-3xl font-bold text-green-700 dark:text-green-300 mb-2">12 months FREE</div>

                      {/* reduced price size and orange; One-time setup label below */}
                      <div className="text-xl md:text-2xl text-orange-400 font-normal">One-time setup</div>
                      <div className="text-xl md:text-1xl text-orange-400 font-normal mb-1">{pricing?.currency === 'INR' ? `₹${pkg.oneTimeSetup}` : `$${pkg.oneTimeSetup}`}</div>
                    </div>

                    <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2">
                      <strong className="text-gray-800 dark:text-gray-100">Leads / month:</strong>{' '}
                      <span className="font-semibold">{pkg.features?.leads ?? '—'}</span>
                    </div>
                    <div className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                      <strong className="text-gray-800 dark:text-gray-100">Free ads / month:</strong>{' '}
                      <span className="font-semibold">{pkg.features?.freeAdsPerMonth ?? '—'}</span>
                    </div>

                    <div className="mt-4">
                      {pkg.verifiedBadge && pkg.verifiedBadge.inclusive ? (
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-700 text-sky-700 dark:text-sky-200 font-semibold text-sm shadow-sm">
                          <span aria-hidden className="inline-block w-5 h-5 rounded-full bg-sky-600/10 text-sky-600 flex items-center justify-center">✓</span>
                          <span>Verified badge included</span>
                        </div>
                      ) : pkg.verifiedBadge ? (
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          <strong className="text-gray-800 dark:text-gray-100">Verified badge:</strong>{' '}
                          {pkg.verifiedBadge.monthly ? <span className="font-semibold">{pricing?.currency === 'INR' ? `₹${pkg.verifiedBadge.monthly}` : `$${pkg.verifiedBadge.monthly}`}/mo</span> : ''}
                          {pkg.verifiedBadge.monthly && pkg.verifiedBadge.annual ? ' · ' : ''}
                          {pkg.verifiedBadge.annual ? <span className="font-semibold">{pricing?.currency === 'INR' ? `₹${pkg.verifiedBadge.annual}` : `$${pkg.verifiedBadge.annual}`}/yr</span> : ''}
                        </div>
                      ) : null}
                    </div>
                  </div>
                 ))}
               </div>
             </div>

            {/* single CTA centered below partitioned box */}
            <div className="mt-6 text-center">
              <a href="/pricing#business" className="inline-block bg-orange-400 text-white px-8 py-3 rounded-full font-semibold">View full pricing</a>
            </div>
          </div>

          {/* Optional Ads */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">📢 Boost Visibility with Optional Ads</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(
                pricing?.additionalAdCampaigns?.length
                  ? pricing.additionalAdCampaigns
                  : [
                      { key: 'province', label: 'Province/State Ad', price: 5, timeline: '1 week', description: '1-week ad in your registered province/state.' },
                      { key: 'additional_province', label: 'Additional Province/State', price: 2, timeline: '1 week', description: 'Add more provinces/states for targeted reach.' },
                      { key: 'nationwide', label: 'Nationwide Ad', price: 15, timeline: '1 week', description: 'Reach all states/provinces for maximum exposure.' },
                    ]
              ).map((ad, index) => {
                const title = ad.label || ad.title || ad.name || `Ad ${index + 1}`;
                const priceSuffix = ad.timeline && /week/i.test(ad.timeline) ? '/week' : '';
                const priceText = `${formatPrice(ad.price)}${priceSuffix}`;
                const description = ad.description || (ad.timeline ? `${ad.timeline} ad` : '');
                return (
                  <motion.div
                    key={ad.key || ad.label || index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-300 dark:border-white/10 rounded-xl p-6 text-center"
                  >
                    <div className="text-2xl font-bold mb-1">{title}</div>
                    {/* use consistent emphasized price styling */}
                    {/* <div className="text-xl md:text-2xl font-extrabold text-orange-400 mb-2">{priceText}</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                  </motion.div>
                );
              })}
            </div>
             </motion.div> */}
        </section>


        {/* Trust and Security */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🔍 Built-in <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Trust & Security</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Check, title: 'Live Photo Verification', description: 'Avoid spam and fraudulent accounts.' },
              { icon: Star, title: 'Clear Ratings & Reviews', description: 'Check the caliber of the freelancer.' },
              { icon: Shield, title: 'Non-Circumvention Agreements', description: 'Safeguard your rights.' },
              { icon: Globe, title: 'Dispute Resolution', description: 'Reflo Hub provides open mediation for commission disputes.' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} icon={item.icon} index={index} className="text-center" />
            ))}
          </div>
        </section>

        {/* Worldwide Reach, Local Impact */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🌎 Worldwide Reach, <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Local Impact</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our freelancers deliver leads from across the globe, connecting you directly with potential clients wherever you operate. Scale effortlessly across borders.
          </motion.p>
        </section>

        {/* Why Reflo Hub is the Best Choice */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🥇 Why Reflo Hub is the <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Best Choice</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'No Portal Commission', description: 'Clear subscription-only model with no commission fees.' },
              { title: 'Direct Payments to Freelancers', description: 'Complete transparency, no intermediary costs.' },
              { title: 'Exclusive Listings', description: 'Only 2-3 businesses per city or category.' },
              { title: 'Ensured High-Quality Leads', description: 'Motivated, pre-screened recommendations.' },
              { title: 'Maximum ROI', description: 'Lower advertising costs with predictable monthly fees.' },
              { title: 'Lock in your territory', description: 'secure city-wide exclusivity and be the only business in your niche to receive leads from Reflo Hub.' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} index={index} className="text-center" />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📞 Ready to Get <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">High-Quality Referral Leads</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Act fast! Limited spots per category ensure premium quality. Secure your spot now and start growing with Reflo Hub’s high-quality referrals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}
                role="button"
                aria-label="Join Reflo Hub as a business"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  👉 Join Reflo Hub Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Join CTA Section */}
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Join Reflo Hub</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Choose your path and start your journey with Reflo Hub today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Join as Freelancer
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </a>

              <a href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 0 40px rgba(30, 64, 175, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-orange-300 to-sky-500 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-white dark:text-white rounded-xl font-semibold text-lg hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Join as Business
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Business Lead Generation" />
          <meta
            name="description"
            content="Join Reflo Hub to access high-quality referral leads from freelancers worldwide. Limited to 2-3 businesses per category per city for maximum ROI. No commission fees."
          />
          <meta
            name="keywords"
            content="Reflo Hub business, lead generation, referral leads, business growth, no commission, exclusive listings, high ROI"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Business;

