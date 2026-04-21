import { motion } from 'framer-motion';
import { Brain, ListChecks, MessagesSquare, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Offer and Positioning Strategy',
    description: 'We sharpen your positioning so messaging speaks to real problems and buying intent.',
  },
  {
    icon: ListChecks,
    title: 'Target Account Building',
    description: 'We build and validate target lists based on role, company fit, and market signals.',
  },
  {
    icon: MessagesSquare,
    title: 'Multi-Channel Outreach',
    description: 'Email, social, and follow-up sequences run as one coordinated system.',
  },
  {
    icon: BarChart3,
    title: 'Pipeline Reporting',
    description: 'You see what activities create meetings and where to improve conversion.',
  },
];

const LeadFeatures = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Deliver</h1>
          <p className="text-lg text-black dark:text-gray-300 max-w-3xl mx-auto">
            Everything needed to run a serious lead-generation engine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-gray-50/80 dark:bg-white/5"
            >
              <item.icon className="w-7 h-7 text-violet-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-black dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadFeatures;
