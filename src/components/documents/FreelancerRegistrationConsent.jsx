import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const FreelancerRegistrationConsent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const consentSections = [
    {
      title: '1) Agreement to Terms',
      content: `
        <p class="mb-3">By completing registration, you agree to be bound by:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Reflo Hub Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>This Freelancer Registration Consent Form</li>
        </ul>
        <p>You confirm that all information you provide is truthful, accurate, and complete.</p>
      `,
    },
    {
      title: '2) Subscription, Credits & Pricing (Confirmed)',
      content: `
        <div class="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 dark:border-orange-300 p-4 my-4 rounded-r">
          <p class="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚠️ Pricing Currency Note</p>
          <p class="text-orange-700 dark:text-orange-300"><strong>INR pricing is only available for Indian users.</strong> <strong>USD pricing applies to all global users outside of India.</strong></p>
        </div>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.1 Setup Fee + Free Period</h4>
        <p class="mb-3">You agree to:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>No setup fee worldwide — 5 months FREE subscription</li>
        </ul>
        <p class="mb-4">Setup fees are non-refundable, except as required by law.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.2 Monthly Subscription (After Free Period)</h4>
        <p class="mb-3">After the 5-month free period ends, you agree to pay:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>$9.99 USD/month (or ₹699 INR/month)</li>
        </ul>
        <p class="mb-4">to continue access to your dashboard, referral tools, and subscription benefits.</p>
        <p class="mb-4">Monthly fees are non-refundable once charged, except as required by law.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.3 Monthly Credits Included</h4>
        <p class="mb-3">Your subscription includes:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>3 lead submission credits per month</li>
        </ul>
        <p class="mb-3">You may purchase additional credits (credit packs) inside your dashboard.</p>
        <p class="mb-3">You understand:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>1 lead submission = 1 credit deduction</li>
          <li>Credits have no cash value and are non-transferable</li>
          <li>Unused credits may expire or reset per platform rules shown in your dashboard</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.4 Updates to Fees or Credits</h4>
        <p class="mb-4">Reflo Hub may update subscription fees or credit pricing with at least 15 days' notice via email or in-app notification. Continued use after changes takes effect means you accept the updates.</p>
      `,
    },
    {
      title: "3) Your Role as a Lead Referrer (What You Do / Don't Do)",
      content: `
        <p class="mb-3">You agree and understand that:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Your role is to refer potential customers (leads) to businesses listed on Reflo Hub</li>
          <li>You are not required to sell, negotiate, close deals, or manage business operations</li>
          <li>You may submit leads from any location or country, regardless of where you live</li>
          <li>You must submit leads ethically and with permission-based information (no scraping, harvesting, or fake data)</li>
        </ul>
      `,
    },
    {
      title: '4) Lead Quality Standards (Strict Rules)',
      content: `
        <p class="mb-3">You agree that the following are prohibited:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Fake names, fake phone numbers, or made-up customer data</li>
          <li>Scraped/harvested databases or purchased lead lists</li>
          <li>Repeated duplicate submissions</li>
          <li>Misleading or manipulated lead details</li>
          <li>Spam submissions to "test" businesses</li>
          <li>Submitting personal data of a minor without verifiable parental consent</li>
        </ul>
        <p class="mb-4">Reflo Hub may use AI and manual review to validate lead quality. Leads may be rejected if they fail platform standards.</p>
        <p class="mb-3">If a lead is rejected, Reflo Hub may (at its discretion):</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>refund the credit, or</li>
          <li>deny refund if fraud or abuse is suspected</li>
        </ul>
      `,
    },
    {
      title: '5) Direct Payment + "100% Commission" Promise',
      content: `
        <p class="mb-3">You acknowledge and agree:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Businesses pay freelancers directly for successful conversions</li>
          <li>Reflo Hub does not deduct any commission percentage from your referral earnings</li>
          <li>Any referral fee amount is decided between you and the business through approved communication channels (e.g., in-app chat)</li>
        </ul>
        <p class="mb-3">You are responsible for your own:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>income reporting</li>
          <li>tax filings</li>
          <li>legal compliance in your country</li>
        </ul>
      `,
    },
    {
      title: '6) Business Security Wallet (Important Clarification)',
      content: `
        <p class="mb-4">You acknowledge that Reflo Hub uses a Business Security Wallet system as a safety feature for freelancer protection.</p>
        <p class="mb-3">This wallet:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>is maintained by the business, not you</li>
          <li>may be used by Reflo Hub in limited cases to compensate freelancers if a business is found guilty in disputes or fraud investigations</li>
          <li>is not a guarantee of full recovery in every case</li>
        </ul>
      `,
    },
    {
      title: '7) Ratings System & Quality/Risk Scoring',
      content: `
        <p class="mb-4">To maintain platform quality and safety:</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.1 Business Rates Freelancer (Lead Quality Ratings)</h4>
        <p class="mb-3">Businesses may rate your lead quality, including tags such as:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>good lead / ready to buy</li>
          <li>warm lead</li>
          <li>low-quality / irrelevant / suspected spam</li>
        </ul>
        <p class="mb-3">These ratings may affect:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>your quality score</li>
          <li>lead limits</li>
          <li>account visibility</li>
          <li>account status (including restrictions)</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.2 Freelancer Rates Business (Payment & Conduct Ratings)</h4>
        <p class="mb-3">You may rate businesses for:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>paying on time</li>
          <li>delaying payments</li>
          <li>refusing to pay</li>
          <li>bad behavior toward leads</li>
          <li>bypass attempts</li>
        </ul>
        <p class="mb-4">False, retaliatory, or abusive ratings are prohibited and may result in enforcement action.</p>
      `,
    },
    {
      title: '8) Anti-Circumvention (Zero Tolerance)',
      content: `
        <p class="mb-3">To protect platform integrity:</p>
        <p class="mb-3">You must not approach businesses listed on Reflo Hub to deal outside the platform in order to:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>hide conversions</li>
          <li>bypass platform safety rules</li>
          <li>avoid disputes logging</li>
          <li>manipulate referral payments</li>
        </ul>
        <p class="mb-3">If Reflo Hub determines you attempted to bypass the system, you may face:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>immediate and permanent ban</li>
          <li>loss of access to your account and remaining credits</li>
          <li>possible legal action in serious cases</li>
        </ul>
        <p class="mb-4">This policy also applies to businesses.</p>
      `,
    },
    {
      title: '9) Dispute Handling (How You Protect Yourself)',
      content: `
        <p class="mb-3">If a dispute arises regarding commission payment or business behavior:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>You may submit a dispute through Reflo Hub's Dispute Centre / Help Centre</li>
          <li>You must provide supporting evidence such as:</li>
        </ul>
        <ul class="list-disc pl-10 space-y-2 mb-4">
          <li>screenshots</li>
          <li>chat logs</li>
          <li>call logs</li>
          <li>invoices / proof</li>
          <li>any other relevant documents</li>
        </ul>
        <p class="mb-3">Reflo Hub's dispute team may:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>review platform logs and timestamps</li>
          <li>request additional evidence</li>
          <li>issue a binding platform decision</li>
          <li>take enforcement action (including bans)</li>
        </ul>
        <p class="mb-4">You acknowledge that Reflo Hub may not be able to recover 100% of unpaid commissions in every case, but will attempt best-effort recovery through the platform's available controls (including the Business Security Wallet where applicable).</p>
      `,
    },
    {
      title: '10) Fraud Policy (Immediate Lifetime Ban)',
      content: `
        <p class="mb-4">Reflo Hub has a strict fraud policy.</p>
        <p class="mb-3">If Reflo Hub determines you committed fraud (even on a first incident), you may be permanently banned. Fraud includes, without limitation:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>fake leads</li>
          <li>lead manipulation</li>
          <li>collusion with businesses</li>
          <li>fake disputes or fake evidence</li>
          <li>abuse of ratings</li>
          <li>any activity intended to deceive or exploit the platform</li>
        </ul>
        <p class="mb-4">If both business and freelancer are found guilty in the same event, Reflo Hub may ban both and may decline payouts or recovery.</p>
      `,
    },
    {
      title: '11) Identity & Live Photo Verification (KYC)',
      content: `
        <p class="mb-3">You agree to complete verification requirements, including:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>live photo verification</li>
          <li>valid identity documents if requested</li>
          <li>accurate payment details</li>
        </ul>
        <p>If you fail verification, your registration may be declined or restricted.</p>
      `,
    },
    {
      title: '12) Suspension / Termination',
      content: `
        <p class="mb-3">Your account may be restricted, suspended, or terminated for:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>submitting fake or low-quality leads repeatedly</li>
          <li>circumventing platform rules</li>
          <li>repeated negative ratings/flags from businesses</li>
          <li>spam or abusive conduct</li>
          <li>fraud or misconduct</li>
        </ul>
        <p class="mb-3">If terminated:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>remaining credits may be forfeited</li>
          <li>subscription fees are not refundable (except where required by law)</li>
        </ul>
      `,
    },
    {
      title: '13) Consent to Communication',
      content: `
        <p class="mb-3">By registering, you consent to receive:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>transactional emails</li>
          <li>system alerts and updates</li>
          <li>policy notices</li>
          <li>occasional promotional messages (you may opt out where applicable)</li>
        </ul>
        <p>You may manage notification preferences in account settings.</p>
      `,
    },
    {
      title: '14) Acknowledgment & Agreement',
      content: `
        <p class="mb-3">By checking the box and clicking "I Agree," you confirm that:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>you have read and understood this Consent Form</li>
          <li>you agree to follow Reflo Hub's platform rules</li>
          <li>violations may result in permanent removal and possible legal consequences</li>
        </ul>
      `,
    },
    {
      title: '15) Contact',
      content: `
        <p class="mb-3">For questions or support, contact:</p>
        <p class="mb-2"><strong>Reflo Hub Support</strong></p>
        <p><strong>Email:</strong> <a href="mailto:support@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a></p>
      `,
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Freelancer Registration Consent</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Freelancer Registration Consent Form
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to Reflo Hub. Please read this consent form carefully before completing your registration.
          </p>
        </motion.div>

        {/* Company Details Header */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Company:</strong> Reflo Hub FZ LLC</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Address:</strong> IFZA Business Park (DDP), PO Box 342001, Dubai, United Arab Emirates</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:support@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a> | <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
            <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Tel:</strong> 1-855-220-0505</p>
            <p className="text-gray-600 dark:text-gray-300">By signing up on Reflo Hub, you ("Freelancer", "you", "your") confirm that you are authorized to register yourself, that the information you provide is accurate, and that you agree to be legally bound by this Freelancer Registration Consent Form.</p>
          </div>
        </motion.div>

        {/* Consent Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: January 21, 2026</p>
          {consentSections.map((section, index) => (
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
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
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
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact our support team for any inquiries about our freelancer registration consent form.
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
          <meta name="title" content="Reflo Hub – Freelancer Registration Consent Form" />
          <meta
            name="description"
            content="Review the Freelancer Registration Consent Form for Reflo Hub, outlining terms for freelancers joining the platform, including subscription fees, coin policy, and anti-circumvention policies."
          />
          <meta
            name="keywords"
            content="Reflo Hub freelancer registration, consent form, SaaS platform terms, lead referral, anti-circumvention policy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FreelancerRegistrationConsent;