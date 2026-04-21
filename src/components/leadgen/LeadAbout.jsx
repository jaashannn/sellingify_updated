import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  Layers3,
  LineChart,
  Quote,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';

const CAL_BOOKING_URL = 'https://cal.com/sellingify-sales/30min';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillars = [
  {
    icon: Target,
    title: 'Clarity first',
    body: 'Every engagement starts with positioning and ICP so campaigns speak to real buyers—not generic lists.',
  },
  {
    icon: Layers3,
    title: 'One operating model',
    body: 'Strategy, execution, and reporting live together so you see how work ties to pipeline, not isolated metrics.',
  },
  {
    icon: LineChart,
    title: 'Accountable iteration',
    body: 'Weekly learning loops on messaging and targeting keep performance compounding instead of stalling.',
  },
];

const beliefs = [
  { label: 'Founders & sales leaders', detail: 'Who need pipeline they can forecast' },
  { label: 'Repeatable systems', detail: 'Not one-off blasts or vague “awareness”' },
  { label: 'Useful revenue work', detail: 'Clarity, accountability, outcomes you can audit' },
];

const LeadAbout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 dark:from-violet-950/40 via-white dark:via-gray-950 to-fuchsia-50/80 dark:to-gray-900" />
        <div className="absolute -top-32 -left-28 w-[420px] h-[420px] bg-violet-400/25 dark:bg-violet-600/15 blur-3xl rounded-full" />
        <div className="absolute top-40 -right-32 w-[480px] h-[480px] bg-fuchsia-400/20 dark:bg-fuchsia-600/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.22),transparent)]" />
        <div className="absolute inset-0 opacity-[0.35] dark:opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/80 dark:bg-violet-900/35 border border-violet-300/50 dark:border-violet-500/30 mb-8">
                <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-medium tracking-wide">Who we are</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6"
            >
              We exist to make{' '}
              <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                B2B pipeline
              </span>{' '}
              predictable.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-black/85 dark:text-gray-300 leading-relaxed mb-10"
            >
              Sellingify is a lead-generation team obsessed with one outcome: helping companies create
              consistent, qualified conversations—not vanity activity.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 hover:opacity-[0.97] transition-all"
              >
                Meet the team
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-violet-300/70 dark:border-violet-500/40 font-semibold bg-white/70 dark:bg-white/5 backdrop-blur-sm hover:bg-violet-50/90 dark:hover:bg-violet-900/25 transition-colors"
              >
                <Compass className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid sm:grid-cols-3 gap-4 md:gap-5"
          >
            {[
              { n: '01', t: 'Strategy', d: 'ICP, offer, and channel fit before a single send.' },
              { n: '02', t: 'Execution', d: 'Campaigns with disciplined follow-up and QA.' },
              { n: '03', t: 'Reporting', d: 'Weekly visibility into what moved the needle.' },
            ].map((item, i) => (
              <div
                key={item.n}
                className="group relative rounded-2xl border border-violet-200/60 dark:border-violet-500/20 bg-white/80 dark:bg-white/[0.06] backdrop-blur-md p-5 md:p-6 overflow-hidden hover:border-violet-400/70 dark:hover:border-violet-400/35 transition-colors"
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 blur-2xl group-hover:opacity-100 opacity-70 transition-opacity" />
                <span className="text-xs font-mono text-violet-600 dark:text-violet-400 tracking-widest">{item.n}</span>
                <p className="mt-2 text-lg font-bold">{item.t}</p>
                <p className="mt-2 text-sm text-black/75 dark:text-gray-400 leading-snug">{item.d}</p>
                <Zap className="absolute bottom-4 right-4 w-5 h-5 text-violet-400/40 group-hover:text-violet-500/70 transition-colors" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story + bento */}
      <section className="relative py-20 md:py-28 border-t border-violet-200/40 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Most teams don&apos;t lose on product—they lose on{' '}
                <span className="text-violet-600 dark:text-violet-400">inconsistent demand</span>.
              </h2>
              <p className="text-black/80 dark:text-gray-300 leading-relaxed">
                Sellingify combines positioning, outbound and inbound execution, and tight feedback loops
                so growth isn&apos;t a guessing game. We partner with founders, sales leaders, and marketing
                to build outreach systems that are repeatable and measurable.
              </p>
              <p className="text-black/80 dark:text-gray-300 leading-relaxed">
                Campaigns start with clarity on who you help and why it matters now. From there we test
                messaging, refine targeting, and report on what actually created conversations—not just
                impressions.
              </p>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.05 }}
                className="sm:col-span-2 rounded-3xl p-6 md:p-8 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                <Quote className="w-10 h-10 opacity-90 mb-4 relative" />
                <p className="text-lg md:text-xl font-medium leading-relaxed relative max-w-xl">
                  Our values are simple: clarity in the plan, accountability in the work, and reporting
                  you can tie back to revenue—not noise.
                </p>
              </motion.div>

              {beliefs.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="rounded-2xl border border-gray-200 dark:border-white/10 p-5 md:p-6 bg-gray-50/90 dark:bg-white/[0.04] hover:border-violet-300/60 dark:hover:border-violet-500/30 transition-colors"
                >
                  <p className="font-semibold text-violet-700 dark:text-violet-300 mb-1">{b.label}</p>
                  <p className="text-sm text-black/75 dark:text-gray-400 leading-relaxed">{b.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-transparent via-violet-50/50 dark:via-violet-950/20 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How we show up</h2>
            <p className="text-black/80 dark:text-gray-400">
              Principles you will feel in every sprint, standup, and weekly report.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl border border-violet-200/50 dark:border-white/10 bg-white dark:bg-gray-900/80 p-6 md:p-8 shadow-sm shadow-violet-500/5 dark:shadow-none"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-5 text-white shadow-lg shadow-violet-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-black/78 dark:text-gray-400 text-sm leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-20 md:py-24 pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden border border-violet-300/40 dark:border-violet-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_50%,white,transparent_55%)]" />
            <div className="relative px-6 py-12 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-2">Next step</p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                  Tell us about your ICP and pipeline goals—we&apos;ll map a practical plan.
                </h2>
                <p className="text-white/85 text-sm md:text-base leading-relaxed">
                  Book a short strategy call. No pressure—just a clear conversation about fit and what
                  good would look like in the first 90 days.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <a
                  href={CAL_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-colors shadow-lg"
                >
                  Book a call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/features"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/40 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore capabilities
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeadAbout;
