import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CalendarDays, ShieldCheck, Users2 } from 'lucide-react';

const CAL_BOOKING_URL = 'https://cal.com/sellingify-sales/30min';

const LeadHero = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 bg-white dark:bg-gray-950 text-black dark:text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950" />
      <div className="absolute -top-28 -left-24 w-80 h-80 bg-violet-400/30 dark:bg-violet-500/20 blur-3xl rounded-full" />
      <div className="absolute top-20 -right-24 w-96 h-96 bg-fuchsia-400/25 dark:bg-fuchsia-500/20 blur-3xl rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/70 dark:bg-violet-900/30 border border-violet-300/40 dark:border-violet-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium">B2B Lead Generation Partner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Book More Qualified Sales Calls
            <span className="block bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">
              Without Guessing What Works
            </span>
          </h1>

          <p className="text-lg md:text-xl text-black dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Sellingify builds and runs your outbound and inbound lead systems end-to-end:
            targeting, messaging, campaigns, and optimization. Your team gets qualified
            opportunities and clear weekly reporting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-400 text-white font-semibold hover:opacity-95 transition"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/features"
              className="inline-flex items-center px-7 py-3.5 rounded-xl border border-violet-300 dark:border-violet-500/50 font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition"
            >
              See Our Process
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: CalendarDays, label: '30-minute strategy session' },
              { icon: ShieldCheck, label: 'No-pressure consultation' },
              { icon: Users2, label: 'Built for B2B growth teams' },
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-violet-300/30 dark:border-violet-500/30 backdrop-blur-sm"
              >
                <item.icon className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {[
              { k: 'Pipeline Focused', v: 'Qualified conversations over vanity metrics' },
              { k: 'Weekly Iteration', v: 'Messaging and targeting continuously improved' },
              { k: 'Clear Reporting', v: 'Know what moved opportunities forward' },
            ].map((card) => (
              <div
                key={card.k}
                className="rounded-2xl p-4 border border-violet-300/30 dark:border-violet-500/30 bg-white/85 dark:bg-white/5 backdrop-blur-sm text-left"
              >
                <p className="font-semibold text-sm mb-1">{card.k}</p>
                <p className="text-xs text-black dark:text-gray-300">{card.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadHero;
