import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Cookies = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const cookieSections = [
    {
      title: '1. What Are Cookies and Similar Technologies?',
      content: `
        <p>Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They allow the site to recognize your browser, remember your preferences, and enable key functions.</p>
        <p class="mt-4">We also use related technologies, including:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Local Storage:</strong> Browser-based storage that keeps user settings, preferences, and session data for smoother performance.</li>
          <li><strong>Pixels & SDKs:</strong> Tiny code snippets that track interactions (e.g., email opens, link clicks, or marketing campaign performance).</li>
          <li><strong>Device Fingerprinting (limited use):</strong> Used only for fraud detection and bot prevention in high-risk scenarios.</li>
        </ul>
        <p class="mt-4">Cookies can be:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Session cookies</strong> – deleted when you close your browser, or</li>
          <li><strong>Persistent cookies</strong> – remain until they expire or you manually delete them.</li>
        </ul>
      `,
    },
    {
      title: '2. Why We Use Cookies',
      content: `
        <p class="mb-4">We use cookies for the following purposes:</p>
        <h5 class="font-semibold mt-4 mb-2">2.1 Strictly Necessary Cookies (Required)</h5>
        <p>These cookies are essential for the platform to function properly. Without them, you may not be able to log in, submit leads, or use secure features.</p>
        <p class="mt-2"><strong>Examples:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>reflo_session</li>
          <li>csrf_token</li>
          <li>stripe_sid</li>
          <li>authentication tokens</li>
          <li>security and anti-bot cookies</li>
        </ul>
        <p class="mt-2">These cookies cannot be disabled because they are required for core platform security and functionality.</p>
        <h5 class="font-semibold mt-6 mb-2">2.2 Preferences & Functionality Cookies</h5>
        <p>These cookies remember your choices and improve your experience.</p>
        <p class="mt-2">They may store:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Language preference</li>
          <li>Dark/light mode setting</li>
          <li>Cookie consent choice</li>
          <li>Saved dashboard layout</li>
        </ul>
        <p class="mt-2"><strong>Examples:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>locale</li>
          <li>theme_pref</li>
          <li>cookie_consent</li>
        </ul>
        <h5 class="font-semibold mt-6 mb-2">2.3 Analytics & Performance Cookies</h5>
        <p>These cookies help us understand how users interact with Reflo Hub so we can improve performance, detect issues, and optimize features.</p>
        <p class="mt-2">We collect pseudonymized data, meaning it is not directly linked to your real identity.</p>
        <p class="mt-2"><strong>Examples:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>_ga, _gid (Google Analytics)</li>
          <li>mixpanel_id (product analytics)</li>
        </ul>
        <p class="mt-2">You may opt out of analytics cookies through our Cookie Settings panel.</p>
        <h5 class="font-semibold mt-6 mb-2">2.4 Advertising & Marketing Cookies (Opt-In Only)</h5>
        <p>These cookies are used to:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>track campaign performance</li>
          <li>measure marketing effectiveness</li>
          <li>understand referral sources</li>
        </ul>
        <p class="mt-2">We do NOT use third-party behavioral retargeting across unrelated websites.</p>
        <p class="mt-2">Marketing cookies are disabled by default and only activated with your consent.</p>
        <p class="mt-2"><strong>Examples:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>utm_source</li>
          <li>fbp (Facebook Pixel — disabled until consent)</li>
        </ul>
        <h5 class="font-semibold mt-6 mb-2">2.5 Fraud Prevention & Security Cookies</h5>
        <p>These cookies help detect suspicious activity, bots, and fraud attempts.</p>
        <p class="mt-2">They are critical for protecting:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>user accounts</li>
          <li>lead integrity</li>
          <li>security wallet usage</li>
          <li>payment safety</li>
        </ul>
        <p class="mt-2"><strong>Examples:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>h_captcha_session</li>
          <li>hashed IP identifiers</li>
          <li>anomaly detection tokens</li>
        </ul>
      `,
    },
    {
      title: '3. Third-Party Cookies & Services',
      content: `
        <p class="mb-4">Reflo Hub integrates with trusted third-party providers. When their tools are loaded, they may set cookies subject to their own policies.</p>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr class="bg-gray-100 dark:bg-gray-800">
                <th class="border border-gray-300 dark:border-gray-600 p-2">Provider</th>
                <th class="border border-gray-300 dark:border-gray-600 p-2">Purpose</th>
                <th class="border border-gray-300 dark:border-gray-600 p-2">Opt-Out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Stripe</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Secure payment processing</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Essential (cannot be disabled)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Google Analytics</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Site analytics and performance</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2"><a href="https://tools.google.com/dlpage/gaoptout" class="text-orange-400 dark:text-orange-300 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></td>
              </tr>
              <tr>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Mixpanel</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Product analytics & user behavior</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2"><a href="https://mixpanel.com/optout/" class="text-orange-400 dark:text-orange-300 hover:underline" target="_blank" rel="noopener noreferrer">Mixpanel Opt-out</a></td>
              </tr>
              <tr>
                <td class="border border-gray-300 dark:border-gray-600 p-2">SendGrid/Mailchimp</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Transactional and marketing emails</td>
                <td class="border border-gray-300 dark:border-gray-600 p-2">Manage via your email preferences</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4">We require all third-party providers to comply with GDPR, CCPA, PIPEDA, and standard contractual clauses where applicable.</p>
      `,
    },
    {
      title: '4. Cookie Consent & User Control',
      content: `
        <ul class="list-decimal pl-5 space-y-2">
          <li><strong>Banner & Preference Centre:</strong> On first visit from the EEA, UK, or any jurisdiction requiring consent, you will see a banner that allows you to:
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Accept all cookies</li>
              <li>Reject all optional cookies</li>
              <li>Customize your preferences (Analytics, Marketing, etc.)</li>
            </ul>
          </li>
          <li><strong>Continued Browsing:</strong> In regions where implied consent is permitted (e.g., Canada), continued use signifies agreement to our cookie practices, subject to browser controls.</li>
          <li><strong>Change Settings:</strong> Access the preference centre anytime via “Cookie Settings” in the website footer. Your choices are stored in the cookie_consent cookie for 12 months.</li>
          <li><strong>Browser Controls:</strong> Most browsers let you delete or block cookies. Disabling strictly necessary cookies may break site functionality.</li>
        </ul>
      `,
    },
    {
      title: '5. Cookie Retention Periods',
      content: `
        <table class="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800">
              <th class="border border-gray-300 dark:border-gray-600 p-2">Cookie Type</th>
              <th class="border border-gray-300 dark:border-gray-600 p-2">Default Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Strictly Necessary</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Session or up to 7 days</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Preferences</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">6 months to 1 year</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Analytics</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">13 months (per GDPR max)</td>
            </tr>
            <tr>
              <td class="border border-gray-300 dark:border-gray-600 p-2">Marketing</td>
              <td class="border border-gray-300 dark:border-gray-600 p-2">90 days</td>
            </tr>
          </tbody>
        </table>
        <p class="mt-4">Persistent cookies automatically expire after these periods unless deleted earlier.</p>
      `,
    },
    {
      title: '6. Do Not Track (DNT) Signals',
      content: `
        <p>If your browser sends a "Do Not Track" (DNT) signal, Reflo Hub will disable analytics and marketing cookies by default, unless you manually enable them in the Cookie Settings panel.</p>
      `,
    },
    {
      title: "7. Children's Privacy",
      content: `
        <p>Reflo Hub is not intended for users under 18 years old.</p>
        <p class="mt-2">We do not knowingly place cookies on devices used by minors. If you believe this has occurred, please contact us immediately at <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>.</p>
      `,
    },
    {
      title: '8. Updates to This Cookie Policy',
      content: `
        <p>We may update this policy from time to time to reflect:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>new technology</li>
          <li>regulatory changes</li>
          <li>product updates</li>
        </ul>
        <p class="mt-2">Material changes will be communicated via the cookie banner or in-app notification.</p>
        <p class="mt-2">Please check the "Last Updated" date above for the latest version.</p>
      `,
    },
    {
      title: '9. Contact Us',
      content: `
        <p>For questions about our cookie practices or this policy, please reach out to:</p>
        <p><strong>Privacy Team – Cookies</strong></p>
        <p>Reflo Hub FZ LLC</p>
        <p>IFZA Business Park, DDP</p>
        <p>PO Box 342001, Dubai, United Arab Emirates</p>
        <p><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
        <p><strong>Tel:</strong> 1-855-220-0505</p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Cookie Policy</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Cookie Policy & User Guidelines
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflo Hub uses cookies to enhance your experience on our SaaS platform. Learn how we use them and manage your preferences below.
          </p>
        </motion.div>

        {/* Cookie Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: January 21, 2026</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">This Cookie Policy explains how Reflo Hub FZ LLC ("Reflo Hub," "we," "us," or "our") uses cookies, pixels, local storage, and similar technologies when you visit or use our website and platform ("Services").</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">By using Reflo Hub, you agree to our use of cookies as described in this policy, subject to your consent preferences and applicable law.</p>
          {cookieSections.map((section, index) => (
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
            Contact our Privacy Team for any inquiries about our cookie practices or this policy.
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
          <meta name="title" content="Reflo Hub – Cookie Policy & User Guidelines" />
          <meta
            name="description"
            content="Learn about Reflo Hub’s Cookie Policy, including how we use cookies, third-party integrations, and your consent options for our SaaS platform."
          />
          <meta
            name="keywords"
            content="Reflo Hub cookie policy, website cookies, privacy policy, GDPR compliance, CCPA compliance, PIPEDA, cookie consent, third-party cookies"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Cookies;