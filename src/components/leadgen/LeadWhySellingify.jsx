import { motion } from 'framer-motion';
import { CheckCircle2, LineChart, Target, Users } from 'lucide-react';

const points = [
  {
    icon: Target,
    title: 'ICP-Focused Targeting',
    description: 'We define who to target and why, then build campaign lists around real buying signals.',
  },
  {
    icon: Users,
    title: 'Human + Process',
    description: 'You get a dedicated team that executes consistently, not random outreach from multiple freelancers.',
  },
  {
    icon: LineChart,
    title: 'Weekly Optimization',
    description: 'We review reply quality, meetings booked, and funnel progression to improve results every week.',
  },
  {
    icon: CheckCircle2,
    title: 'Qualified Handoffs',
    description: 'Your sales team receives context-rich meetings instead of unqualified names in a spreadsheet.',
  },
];

const LeadWhySellingify = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Why Teams Choose
            <span className="bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent"> Sellingify</span>
          </h2>
          <p className="mt-4 text-black dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Typical lead vendors sell volume. We build a repeatable demand system that supports pipeline growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-violet-300/30 dark:border-violet-500/30 bg-white/70 dark:bg-white/5 p-6"
            >
              <point.icon className="w-7 h-7 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-black dark:text-gray-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadWhySellingify;
