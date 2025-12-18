import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Check, Shield, Globe, Star, BarChart, Coins, UserCheck, MessageSquare, CreditCard, TrendingUp,CheckCircle, Quote } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Freelancer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pricing, setPricing] = useState(null);

  const categories = [
    'Real Estate',
    'Mortgage Brokers',
    'Immigration Consultants',
    'Legal Services',
    'Website Development & Digital Marketing',
    'Tours & Travel',
    'Auto Sales and Parts',
    'Home Services & HVAC',
    'Tuition and Coaching Centres',
    'Skincare & Beauty Clinics',
    'Event Venues & Party Halls',
    'Fencing and Landscaping',
    'Concrete & Driveways',
    'Insurance Providers',
    'And Many More',
  ];

  const freelancerTestimonials = [
    {
      name: 'Amandeep Kaur',
      role: 'Freelancer',
      location: 'Toronto, Canada',
      content: 'Reflo Hub gave me a real shot at earning from home. I just referred two construction businesses from my uncle\'s network and made more in one week than I did in a whole month at my old job. I now earn consistently and feel empowered!',
      rating: 5,
      avatar: 'AK',
    },
    {
      name: 'Tyrell Jackson',
      role: 'Freelancer',
      location: 'Atlanta, USA',
      content: 'I never thought sharing contacts from my barbershop circle would turn into income. Reflo Hub made it real. I\'ve already earned $1,400 just from a few verified referrals. It\'s legit, fast, and all mine—100% commission kept!',
      rating: 5,
      avatar: 'TJ',
    },
    {
      name: 'Manpreet Singh',
      role: 'Freelancer',
      location: 'Ludhiana, India',
      content: 'I don\'t speak English fluently, but Reflo Hub made it easy. I referred two local clients to Fly Fares and one to a travel agency in Canada. I get paid every month now. This platform is a blessing for people like me.',
      rating: 5,
      avatar: 'MS',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Freelancer',
      location: 'Calgary, Canada',
      content: 'I\'m a stay-at-home mom, and Reflo Hub helped me turn my network into income. Within two months, I earned $2,100 just by connecting realtors with my contacts. No technical skills needed!',
      rating: 5,
      avatar: 'SM',
    },
    {
      name: 'Rizwan Ahmed',
      role: 'Freelancer',
      location: 'New Jersey, USA',
      content: 'Reflo Hub changed the game for me. I introduced two leads to VTM and one to a dentist listed on the platform. Every lead got accepted, and I got paid instantly. Zero fees taken from my earnings!',
      rating: 5,
      avatar: 'RA',
    },
    {
      name: 'Harpreet Bains',
      role: 'Freelancer',
      location: 'Surrey, Canada',
      content: 'I\'m earning extra income every month by just referring truckers and immigration clients I already knew. I never imagined my connections would turn into real, steady income through Reflo Hub.',
      rating: 5,
      avatar: 'HB',
    },
    {
      name: 'Kiran Patel',
      role: 'Freelancer',
      location: 'Ahmedabad, India',
      content: 'I refer leads to Fly Fares and Overseas Travels regularly. It\'s now a side hustle that gives me monthly earnings without investment. I love that freelancers keep 100% of the earnings!',
      rating: 5,
      avatar: 'KP',
    },
    {
      name: 'Jason Roberts',
      role: 'Freelancer',
      location: 'Detroit, USA',
      content: 'Reflo Hub is like Uber for referrals. I just share business leads from my community, and I get paid once they convert. I\'ve never seen a platform this honest and direct about payouts!',
      rating: 5,
      avatar: 'JR',
    },
    {
      name: 'Mohammed Iqbal',
      role: 'Freelancer',
      location: 'Hyderabad, India',
      content: 'I\'ve built a small team of referrers under me, and now we regularly share leads to travel and marketing businesses on Reflo Hub. We\'ve built a steady monthly income without even leaving home.',
      rating: 5,
      avatar: 'MI',
    },
    {
      name: 'Brittany White',
      role: 'Freelancer',
      location: 'Chicago, USA',
      content: 'I used to hustle on multiple side gigs, but now I focus on Reflo Hub. It\'s the only platform where I keep 100% commission, and the leads I give actually help real businesses grow.',
      rating: 5,
      avatar: 'BW',
    },
    {
      name: 'Jasmeet Gill',
      role: 'Freelancer',
      location: 'Edmonton, Canada',
      content: 'I\'ve been referring digital marketing clients to VTM and now earn a monthly commission from three recurring clients. It\'s like building my own passive income stream.',
      rating: 5,
      avatar: 'JG',
    },
    {
      name: 'Shawn Greene',
      role: 'Freelancer',
      location: 'Miami, USA',
      content: 'Tech Diamond pays well through Reflo. I referred two app development clients and one e-commerce business. I now earn monthly from both — no cut, no hassle.',
      rating: 5,
      avatar: 'SG',
    },
    {
      name: 'Ritika Sharma',
      role: 'Freelancer',
      location: 'Delhi, India',
      content: 'Fly Fares has been a consistent source of monthly income. Every client I referred who booked through them gave me repeat commissions. I now refer travel leads every week!',
      rating: 5,
      avatar: 'RS',
    },
    {
      name: 'Navdeep Sekhon',
      role: 'Freelancer',
      location: 'Brampton, Canada',
      content: 'I didn\'t know how powerful referrals could be until I started sharing leads to VTM and Fly Fares. Their conversion rates are high, and I get paid each month without chasing anyone.',
      rating: 5,
      avatar: 'NS',
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % freelancerTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [freelancerTestimonials.length]);

  useEffect(() => {
    let mounted = true;
    const isLocal = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:');
    (async () => {
      const candidates = ['/data/pricing.json'];
      if (isLocal) {
        const params = new URLSearchParams(window.location.search);
        const forced = (params.get('pricing') || '').toLowerCase(); // accepts ?pricing=IN or ?pricing=US
        if (forced === 'in') {
          candidates.push('/data/pricing-in.json');
        } else if (forced === 'us' || forced === 'global') {
          candidates.push('/data/pricing-global.json');
        } else {
          // default try INR then GLOBAL for local dev
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
              🚀 <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Earn Passive Income</span> with Reflo Hub
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Simply refer leads from your network to earn money! No selling, no cold calling, no closing deals. Choose from 100+ high commision  categories like real estate, education, finance, healthcare, and more.
              <br />
            No middlemen. No cuts. Freelancers keep 100% of what they earn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {[
                { icon: Check, text: 'No Selling Required' },
                { icon: Globe, text: 'Global Opportunities' },
                { icon: TrendingUp, text: 'Recurring Commissions' },
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
            🌟 Why Freelancers Choose <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Reflo Hub</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: '✅ Simple, Stress-Free Income',
                description: 'No cold calling, no selling, no closing. Choose from 100+ high commision income categories—businesses take care of the rest; you just supply the leads.',
              },
              {
                title: '🌎 Local Simplicity, Global Opportunity',
                description: 'Refer leads from your city or somewhere else in the world to earn money. There are no geographical restrictions on your profits.',
              },
              {
                title: '💸 Recurring Monthly Commissions',
                description: 'Through exclusive alliances with our esteemed partners, Fly Fares, VTM (Virtual Tech Masters), and Tech Diamonds, you can earn monthly recurring commissions.',
              },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} index={index} />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💡 How <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">It Works</span> in 4 Simple Steps
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: UserCheck, title: '1. Sign Up & Verify', description: 'Fast registration with live photo verification for secure profiles.' },
              { icon: Coins, title: '2. Submit Leads', description: 'Select from 100+ business sectors and submit confirmed leads using your monthly credits.' },
              { icon: MessageSquare, title: '3. Track & Communicate', description: 'Monitor lead status and discuss commissions directly with businesses.' },
              { icon: CreditCard, title: '4. Get Paid Directly', description: 'Receive payments via PayPal, Wise, or bank transfer for successful conversions.' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} icon={item.icon} index={index} className="text-center" />
            ))}
          </div>
        </section>

        {/* Special Earning Opportunities */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💼 Special <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Earning Opportunities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: '🚀 Virtual Tech Masters (VTM)',
                description: 'Web development and digital marketing services',
                url: 'https://www.virtualtechmasters.com/',
                items: [
                  '10% recurring monthly commission for ongoing service packages',
                  'Ideal for freelancers with startup, small business, or entrepreneur connections',
                ],
              },
              {
                icon: Globe,
                title: 'Tech Diamonds',
                description: 'Web development and digital marketing services in India',
                url: 'https://www.techdiamonds.net/',
                items: [
                  '10% recurring monthly commission for ongoing service packages',
                  'Ideal for freelancers with startup, small business, or entrepreneur connections in India',
                ],
              },
              {
                icon: Globe,
                title: '🌍 Fly Fares',
                description: 'Comprehensive travel services',
                url: 'https://flyfares.net/',
                items: [
                  'Ongoing commissions for every travel service booked',
                  'Perfect for freelancers with corporate clients, families, or frequent travelers in their network',
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-300/50 rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-lg mr-4">
                    <item.icon className="w-6 h-6 text-orange-300" aria-hidden="true" />
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <ul className="space-y-3">
                  {item.items.map((text, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 text-orange-300 mt-1 mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📋 Freelancer <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Dashboard Features</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Coins, title: 'Credit Balance', description: 'View available credits for submitting leads' },
              { icon: MessageSquare, title: 'Lead Submission', description: 'Easy-to-use form for entering client details' },
              { icon: BarChart, title: 'Lead Tracker', description: 'Real-time updates on your submitted leads' },
              { icon: TrendingUp, title: 'Earnings Overview', description: 'Track earnings history and pending payments' },
              { icon: UserCheck, title: 'Chat Interface', description: 'Communicate directly with businesses' },
              { icon: Star, title: 'Leaderboard & Ratings', description: 'Showcase reliability to attract more business' },
            ].map((item, index) => (
              <Card key={index} title={item.title} description={item.description} icon={item.icon} index={index} />
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            📦 <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Pricing</span> and Subscription
          </motion.h2>

          {/* pricing teaser: use pricing JSON when available, else fallback to static cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {pricing ? (
              <>
                {/* Freelancer page launch banner (from pricing JSON) - moved above subscription card */}
                {pricing?.meta?.launchOffer?.freelancer && (
                  <motion.div
                    className="mx-auto max-w-3xl mb-6 rounded-2xl border border-orange-300/25 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/5 dark:to-orange-900/10 p-6 shadow-md"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0"><Sparkles className="w-8 h-8 text-orange-400" /></div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-extrabold text-orange-600 mb-1">{pricing.meta.launchOffer.freelancer.title}</h3>
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-1">{pricing.meta.launchOffer.freelancer.subtitle}</p>
                        {pricing.meta.launchOffer.freelancer.note && <p className="text-sm text-gray-500 dark:text-gray-400">{pricing.meta.launchOffer.freelancer.note}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Freelancer summary card (subscription) */}
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-orange-300/50 rounded-xl p-8 text-center relative">
                  <h3 className="text-2xl font-bold mb-2">🌟 {pricing.freelancerPlans?.[0]?.name || 'Freelancer Subscription'}</h3>
                  <div className="flex flex-col items-center mb-4">
                    <div className="text-3xl font-extrabold text-orange-500">{typeof pricing.freelancerPlans?.[0]?.setupFee === 'number' ? (pricing.currency === 'INR' ? `₹${pricing.freelancerPlans[0].setupFee}` : `$${pricing.freelancerPlans[0].setupFee.toFixed(2)}`) : (pricing.freelancerPlans?.[0]?.setupFee || '-')}</div>
                    <div className="text-sm mt-2 text-green-700 dark:text-green-300 font-semibold">{pricing.freelancerPlans?.[0]?.freeMonths || '—'}</div>
                  </div>
                  <div className="text-base mb-4">
                    <span className="text-gray-700 dark:text-gray-200 font-semibold">Subscription (after free months): </span>
                    <span className="text-orange-500 font-bold">{pricing.freelancerPlans?.[0]?.monthlyPrice ? (pricing.currency === 'INR' ? `₹${pricing.freelancerPlans[0].monthlyPrice}` : `$${pricing.freelancerPlans[0].monthlyPrice.toFixed(2)}`) : '—'}</span>
                    <span className="text-orange-500 font-bold ml-2">/month</span>
                    <span className="text-gray-400 ml-2 line-through">{pricing.freelancerPlans?.[0]?.originalPrice ? (pricing.currency === 'INR' ? `₹${pricing.freelancerPlans[0].originalPrice}` : `$${pricing.freelancerPlans[0].originalPrice.toFixed(2)}`) : ''}</span>
                  </div>
                  <p className="text-sm text-sky-600 font-medium">{pricing.freelancerPlans?.[0]?.studentDiscountMsg}</p>
                  <div className="mt-6">
                    <a href="/pricing#freelancers" className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full font-semibold">View full pricing</a>
                  </div>
                </motion.div>
              </>
            ) : (
              <div className="text-center py-12">Loading pricing…</div>
            )}
          </div>
        </section>

        {/* Top Niches */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🏅 100+ Top <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Niches</span> for Higher Income
          </motion.h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="p-4 bg-gray-100/60 dark:bg-gray-800/50 rounded-lg flex items-center gap-3 border border-sky-500/20 dark:border-sky-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(14,165,233,0.5)' }}
              >
                <CheckCircle className="w-5 h-5 text-sky-500" />
                {category === 'And Many More' ? (
                  <Link
                    to="/all-categories"
                    className="text-gray-900 dark:text-white hover:text-sky-500 transition-colors duration-200 cursor-pointer"
                  >
                    {category}
                  </Link>
                ) : (
                  <span className="text-gray-900 dark:text-white">{category}</span>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Slideshow */}
        <section className="py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            💬 Freelancer <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Success Stories</span>
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {freelancerTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center hover:border-orange-400/30 dark:hover:border-orange-300/30 transition-all duration-300"
                    >
                      <Quote className="w-12 h-12 text-sky-500 mx-auto mb-6 opacity-50" />

                      <p className="text-lg md:text-xl text-gray-900 dark:text-white mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg border-2 border-sky-400/30 dark:border-orange-300/30">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                          <p className="text-sm text-orange-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {freelancerTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-orange-400 scale-125'
                      : 'bg-gray-400/50 dark:bg-white/30 hover:bg-gray-500/50 dark:hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
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
              📈 Ready to <span className="bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent">Start Earning</span> Today?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Create an account, get verified, and turn your network into steady passive income. No hidden fees, no selling required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            </div>
          </motion.div>
        </section>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Freelancer Opportunities" />
          <meta
            name="description"
            content="Join Reflo Hub as a freelancer to earn passive income by referring leads in 100+ categories like real estate, finance, and travel. No selling required."
          />
          <meta
            name="keywords"
            content="Reflo Hub freelancer, passive income, lead generation, referral program, earn money online, global opportunities, freelancer platform"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Freelancer;

// Reusable Card Component
const Card = ({ title, description, icon: Icon, index, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
  >
    {Icon && <Icon className="w-6 h-6 text-orange-300 mb-4 mx-auto" aria-hidden="true" />}
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);
