import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Feature = () => {
  const [openSection, setOpenSection] = useState(null);

  const featureSections = [
    {
      title: 'For Businesses',
      content: `
        <ul class="space-y-4">
          <li>
            <h4 class="font-semibold">1. Pay-for-Results… but with Real Protection</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You don't pay for ads. You pay freelancers only when a deal closes.</li>
              <li>You keep a Security Wallet on Reflo Hub.</li>
              <li>No wallet required until your first two leads are received.</li>
              <li>After that, AI calculates your minimum balance based on: number of active leads, average commission size, your past payment behavior, and your conversion rate.</li>
              <li>If you're converting leads well, your required balance goes up. If you're slow or risky, the system tightens your access to new leads.</li>
              <li>More leads = more responsibility. Better behavior = smoother flow.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">2. Blurred Leads Until You Prove Payment</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You'll still receive leads fast — but here's the guardrail:</li>
              <li>If your wallet is low or you haven't cleared past payments, new leads appear blurred.</li>
              <li>You can: top up your wallet to unlock them, or upload proof that you've paid previous freelancers.</li>
              <li>This protects freelancers without slowing honest businesses. No drama. Just accountability.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">3. AI Risk Scoring Instead of Guesswork</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Every business gets a risk score based on: how fast you pay freelancers, how many leads you convert, how often freelancers flag you, how often you dispute leads, and your wallet history.</li>
              <li>Low risk = smoother experience. High risk = stricter controls.</li>
              <li>You earn trust. We don't just give it.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">4. Two-Way Ratings (Real Reputation System)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Businesses can rate freelancers on lead quality: Ready-to-buy, Warm, Weak, Trash.</li>
              <li>Freelancers can rate businesses on: Paid on time, Delayed payment, Difficult behavior, Fair and professional.</li>
              <li>Bad actors get filtered out. Good players rise to the top.</li>
              <li>No more fake promises hiding behind shiny dashboards.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">5. Smart Lead Verification (Still There, but Better)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Every lead passes through: AI screening, duplicate checks, pattern analysis, and manual review when needed.</li>
              <li>If a lead is fake, you don't lose money.</li>
              <li>If a freelancer abuses the system, they get banned.</li>
              <li>You're protected — not just "promised protection."</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">6. Dynamic Referral Fees (Your Control)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You can still set: different commissions by product, different payouts by city, and different rates by deal size.</li>
              <li>Freelancers see changes instantly in their dashboard.</li>
              <li>No back-and-forth drama.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">7. Real-Time Performance Dashboard</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You get: leads in progress, converted deals, pending commissions, wallet balance, risk score, and freelancer ratings.</li>
              <li>You don't need spreadsheets. The system tells you where you stand.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">8. 1-Year Free Subscription (Same Promise)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You still pay: only a one-time setup fee, then 12 months free.</li>
              <li>After that, your normal monthly plan applies.</li>
              <li>The wallet is not a fee. It's a security reserve — your own money, not ours.</li>
              <li>If you leave Reflo Hub: you can withdraw unused wallet balance, but funds linked to active leads stay frozen until resolved.</li>
              <li>Fair and clean.</li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      title: 'For Freelancers',
      content: `
        <ul class="space-y-4">
          <li>
            <h4 class="font-semibold">1. You Keep 100% of Your Commission</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>This remains your biggest promise.</li>
              <li>Reflo Hub does not take a percentage from your earnings.</li>
              <li>Businesses pay you directly.</li>
              <li>5 months free, then a small monthly subscription.</li>
              <li>No commission cuts. Period.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">2. 5 Months Free + Monthly After</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>5 months FREE, then monthly subscription.</li>
              <li>This stays exactly as before.</li>
              <li>No hidden charges. No surprise deductions.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">3. Credit-Based Lead Submission</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You get: 3 credits per month included, option to buy more credits anytime.</li>
              <li>One lead = one credit.</li>
              <li>If your lead is rejected for being fake or spam, you may lose that credit.</li>
              <li>If it's rejected due to system error, we refund it.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">4. Security Wallet Protects You (Your New Advantage)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>This is the big win for freelancers.</li>
              <li>Because businesses must maintain a wallet: If a business disappears, delays, or commits fraud, Reflo Hub can compensate you partially or fully from their wallet.</li>
              <li>Not a perfect guarantee — but far better than before.</li>
              <li>Before = you were helpless. Now = you have real protection.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">5. Lead Status Transparency</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>You can see in real time: lead submitted, lead viewed, business contacted client, deal in progress, deal closed, payment pending, payment received.</li>
              <li>No more guessing.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">6. Smart Referral Links & QR Codes</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>Same as before, but cleaner: share links on WhatsApp, Instagram, Facebook, email.</li>
              <li>Track engagement inside your dashboard.</li>
              <li>See which leads actually moved forward.</li>
              <li>You work smarter, not harder.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">7. Two-Way Ratings Protect Good Freelancers</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>If you consistently send quality leads: your score goes up, businesses trust you more, you get priority visibility.</li>
              <li>If you spam: your account gets restricted, eventually banned.</li>
              <li>The system rewards real effort.</li>
            </ul>
          </li>
          <li>
            <h4 class="font-semibold">8. Dispute Center (Real Process, Not Drama)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li>If a business refuses to pay, you can file a dispute.</li>
              <li>Reflo Hub will review: chat logs, timestamps, proof of payment, wallet status.</li>
              <li>If the business is guilty: they can be banned, wallet funds may be used to compensate freelancers.</li>
              <li>If you're guilty: you can also be banned.</li>
              <li>Fair both ways.</li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      title: 'Marketplace & Matching Engine',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Reflo Hub still uses AI matching — but now it also considers: business risk score, freelancer quality score, wallet status, and dispute history.</li>
          <li>Better matches. Less chaos.</li>
          <li>And yes — two-way ratings matter here.</li>
        </ul>
      `,
    },
    {
      title: 'Security & Compliance',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>We still run on secure infrastructure with encryption.</li>
          <li>But now we also add: live KYC for everyone, behavioral monitoring, wallet safeguards, fraud detection, and dispute tracking.</li>
          <li>GDPR, CCPA, PIPEDA compliant — updated for your new model.</li>
        </ul>
      `,
    },
    {
      title: 'Analytics & Insights',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>You get: conversion heatmaps, lead velocity, wallet trends, freelancer performance, risk warnings, and weekly ROI summary.</li>
          <li>You see problems before they explode.</li>
        </ul>
      `,
    },
    {
      title: 'Mobile & Accessibility',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Same promise: works on mobile, no app required, responsive design, multilingual support coming.</li>
          <li>Not hype — just usable.</li>
        </ul>
      `,
    },
    {
      title: 'Scale & Reliability',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>Still cloud-based, scalable, and reliable.</li>
          <li>No shortcuts here.</li>
        </ul>
      `,
    },
    {
      title: 'Support & Success',
      content: `
        <ul class="list-disc pl-5 space-y-2">
          <li>You still get: live chat, knowledge base, tutorials, and Premium businesses get a dedicated success manager.</li>
          <li>But now support also handles: disputes, wallet issues, and fraud reviews.</li>
          <li>Real support, not canned replies.</li>
        </ul>
      `,
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-300/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(255,165,0,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Features</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Features That Fuel Win-Win Growth
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to match high-quality leads with eager businesses—without the ad spend gamble.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="/business"
              variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
              whileHover="hover"
              whileTap="tap"
              className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Start as a Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.a>
            <motion.a
              href="/freelancer"
              variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
              whileHover="hover"
              whileTap="tap"
              className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Earn as a Freelancer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Why Reflo Hub */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-6">Why Reflo Hub?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Traditional advertising burns budgets on impressions. Reflo Hub pays out only when real revenue is earned. Explore the features that power our risk-free ecosystem for both businesses and freelance referrers.
          </p>
        </motion.div>

        {/* Feature Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          {featureSections.map((section, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-orange-300/10 transition-all duration-300"
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.01 }}
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${openSection === index ? 'rotate-180' : ''}`}
                />
              </motion.button>
              <AnimatePresence>
                {openSection === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 py-4 text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover how Reflo Hub’s features can drive your success as a business or freelancer.
          </p>
          <motion.a
            href="mailto:support@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Features for Businesses and Freelancers" />
          <meta
            name="description"
            content="Discover Reflo Hub’s features: pay-for-success model, AI lead verification, real-time dashboards, and more for businesses and freelancers."
          />
          <meta
            name="keywords"
            content="Reflo Hub features, SaaS lead generation, pay for success, AI lead verification, freelancer commissions, business growth tools, real-time analytics"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;