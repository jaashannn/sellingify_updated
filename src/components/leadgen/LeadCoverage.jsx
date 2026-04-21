import { motion } from 'framer-motion';
import { Globe2, MapPin } from 'lucide-react';

const regions = ['North America', 'United Kingdom', 'Europe', 'Middle East', 'Australia', 'India'];

const LeadCoverage = () => {
  return (
    <section id="coverage" className="py-24 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe2 className="w-8 h-8 text-violet-500" />
            <h2 className="text-3xl md:text-5xl font-bold">Markets We Support</h2>
          </div>
          <p className="text-lg text-black dark:text-gray-300 max-w-3xl mx-auto mb-10">
            We run campaigns for companies selling into local, regional, and international B2B markets.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {regions.map((region, index) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl border border-violet-300/30 dark:border-violet-500/30 bg-white/80 dark:bg-white/5 p-4 flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-violet-500" />
              <span>{region}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadCoverage;
