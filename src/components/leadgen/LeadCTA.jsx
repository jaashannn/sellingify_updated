import { motion } from 'framer-motion';
import { ArrowRight, CalendarClock } from 'lucide-react';

const CAL_BOOKING_URL = 'https://cal.com/sellingify-sales/30min';

const LeadCTA = () => {
  return (
    <section className="relative py-24 bg-gray-100 dark:bg-gray-950 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-violet-400/20 dark:bg-violet-500/15 blur-3xl rounded-full" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-violet-300/30 dark:border-violet-500/30 bg-white/80 dark:bg-white/5 p-10 backdrop-blur-sm"
        >
          <div className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Predictable Pipeline?</h2>
          <p className="text-lg text-black dark:text-gray-300 mb-8">
            Tell us your goals and market. We will map the fastest path to qualified conversations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-400 text-white font-semibold hover:opacity-95 transition"
            >
              Book 30-Min Meeting
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-violet-300 dark:border-violet-500/50 font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition"
            >
              <CalendarClock className="w-4 h-4 text-violet-500" />
              Share Requirements
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCTA;
