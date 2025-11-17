
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Shield, Globe, Star, BarChart } from 'lucide-react';
import { useRef } from 'react';
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans">
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

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              🚀 Business <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Reflo Hub</span>: Quality Leads, Made Easy
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Utilize Reflo Hub to grow your business faster. Access high-quality referral leads from freelancers worldwide. Limited to 2-3 businesses per category per city. Sign up now to secure your spot!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
              { title: '6️⃣ Zero Risk', description: 'If zero customers convert in any consecutive 60 day window, we\'ll credit you one month of Virtual Tech Masters\' Basic Ad Plan on 90% off' },
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Business Basic',
                description: 'Perfect for growing businesses',
                price: '$79',
                priceLabel: '/month',
                discount: '90% off (was $799)',
                setup: '$14.99',
                setupDiscount: '90% off launch pricing',
                features: ['15 Leads/Month', '5 Free Monthly Ads', 'Dashboard Analytics'],
                gradient: true,
              },
              {
                title: 'Business Standard',
                description: 'Ideal for high-growth businesses',
                price: '$99',
                priceLabel: '/month',
                discount: '90% off (was $999)',
                setup: '$19.99',
                setupDiscount: '90% off launch pricing',
                features: ['Unlimited Leads', '10 Free Monthly Ads', 'Priority Listing & Support', 'Advanced Analytics'],
                gradient: true,
              },
              {
                title: 'Business Premium',
                description: 'Lock in your territory with exclusive leads',
                price: 'Price on request',
                features: ['Unlimited Leads', 'Exclusivity city-wide', '25 Free Monthly Ads', 'Priority Listing & Support', 'Advanced Analytics'],
                gradient: true,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border ${plan.gradient ? 'border-orange-300/50' : 'border-gray-200 dark:border-white/10'
                  } rounded-xl p-8 flex flex-col relative`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
                  {index === 2 ? (
                    <span className="inline-flex font-bold items-center gap-1 px-4 py-2 rounded-full text-xs bg-gradient-to-br from-orange-300/90 to-sky-500/90 text-white shadow-xl ring-2 ring-white dark:ring-gray-950 animate-bounce-slow">
                      On Request
                    </span>
                  ) : (
                    <span className="inline-flex font-bold items-center gap-1 px-4 py-2 rounded-full text-xs bg-gradient-to-br from-sky-500/90 to-orange-300/90 text-white shadow-xl ring-2 ring-white dark:ring-gray-950 animate-bounce-slow">
                      <svg className="w-4 h-4 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2m-1.636 6.364l-1.414-1.414M12 22v-2m-6.364-1.636l1.414-1.414M2 12h2m1.636-6.364l1.414 1.414" />
                      </svg>
                      90% OFF
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{plan.description}</p>
                  {plan.setup && (
                    <div className="mb-4 p-4 bg-gradient-to-br from-orange-400/20 to-orange-300/10 dark:from-orange-400/30 dark:to-orange-300/20 rounded-lg border-2 border-orange-400/50 shadow-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">One Time Setup</p>
                      <p className="text-4xl font-bold text-orange-400 mb-1">{plan.setup}</p>
                      {plan.setupDiscount && <p className="text-xs text-orange-300 font-semibold">{plan.setupDiscount}</p>}
                    </div>
                  )}
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                    <span className="text-lg">{plan.price}</span>
                    {plan.priceLabel && <span className="text-gray-600 dark:text-gray-300 ml-1">{plan.priceLabel}</span>}
                  </p>
                  {plan.discount && <p className="text-md text-orange-300 mb-2 font-bold">{plan.discount}</p>}
                  <div className="h-px bg-gray-200 dark:bg-white/10 my-4"></div>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-4 h-4 text-orange-300 mr-2" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Optional Ads */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">📢 Boost Visibility with Optional Ads</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Province/State Ad', price: '$5/week', description: '1-week ad in your registered province/state.' },
                { title: 'Additional Province/State', price: '$2/week', description: 'Add more provinces/states for targeted reach.' },
                { title: 'Nationwide Ad', price: '$15/week', description: 'Reach all states/provinces for maximum exposure.' },
              ].map((ad, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-300 dark:border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-2xl font-bold mb-1">{ad.title}</div>
                  <div className="text-xl font-semibold mb-2">{ad.price}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{ad.description}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">Basic Plan: 5 free ads/month | Standard Plan: 10 free ads/month | Premium Plan: 25 free ads/month</p>
          </motion.div>
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


