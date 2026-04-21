import { motion } from 'framer-motion';
import { CalendarDays, Rocket, CheckCircle2 } from 'lucide-react';

const CAL_BOOKING_URL = 'https://cal.com/sellingify-sales/30min';

const LeadGetStarted = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-white dark:bg-gray-950 text-black dark:text-white overflow-hidden">
      <div className="absolute -top-20 left-0 w-80 h-80 bg-violet-400/20 dark:bg-violet-500/15 blur-3xl rounded-full" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/40 dark:border-violet-500/40 bg-violet-100/70 dark:bg-violet-900/20 px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium">Launch your pipeline plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started</h1>
          <p className="text-lg text-black dark:text-gray-300 mb-10">
            Choose your preferred slot and meet our team for a focused growth consultation.
          </p>

          <div className="grid sm:grid-cols-1 gap-4 mb-8">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300 dark:border-violet-500/50 px-6 py-4 font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition"
            >
              <CalendarDays className="w-4 h-4 text-violet-500" />
              Book a Discovery Call
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mb-10">
            {[
              'Pick your preferred slot',
              'Meet for 30 minutes',
              'Get clear next steps',
            ].map((step) => (
              <div
                key={step}
                className="rounded-xl border border-violet-300/30 dark:border-violet-500/30 bg-white/80 dark:bg-white/5 p-3 text-sm font-medium flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-violet-500" />
                {step}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-[1px] bg-gradient-to-r from-violet-400/50 via-fuchsia-400/40 to-violet-400/50">
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-3">
            <iframe
              title="Schedule with Sellingify"
              src={`${CAL_BOOKING_URL}?embed=true`}
              className="w-full h-[760px] rounded-xl border-0"
              loading="lazy"
            />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadGetStarted;
