import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const policySections = [
    {
      title: '1. INFORMATION WE COLLECT',
      content: `
        <p class="mb-4">We collect information that you voluntarily provide, information generated through your use of the platform, and information collected automatically through technical means.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">1.1 Personal Data (All Users)</h4>
        <p class="mb-3">When you register or use Reflo Hub, we may collect:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Full legal name and display name</li>
          <li>Email address and phone number</li>
          <li>Country, city, and time zone</li>
          <li>Government-issued identification documents (for verification)</li>
          <li>Live photo or selfie captured via our KYC tool</li>
          <li>Business name, registration details, and supporting documents (for Businesses)</li>
          <li>Professional details (for Freelancers), including referral activity</li>
        </ul>
        <p class="mb-4">This information is used for identity verification, fraud prevention, compliance, and account management.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">1.2 Account and Payment Information</h4>
        <p class="mb-3">To process your subscription or wallet top-ups, we collect:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Billing name and address</li>
          <li>Payment transaction records</li>
          <li>Invoice history</li>
        </ul>
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
          <p class="text-sm"><strong>Important:</strong> We do not store full credit card details. All payment data is securely processed and encrypted by certified third-party providers such as Stripe, PayPal, or other authorized gateways.</p>
        </div>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">1.3 Lead Data (Submitted by Freelancers)</h4>
        <p class="mb-3">When Freelancers submit leads, we collect and store:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Client name, phone, email, and city</li>
          <li>Service requirements and details</li>
          <li>Timeline and budget indicators (if provided)</li>
          <li>Lead notes and attachments</li>
        </ul>
        <p class="mb-4">This data is used strictly to facilitate matching between Freelancers and Businesses, risk analysis, and dispute resolution when required.</p>
        <p class="mb-4">Lead data is encrypted at rest and in transit and access is restricted based on role and risk state (e.g., blurred or restricted access when necessary).</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">1.4 Security Wallet & Risk Data (Businesses)</h4>
        <p class="mb-3">For Businesses, we may collect and process additional data related to:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Security Wallet balance and transaction history</li>
          <li>Risk score and risk tier</li>
          <li>Lead acceptance patterns</li>
          <li>Conversion performance</li>
          <li>Dispute history</li>
          <li>Payment proof submissions</li>
          <li>Fraud flags or platform violations</li>
        </ul>
        <p class="mb-4">This data is used to dynamically adjust wallet requirements, control lead visibility, and protect freelancer payments.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">1.5 Ratings, Flags, and Behavioral Data</h4>
        <p class="mb-3">We collect:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Business ratings of Freelancer lead quality</li>
          <li>Freelancer ratings of Business payment behavior</li>
          <li>Red flags raised by either party</li>
          <li>Dispute records, evidence files, and timestamps</li>
        </ul>
        <p class="mb-4">These are used to calculate risk scores, enforce safety rules, and improve platform trust.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">1.6 Automatically Collected Information</h4>
        <p class="mb-3">We may automatically collect technical and usage data including:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>IP address</li>
          <li>Device type and operating system</li>
          <li>Browser type and version</li>
          <li>Log-in times and session duration</li>
          <li>Pages visited and actions taken</li>
          <li>Platform analytics and performance metrics</li>
        </ul>
        <p class="mt-3">This helps us improve security, detect abuse, and optimize user experience.</p>
      `,
    },
    {
      title: '2. HOW WE USE YOUR INFORMATION',
      content: `
        <p class="mb-4">We use your data for the following purposes:</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.1 Account Management</h4>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Create, verify, and maintain your account</li>
          <li>Enable login, authentication, and access control</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.2 Identity & Fraud Prevention</h4>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Verify identity via live photo and documents</li>
          <li>Detect fake accounts, fraud, or platform abuse</li>
          <li>Monitor suspicious activity and enforce bans</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.3 Lead Matching & Marketplace Operations</h4>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Connect Freelancers and Businesses</li>
          <li>Facilitate lead sharing, acceptance, and communication</li>
          <li>Apply blurred or restricted lead access when necessary</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.4 Security Wallet & Risk Controls</h4>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Calculate dynamic wallet requirements</li>
          <li>Restrict or unlock leads based on risk status</li>
          <li>Use wallet funds in disputes where applicable</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.5 Payments & Billing</h4>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Process setup fees, subscriptions, and wallet top-ups</li>
          <li>Maintain billing records and invoices</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.6 Dispute Resolution</h4>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Review evidence in disputes</li>
          <li>Investigate fraud or misconduct</li>
          <li>Apply penalties, payouts, or bans</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.7 Platform Improvement</h4>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Analyze usage trends</li>
          <li>Improve AI risk models</li>
          <li>Enhance safety systems and lead quality checks</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">2.8 Communication</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Send transactional emails (receipts, alerts, disputes)</li>
          <li>Notify users of policy changes</li>
          <li>Send marketing updates (opt-out available)</li>
        </ul>
      `,
    },
    {
      title: '3. HOW WE SHARE YOUR INFORMATION',
      content: `
        <p class="mb-4">We do not sell your personal data. We share information only when necessary for platform operations, legal compliance, or safety enforcement.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">3.1 Lead Exchange Between Users</h4>
        <p class="mb-3">When a Business accepts a lead (subject to visibility rules), we may share:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Client name and contact details</li>
          <li>Service requirements</li>
          <li>Relevant lead notes</li>
        </ul>
        <p class="mb-4">If access is restricted, this data may remain blurred until conditions are met.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">3.2 Third-Party Service Providers</h4>
        <p class="mb-3">We work with trusted providers such as:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Cloud hosting services (AWS, Google Cloud, or equivalents)</li>
          <li>Payment processors (Stripe, PayPal)</li>
          <li>Email and communication tools (SendGrid, Mailchimp)</li>
          <li>Analytics providers (Google Analytics or alternatives)</li>
        </ul>
        <p class="mb-4">These providers are contractually obligated to protect your data and use it only for specified purposes.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">3.3 Legal and Compliance Sharing</h4>
        <p class="mb-3">We may disclose data if required by law, court order, or regulatory authority, or to:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Prevent fraud or illegal activity</li>
          <li>Protect Reflo Hub's rights</li>
          <li>Protect users from harm</li>
          <li>Defend against legal claims</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">3.4 Dispute & Enforcement Sharing</h4>
        <p class="mb-3">In disputes, we may share relevant evidence with:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>The other party in the dispute</li>
          <li>Internal Reflo Hub dispute team</li>
          <li>Legal counsel or investigators if necessary</li>
        </ul>
      `,
    },
    {
      title: '4. DATA SECURITY',
      content: `
        <p class="mb-4">We implement industry-standard security measures including:</p>
        <ul class="list-disc pl-6 space-y-3">
          <li>SSL/TLS encryption for data transmission</li>
          <li>Encrypted storage on secure cloud infrastructure</li>
          <li>Role-based access controls</li>
          <li>Regular security audits</li>
          <li>Continuous monitoring for threats</li>
        </ul>
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
          <p class="text-sm"><strong>Security Notice:</strong> While we take strong precautions, no system is 100% secure. If you suspect a breach, contact us immediately at <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline font-semibold">privacy@reflohub.com</a>.</p>
        </div>
      `,
    },
    {
      title: '5. INTERNATIONAL DATA TRANSFERS',
      content: `
        <p class="mb-4">As a global platform, your data may be processed in:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>United Arab Emirates</li>
          <li>United States</li>
          <li>Canada</li>
          <li>Other jurisdictions where our service providers operate</li>
        </ul>
        <p class="mb-4">We apply appropriate safeguards, including contractual protections and data transfer mechanisms where required.</p>
      `,
    },
    {
      title: '6. YOUR DATA RIGHTS',
      content: `
        <p class="mb-4">You have the following rights (subject to applicable law):</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.1 Right of Access</h4>
        <p class="mb-4">Request a copy of your personal data.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.2 Right of Correction</h4>
        <p class="mb-4">Update inaccurate or incomplete information via your dashboard or by contacting us.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.3 Right of Deletion</h4>
        <p class="mb-4">Request account deletion and removal of personal data (subject to legal retention requirements).</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.4 Right to Withdraw Consent</h4>
        <p class="mb-4">Opt out of marketing communications or request account closure.</p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p class="text-sm"><strong>To exercise your rights, email:</strong> <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline font-semibold">privacy@reflohub.com</a></p>
        </div>
      `,
    },
    {
      title: '7. GLOBAL PRIVACY COMPLIANCE',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.1 GDPR (European Union)</h4>
        <p class="mb-3">Reflo Hub is incorporated under Dubai Integrated Economic Zones Implementing Regulations 2023 and does not maintain an establishment in the EU/EEA. We have elected not to appoint an EU representative under Article 27 GDPR.</p>
        <p class="mb-3"><strong>GDPR inquiries should be directed to:</strong></p>
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-4">
          <p class="text-sm">Reflo Hub FZ LLC<br />
          IFZA Business Park (DDP)<br />
          PO Box 342001, Dubai, UAE</p>
        </div>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.2 CCPA (California, USA)</h4>
        <p class="mb-4">California residents may request access or deletion of their data.</p>
        <p class="mb-4">We do not sell personal data to third parties.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.3 PIPEDA (Canada)</h4>
        <p class="mb-4">We comply with Canadian privacy standards governing collection, use, and disclosure of personal information.</p>
      `,
    },
    {
      title: '8. COOKIES & ANALYTICS',
      content: `
        <p class="mb-4">We use cookies for:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Personalization (remember preferences)</li>
          <li>Security (prevent fraud and abuse)</li>
          <li>Analytics (improve platform performance)</li>
          <li>Marketing (measure campaign effectiveness)</li>
        </ul>
        <p class="mb-4">You may disable cookies in your browser, but some features may not function properly.</p>
      `,
    },
    {
      title: '9. THIRD-PARTY LINKS',
      content: `
        <p class="mb-4">Reflo Hub may contain links to third-party websites (payment gateways, partner sites, or listed businesses). We are not responsible for their privacy practices. Please review their policies before sharing personal information.</p>
      `,
    },
    {
      title: "10. CHILDREN'S PRIVACY",
      content: `
        <p class="mb-4">Reflo Hub is not intended for individuals under 18.</p>
        <p class="mb-4">We do not knowingly collect data from minors. If we discover such data, we will delete it promptly.</p>
      `,
    },
    {
      title: '11. CHANGES TO THIS POLICY',
      content: `
        <p class="mb-4">We may update this Privacy Policy from time to time. Material changes will be communicated via email or in-app notice at least 14 days in advance.</p>
        <p class="mb-4">Continued use after updates constitutes acceptance.</p>
      `,
    },
    {
      title: '12. CONTACT US',
      content: `
        <p class="mb-4">For privacy questions or concerns, contact:</p>
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mb-4">
          <h4 class="font-semibold text-lg mb-4 text-orange-400">Reflo Hub Privacy Team</h4>
          <div class="space-y-3">
            <div>
              <p class="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">Email</p>
              <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline font-semibold">privacy@reflohub.com</a>
            </div>
            <div>
              <p class="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">Phone</p>
              <p class="text-gray-600 dark:text-gray-300">1-855-220-0505</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
          <h4 class="font-semibold text-lg mb-4 text-orange-400">Mailing Address</h4>
          <div class="text-sm text-gray-600 dark:text-gray-300">
            <p><strong>Reflo Hub FZ LLC</strong></p>
            <p>IFZA Business Park, DDP</p>
            <p>PO Box 342001</p>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Privacy Policy</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflo Hub is committed to protecting your privacy. Learn how we collect, use, and safeguard your personal data.
          </p>
        </motion.div>

        {/* Company Details */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Effective Date:</strong> [Insert Date]</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Company:</strong> Reflo Hub FZ LLC</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Address:</strong> IFZA Business Park (DDP), PO Box 342001, Dubai, United Arab Emirates</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Phone:</strong> 1-855-220-0505</p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">Reflo Hub ("we," "us," or "our") operates a SaaS-based referral and lead-sharing platform connecting Businesses and Freelancers ("Users"). This Privacy Policy explains how we collect, use, store, and protect your personal data when you use the Reflo Hub platform, website, or related services ("Services").</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">By using Reflo Hub, you consent to the practices described in this Privacy Policy.</p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          {policySections.map((section, index) => (
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
            Contact our privacy team for any inquiries about our data protection practices.
          </p>
          <motion.a
            href="mailto:privacy@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Privacy Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Privacy Policy" />
          <meta
            name="description"
            content="Review the Privacy Policy for Reflo Hub, outlining how we collect, use, and safeguard your personal data in compliance with GDPR, CCPA, PIPEDA, and other applicable laws."
          />
          <meta
            name="keywords"
            content="Reflo Hub privacy policy, GDPR compliance, CCPA compliance, PIPEDA compliance, data protection, SaaS platform privacy, personal data security"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;