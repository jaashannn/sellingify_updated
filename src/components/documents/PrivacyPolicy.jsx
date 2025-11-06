import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const policySections = [
    {
      title: 'Information We Collect',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">Personal Data</h4>
        <p class="mb-3">When you register with Reflo Hub, we collect the following personal information:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Full name and display name</li>
          <li>Email address and phone number</li>
          <li>Country and city of residence</li>
          <li>Identification documents (for verification purposes)</li>
          <li>Live photo captured through our platform for KYC verification</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">Account and Payment Information</h4>
        <p class="mb-3">To process your Reflo Hub subscription, we collect billing information:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Credit/debit card information (securely processed by Stripe and other certified payment gateways)</li>
          <li>Billing address and contact information</li>
        </ul>
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
          <p class="text-sm"><strong>Important:</strong> We do not store sensitive credit card information on our systems. All payment data is securely handled and encrypted by certified third-party payment processors.</p>
        </div>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">Lead Data (from Freelancers)</h4>
        <p class="mb-3">When freelancers submit leads, we collect:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Client contact information (name, phone, email, city)</li>
          <li>Service requirements and details</li>
        </ul>
        <p class="mb-4">This information is securely stored to facilitate effective matching between businesses and freelancers.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">Automatically Collected Information</h4>
        <p class="mb-3">We may automatically collect non-personal information including:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>IP address and device information</li>
          <li>Browser type and version</li>
          <li>Page interactions and navigation history</li>
          <li>Usage patterns and platform analytics</li>
        </ul>
        <p class="mt-3">Cookies help us optimize our website functionality and enhance your user experience.</p>
      `,
    },
    {
      title: 'How We Use Your Information',
      content: `
        <p class="mb-4">We use your personal information to deliver and enhance Reflo Hub services. Specifically, we utilize your data to:</p>
        <ul class="list-disc pl-6 space-y-3">
          <li><strong>Account Management:</strong> Create and maintain your user account and profile</li>
          <li><strong>Identity Verification:</strong> Use live photos to confirm your identity and prevent fraud</li>
          <li><strong>Lead Matching:</strong> Connect businesses with qualified freelancers for lead generation</li>
          <li><strong>Payment Processing:</strong> Securely handle subscription fees and transactions</li>
          <li><strong>Platform Improvement:</strong> Analyze usage patterns to enhance platform performance</li>
          <li><strong>Communication:</strong> Send important updates, special offers, and service notifications</li>
          <li><strong>Customer Support:</strong> Provide timely assistance and resolve your inquiries</li>
        </ul>
      `,
    },
    {
      title: 'How We Share Your Information',
      content: `
        <p class="mb-4">We maintain strict confidentiality and limit data sharing. Your personal information is only shared in the following circumstances:</p>
        <ul class="list-disc pl-6 space-y-3">
          <li><strong>Lead Exchange:</strong> When facilitating connections between businesses and freelancers, we share only essential information (name, city, contact details) to enable lead exchange and direct payments</li>
          <li><strong>Service Providers:</strong> We work with trusted third-party providers including:
            <ul class="list-disc pl-4 mt-2 space-y-1">
              <li>Cloud hosting services (AWS, Google Cloud)</li>
              <li>Analytics services (Google Analytics)</li>
              <li>Payment processors (Stripe, PayPal)</li>
              <li>Communication tools (SendGrid, MailChimp)</li>
            </ul>
          </li>
          <li><strong>Legal Compliance:</strong> We may share information when required by law, legal process, or to protect our rights and the safety of our users</li>
        </ul>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
          <p class="text-sm"><strong>Important:</strong> Reflo Hub does not manage or mediate financial transactions between businesses and freelancers. We do not store or process any financial information related to these transactions.</p>
        </div>
      `,
    },
    {
      title: 'Security of Data',
      content: `
        <p class="mb-4">We prioritize the security of your data and implement industry-standard security measures including:</p>
        <ul class="list-disc pl-6 space-y-3">
          <li><strong>Encryption:</strong> SSL/TLS encryption to protect data during transmission</li>
          <li><strong>Secure Storage:</strong> Data stored using AWS and other trusted cloud providers with enterprise-grade security</li>
          <li><strong>Regular Updates:</strong> Frequent software updates and comprehensive security audits</li>
          <li><strong>Access Controls:</strong> Strict access restrictions and role-based permissions for sensitive information</li>
          <li><strong>Monitoring:</strong> Continuous monitoring and threat detection systems</li>
        </ul>
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
          <p class="text-sm"><strong>Security Notice:</strong> While we implement strong security measures, no data transmission method is 100% secure. Please report any security concerns immediately to <a href="mailto:support@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline font-semibold">support@reflohub.com</a></p>
        </div>
      `,
    },
    {
      title: 'International Transfers of Data',
      content: `
        <p class="mb-4">As part of Reflo Hub's global operations, your data may be processed and stored in various countries including the United States, Canada, and other international locations.</p>
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p class="text-sm"><strong>Compliance:</strong> We ensure adherence to relevant international data transfer regulations and implement appropriate safeguards, including GDPR-compliant data processors and standard contractual clauses where required.</p>
        </div>
      `,
    },
    {
      title: 'Your Rights to Data Privacy',
      content: `
        <p class="mb-4">You have complete control over your personal data and the following rights:</p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Right of Access</h5>
            <p class="text-sm">Request copies of all personal information we have about you</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Right of Correction</h5>
            <p class="text-sm">Update or modify your account information through your profile page</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Right to Deletion</h5>
            <p class="text-sm">Request complete deletion of your account and all associated data</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Right to Withdraw Consent</h5>
            <p class="text-sm">Unsubscribe from marketing communications or close your account at any time</p>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p class="text-sm"><strong>Exercise Your Rights:</strong> Contact us at <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline font-semibold">privacy@reflohub.com</a> to exercise any of these rights.</p>
        </div>
      `,
    },
    {
      title: 'Compliance with Global Privacy Regulations',
      content: `
        <p class="mb-4">Reflo Hub complies with the following global data protection frameworks and legislation:</p>
        <div class="space-y-4">
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">GDPR (Europe)</h5>
            <p class="text-sm mb-2">Reflo Hub is incorporated as a private limited company under the Dubai Integrated Economic Zones Implementing Regulations 2023. We do not maintain an establishment within the EU/EEA and, pursuant to Art. 27 GDPR, we have elected not to appoint an EU representative.</p>
            <p class="text-sm"><strong>GDPR Inquiries:</strong> All GDPR-related inquiries should be directed to:</p>
            <div class="bg-white dark:bg-gray-900 rounded p-3 mt-2 text-sm">
              <p><strong>Reflo Hub FZ LLC</strong><br />
              IFZA Business Park, (DDP)<br />
              PO Box 342001, Dubai, United Arab Emirates</p>
            </div>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">CCPA (California, USA)</h5>
            <p class="text-sm">California residents may request access, deletion, and opt-out of data sales. <strong>Note:</strong> We do not sell your personal data to third parties.</p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">PIPEDA (Canada)</h5>
            <p class="text-sm">We closely follow Canadian privacy laws and standards that regulate the collection, use, and disclosure of personal information.</p>
          </div>
        </div>
      `,
    },
    {
      title: 'Cookies and Analytics',
      content: `
        <p class="mb-4">We use cookies and analytics to enhance your experience and improve our platform:</p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Personalization</h5>
            <p class="text-sm">Customize your Reflo Hub experience and remember your preferences</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Analytics</h5>
            <p class="text-sm">Analyze platform trends and performance to improve our services</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Security</h5>
            <p class="text-sm">Enhance user verification and maintain platform security</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-semibold text-orange-400 mb-2">Marketing</h5>
            <p class="text-sm">Manage advertising and promotional campaigns effectively</p>
          </div>
        </div>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p class="text-sm"><strong>Cookie Notice:</strong> Disabling cookies in your browser settings may limit your Reflo Hub experience and certain features may not function properly.</p>
        </div>
      `,
    },
    {
      title: 'Third-Party Links',
      content: `
        <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
          <p class="text-sm"><strong>Third-Party Links:</strong> Reflo Hub may contain links to external websites (payment gateways, listed businesses, etc.). We are not responsible for the content or privacy practices of these third-party websites. Please review their privacy policies before providing any personal information.</p>
        </div>
      `,
    },
    {
      title: "Children's Privacy",
      content: `
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p class="text-sm"><strong>Age Restriction:</strong> Reflo Hub services are not intended for individuals under the age of 18. We do not knowingly collect or use personal information from children. If we discover that we have collected personal information from a minor, we will promptly delete such information from our systems.</p>
        </div>
      `,
    },
    {
      title: 'Updates to the Privacy Policy',
      content: `
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p class="text-sm"><strong>Policy Updates:</strong> This privacy policy is regularly updated to reflect changes in our practices or applicable legal requirements. We will notify you of significant changes via email or by prominently displaying the updated policy on our website. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
        </div>
      `,
    },
    {
      title: 'Contact Us',
      content: `
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-orange-400 mb-2">Questions or Concerns?</h3>
          <p class="text-gray-600 dark:text-gray-300">We're here to help with any privacy-related inquiries.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <h4 class="font-semibold text-lg mb-4 text-orange-400">Reflo Hub Privacy Team</h4>
            <div class="space-y-3">
              <div>
                <p class="font-semibold text-sm text-gray-700 dark:text-gray-300">Email</p>
                <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline font-semibold">privacy@reflohub.com</a>
              </div>
              <div>
                <p class="font-semibold text-sm text-gray-700 dark:text-gray-300">Phone</p>
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

        {/* Policy Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-01</p>
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