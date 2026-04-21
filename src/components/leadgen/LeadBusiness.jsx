import { motion } from 'framer-motion';
import { Building2, MessageSquareText, BarChart3, ArrowRight, Search, Send, Handshake, Globe2 } from 'lucide-react';

const CAL_BOOKING_URL = 'https://cal.com/sellingify-sales/30min';

const coreServices = [
  {
    icon: Search,
    title: 'ICP and Market Mapping',
    description: 'We define your ideal buyers, buying signals, and vertical priorities before campaigns launch.',
  },
  {
    icon: Send,
    title: 'Multi-Channel Outbound',
    description: 'Personalized outreach across email and social channels with disciplined follow-up sequences.',
  },
  {
    icon: Handshake,
    title: 'Qualified Meeting Handoff',
    description: 'Leads are screened for fit and intent so your sales team spends time on real opportunities.',
  },
];

const differentiators = [
  {
    icon: Building2,
    title: 'Built for B2B Growth Teams',
    description: 'Best suited for agencies, SaaS, and service-led companies that need predictable pipeline.',
  },
  {
    icon: MessageSquareText,
    title: 'Message-Market Clarity',
    description: 'We continuously improve copy and targeting based on what buyers actually respond to.',
  },
  {
    icon: BarChart3,
    title: 'Revenue-Focused Reporting',
    description: 'Weekly updates track replies, meetings, and pipeline movement, not vanity metrics.',
  },
];

const industries = ['SaaS', 'Agencies', 'IT Services', 'Consulting', 'Legal', 'Finance', 'Healthcare B2B', 'EdTech'];

const LeadBusiness = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-300/40 dark:border-violet-500/40 bg-violet-100/70 dark:bg-violet-900/20 mb-5">
            <Globe2 className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium">Business Lead Generation Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lead Generation for Businesses</h1>
          <p className="text-lg text-black dark:text-gray-300">
            End-to-end demand generation for B2B companies that want qualified pipeline and consistent sales conversations.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-violet-300/30 dark:border-violet-500/30 bg-white/80 dark:bg-white/5 p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-5">What We Handle for You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coreServices.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-gray-50/80 dark:bg-white/5">
                <item.icon className="w-6 h-6 text-violet-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-black dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {differentiators.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-gray-50/80 dark:bg-white/5">
              <item.icon className="w-6 h-6 text-violet-500 mb-3" />
              <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
              <p className="text-black dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-gray-50/80 dark:bg-white/5 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Industries We Commonly Support</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-lg px-4 py-3 border border-violet-300/30 dark:border-violet-500/30 bg-white/80 dark:bg-white/5 text-sm font-medium text-center">
                {industry}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-400 text-white font-semibold"
          >
            Book a Growth Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadBusiness;
