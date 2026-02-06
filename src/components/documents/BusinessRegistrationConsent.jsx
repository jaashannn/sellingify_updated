import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BusinessRegistrationConsent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const consentSections = [
    {
      title: '1) Agreement to Terms',
      content: `
        <p class="mb-3">By completing registration, you agree to be bound by:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Reflo Hub Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>This Business Registration Consent Form</li>
        </ul>
        <p>You confirm that all information you provide is accurate, complete, and not misleading.</p>
      `,
    },
    {
      title: '2) Subscription & Fee Structure (Pricing Confirmed)',
      content: `
        <div class="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 dark:border-orange-300 p-4 my-4 rounded-r">
          <p class="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚠️ Pricing Currency Note</p>
          <p class="text-orange-700 dark:text-orange-300"><strong>INR pricing is only available for Indian users.</strong> <strong>USD pricing applies to all global users outside of India.</strong></p>
        </div>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.1 One-Time Setup Fee (Paid at Registration)</h4>
        <p class="mb-3">You agree to pay the one-time setup fee based on your selected plan:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Global (USD):</strong> Basic $99 | Standard $249 | Premium $399</li>
          <li><strong>India (INR):</strong> Basic ₹2,999 | Standard ₹3,999 | Premium ₹9,999</li>
        </ul>
        <p class="mb-4">Setup fees are non-refundable, except as required by law.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.2 Launch Offer — 12 Months FREE</h4>
        <p class="mb-4">After paying the setup fee, you receive 12 months of subscription free ("Free Period"). During this Free Period, you have access to features included in your selected plan, subject to platform rules and safety controls (including lead visibility restrictions under the Security Wallet system described below).</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.3 Monthly Subscription Fee (After First Year)</h4>
        <p class="mb-3">After the Free Period ends, you agree to pay the monthly subscription fee:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Global (USD):</strong> Basic $29/month | Standard $49/month | Premium $149/month</li>
          <li><strong>India (INR):</strong> Basic ₹999/month | Standard ₹1,999/month | Premium ₹3,999/month</li>
        </ul>
        <p class="mb-4">Annual plans (if offered) may include discounts and will be displayed inside your dashboard.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.4 Advertising Access Timeline</h4>
        <p class="mb-4">Advertising features (if included in your plan or offered as add-ons) may become available after a minimum onboarding period (e.g., two months) to ensure proper setup and safe platform usage.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.5 Fee Updates</h4>
        <p class="mb-4">Reflo Hub may revise fees in the future. Material fee updates will be communicated via email and/or in-app notification at least 15 days in advance. Continued use after changes constitutes acceptance.</p>
      `,
    },
    {
      title: '3) Platform Model & Direct Dealings',
      content: `
        <p class="mb-3">Reflo Hub is a SaaS platform connecting Businesses with Freelancers who submit leads from their social and professional networks.</p>
        <p class="mb-3">You agree that:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>You will engage professionally with all leads.</li>
          <li>You will deal ethically with clients and freelancers.</li>
          <li>You will pay freelancers directly for successful conversions based on the agreed referral fee.</li>
          <li>Reflo Hub does not guarantee conversions, revenue, or lead volume.</li>
        </ul>
      `,
    },
    {
      title: '4) Freelancer Commission Payment (Mandatory Timeline)',
      content: `
        <p class="mb-3">By registering, you acknowledge and agree:</p>
        <p class="mb-3">You must release the agreed referral commission to the Freelancer within fifteen (15) days after:</p>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>the referred deal is successfully closed, and</li>
          <li>you receive payment from the client.</li>
        </ol>
        <p class="mb-3">Failure to pay within this timeframe may result in:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>restricted access to new leads</li>
          <li>account suspension</li>
          <li>permanent ban</li>
          <li>additional enforcement actions under Reflo Hub's policies</li>
        </ul>
      `,
    },
    {
      title: '5) Rating System & Risk Analysis (Mutual Accountability)',
      content: `
        <p class="mb-4">You acknowledge and agree that Reflo Hub uses a two-way rating and flag system for safety and quality control:</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">5.1 Business Rates Freelancer (Lead Quality)</h4>
        <p class="mb-3">You may rate freelancers on the quality of submitted leads, including whether a lead is:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>ready-to-buy / high intent</li>
          <li>medium intent</li>
          <li>low quality / irrelevant / suspected spam</li>
        </ul>
        <p class="mb-4">These ratings affect a Freelancer's platform standing, limits, and risk score.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">5.2 Freelancer Rates Business (Payment & Conduct)</h4>
        <p class="mb-3">Freelancers may rate and flag your business based on:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>payment delays</li>
          <li>refusal to pay</li>
          <li>poor conduct</li>
          <li>lack of seriousness toward conversions</li>
          <li>attitude toward clients</li>
        </ul>
        <p class="mb-4">These ratings and flags affect your Business Risk Score and may increase lead restrictions and Security Wallet requirements.</p>
        <p class="mb-4">You agree not to submit retaliatory or false ratings. Abusive rating behavior may result in enforcement action.</p>
      `,
    },
    {
      title: '6) Security Wallet System (Payment Safety Feature)',
      content: `
        <p class="mb-4">To protect freelancer earnings and platform integrity, Reflo Hub uses a Business Security Wallet.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.1 Wallet Activation Rule (IMPORTANT)</h4>
        <p class="mb-3">You are not required to maintain a Security Wallet balance until ALL of the following occurs:</p>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>you have received at least two (2) leads, and</li>
          <li>you have converted at least one (1) lead into a paid client</li>
        </ol>
        <p class="mb-4">After you meet both conditions, the Security Wallet becomes active and mandatory.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.2 Dynamic Wallet Requirement (AI Risk Based)</h4>
        <p class="mb-3">Once activated, Reflo Hub's risk system may require you to maintain a minimum wallet balance. The minimum may increase or decrease based on factors such as:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>number of active leads</li>
          <li>conversion volume</li>
          <li>average referral commission exposure</li>
          <li>dispute history</li>
          <li>freelancer ratings/flags</li>
          <li>fraud signals</li>
        </ul>
        <p class="mb-4">You acknowledge that the wallet minimum is dynamic and may be updated periodically.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.3 Minimum Wallet Baseline (After Activation)</h4>
        <p class="mb-3">After activation, minimum wallet ranges typically start at:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>India:</strong> ₹2,500 to ₹10,000 (risk-based)</li>
          <li><strong>Global:</strong> $100 to $200 (risk-based)</li>
        </ul>
        <p class="mb-4">The required minimum may rise with increased lead activity and/or higher risk classification.</p>
      `,
    },
    {
      title: '7) Blurred/Restricted Lead Access (Unlock Rules)',
      content: `
        <p class="mb-4">You acknowledge that Reflo Hub may restrict or blur lead details for safety reasons.</p>
        <p class="mb-3">If your account is flagged as higher risk, under review, or has outstanding payment issues, Reflo Hub may:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>blur customer contact details, and/or</li>
          <li>restrict new lead access</li>
        </ul>
        <p class="mb-3">To unlock new leads, you may be required to do one or both of the following:</p>
        <p class="mb-2"><strong>Option A — Clear Previous Payments</strong></p>
        <p class="mb-4">Upload proof that you have paid outstanding freelancer commissions.</p>
        <p class="mb-2"><strong>Option B — Top Up Security Wallet</strong></p>
        <p class="mb-4">Deposit enough funds to meet your required wallet minimum.</p>
        <p class="mb-4">Reflo Hub may verify proof before releasing lead details.</p>
      `,
    },
    {
      title: '8) Anti-Circumvention (Zero Tolerance)',
      content: `
        <p class="mb-3">You agree that you will not bypass Reflo Hub to:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>avoid subscription obligations</li>
          <li>avoid wallet safety controls</li>
          <li>evade commission payments</li>
          <li>hide conversions</li>
        </ul>
        <p class="mb-3">Examples of prohibited conduct include:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>contacting freelancers outside the platform to avoid logging outcomes</li>
          <li>settling commissions privately while hiding deal conversion status</li>
          <li>attempting to obtain lead details through manipulation or deception</li>
        </ul>
        <p class="mb-3">Violation of this clause may result in:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>immediate permanent ban without refund</li>
          <li>blacklisting from future participation</li>
          <li>possible legal action where applicable</li>
        </ul>
        <p class="mb-4">This policy applies equally to freelancers found guilty of similar conduct.</p>
      `,
    },
    {
      title: '9) Fraud Policy (Immediate Lifetime Ban)',
      content: `
        <p class="mb-4">Reflo Hub applies a strict fraud policy.</p>
        <p class="mb-3">If Reflo Hub determines that you committed fraud (even on a first incident), your account may be permanently banned. Fraud includes, without limitation:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>fake payment proof</li>
          <li>intentional withholding of commission</li>
          <li>lead theft or bypass tactics</li>
          <li>manipulation of disputes</li>
          <li>abusive or deceptive behavior intended to harm freelancers or the platform</li>
        </ul>
      `,
    },
    {
      title: '10) Dispute Resolution & Investigation',
      content: `
        <p class="mb-3">In the event of a dispute:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Reflo Hub will review evidence and platform logs</li>
          <li>both parties may be required to provide proof within required timeframes</li>
          <li>Reflo Hub's dispute team may issue a binding decision</li>
        </ul>
        <p class="mb-3">If you are found guilty:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>your account may be permanently banned</li>
          <li>Reflo Hub may use wallet funds (if available) to compensate affected freelancers</li>
        </ul>
      `,
    },
    {
      title: '11) Wallet Funds Use, Penalties, and Distribution',
      content: `
        <p class="mb-4">You acknowledge and agree:</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">11.1 If Business is Found Guilty</h4>
        <p class="mb-3">If you are found guilty and funds exist in your Security Wallet:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Reflo Hub may pay affected freelancers from available wallet funds</li>
          <li>Reflo Hub may retain remaining wallet funds as a penalty for fraud/misconduct</li>
        </ul>
        <p class="mb-3"><strong>Example:</strong></p>
        <p class="mb-3">If a freelancer is owed $200 and your wallet contains $500:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>$200 may be paid to the freelancer</li>
          <li>$300 may be retained as penalty</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">11.2 If Wallet is Insufficient (Multiple Affected Freelancers)</h4>
        <p class="mb-4">If multiple freelancers are affected and wallet funds are insufficient, Reflo Hub may distribute available funds in equal portions among affected freelancers, as per platform policy.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">11.3 Mutual Fault</h4>
        <p class="mb-4">If Reflo Hub determines both Business and Freelancer are guilty of fraud or serious misconduct, Reflo Hub may ban both accounts and may decline any payout or recovery.</p>
      `,
    },
    {
      title: '12) Verification Requirement (KYC / KTB)',
      content: `
        <p class="mb-3">You agree to complete verification requirements, including:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>valid business identity documents</li>
          <li>live photo verification during registration</li>
          <li>additional documentation if requested</li>
        </ul>
        <p>Failure to complete verification may result in denied access or restrictions.</p>
      `,
    },
    {
      title: '13) Termination / Suspension',
      content: `
        <p class="mb-3">Reflo Hub may suspend or terminate your account for:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>violating these terms</li>
          <li>non-payment of platform fees</li>
          <li>refusing to pay freelancer commissions</li>
          <li>fraud, abuse, or misconduct</li>
          <li>anti-circumvention violations</li>
          <li>repeated disputes or high-risk behavior</li>
        </ul>
        <p>Termination does not eliminate obligations for existing conversions or disputes.</p>
      `,
    },
    {
      title: '14) Consent to Communication',
      content: `
        <p class="mb-3">By registering, you consent to receive:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>transactional emails</li>
          <li>system alerts</li>
          <li>policy updates</li>
          <li>promotional updates (you can manage preferences in settings)</li>
        </ul>
      `,
    },
    {
      title: '15) Acknowledgment & Agreement',
      content: `
        <p class="mb-3">By clicking "I Agree" or completing registration, you confirm that:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>you have read and understood this Consent Form</li>
          <li>you agree to be legally bound by it</li>
          <li>violations may result in immediate restrictions or permanent removal from Reflo Hub</li>
        </ul>
      `,
    },
    {
      title: '16) Contact',
      content: `
        <p class="mb-3">Questions about this Consent Form? Contact:</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Business Registration Consent</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Business Registration Consent Form
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
            <p className="text-gray-600 dark:text-gray-300">By proceeding with Business registration on Reflo Hub, you ("Business", "you", "your") confirm that you are authorized to act on behalf of your business entity and agree to be legally bound by this Consent Form.</p>
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
            Contact our support team for any inquiries about our business registration consent form.
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
          <meta name="title" content="Reflo Hub – Business Registration Consent Form" />
          <meta
            name="description"
            content="Review the Business Registration Consent Form for Reflo Hub, outlining terms for businesses joining the platform, including fees, lead management, and anti-circumvention policies."
          />
          <meta
            name="keywords"
            content="Reflo Hub business registration, consent form, SaaS platform terms, freelancer lead management, anti-circumvention policy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessRegistrationConsent;