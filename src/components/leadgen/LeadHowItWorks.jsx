import { motion } from 'framer-motion';
import { FileSearch, Megaphone, CalendarCheck2, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    title: '1. Strategy and ICP',
    description: 'We align on offer, ideal customer profile, buying triggers, and target accounts.',
  },
  {
    icon: Megaphone,
    title: '2. Campaign Launch',
    description: 'We deploy outbound and inbound campaigns with messaging mapped to pain points.',
  },
  {
    icon: CalendarCheck2,
    title: '3. Qualification',
    description: 'Interested prospects are qualified and handed off as ready sales conversations.',
  },
  {
    icon: TrendingUp,
    title: '4. Scale and Improve',
    description: 'We review weekly performance and improve targeting, scripts, and channels.',
  },
];

const LeadHowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-black dark:text-gray-300 max-w-3xl mx-auto">
            A practical lead-generation workflow built to produce pipeline, not vanity metrics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-gray-50/80 dark:bg-white/5"
            >
              <step.icon className="w-7 h-7 text-violet-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-black dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadHowItWorks;
