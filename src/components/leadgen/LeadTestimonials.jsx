import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Sparkles, TrendingUp, Users2, BarChart3 } from 'lucide-react';

const testimonials = [
  {
    name: 'Maya Singh',
    role: 'Head of Growth, SaaS',
    company: 'FlowIQ',
    result: '+41% qualified demos in 90 days',
    content: 'Within eight weeks we had a consistent flow of qualified demos. The biggest win was message-market clarity.',
  },
  {
    name: 'Daniel Brooks',
    role: 'Founder, B2B Agency',
    company: 'Growth Atlas',
    result: '2.3x reply-to-meeting rate',
    content: 'Sellingify became our outsourced growth engine. Meetings were better qualified than any list vendor we used before.',
  },
  {
    name: 'Emma Clarke',
    role: 'Revenue Operations Manager',
    company: 'NexaCore',
    result: 'Shorter sales cycle by 18 days',
    content: 'The weekly reporting is excellent. We always know what changed, what worked, and what we are testing next.',
  },
];

const stats = [
  { icon: TrendingUp, value: '3.4x', label: 'Average pipeline lift' },
  { icon: Users2, value: '91%', label: 'Sales-accepted meetings' },
  { icon: BarChart3, value: 'Weekly', label: 'Optimization cycles' },
];

const LeadTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute -top-24 left-0 w-80 h-80 rounded-full bg-violet-400/20 dark:bg-violet-500/15 blur-3xl" />
      <div className="absolute top-16 right-0 w-80 h-80 rounded-full bg-fuchsia-400/20 dark:bg-fuchsia-500/15 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/40 dark:border-violet-500/40 bg-violet-100/70 dark:bg-violet-900/20 px-4 py-2 mb-5">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium">Client Feedback</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Client Results and Feedback</h2>
          <p className="mt-4 text-lg text-black dark:text-gray-300 max-w-3xl mx-auto">
            A creative snapshot of how teams are growing pipeline with better targeting, messaging, and conversion discipline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl border border-violet-300/30 dark:border-violet-500/30 bg-white/80 dark:bg-white/5 p-5 backdrop-blur-sm"
            >
              <stat.icon className="w-5 h-5 text-violet-500 mb-3" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-black dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-violet-400/60 via-fuchsia-400/45 to-violet-400/60 mb-8">
          <div className="rounded-3xl bg-gray-50/90 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <Quote className="w-8 h-8 text-violet-500" />
                  <div className="inline-flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-medium text-black dark:text-gray-100 leading-relaxed mb-5">
                  “{active.content}”
                </p>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-lg">{active.name}</p>
                    <p className="text-black dark:text-gray-300">
                      {active.role} · {active.company}
                    </p>
                  </div>
                  <div className="rounded-xl border border-violet-300/30 dark:border-violet-500/30 bg-white/80 dark:bg-white/5 px-4 py-2">
                    <p className="text-xs uppercase tracking-wide text-black dark:text-gray-300">Reported outcome</p>
                    <p className="font-semibold text-violet-600 dark:text-violet-300">{active.result}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'w-8 bg-violet-500' : 'w-2.5 bg-violet-300/70 dark:bg-violet-500/40'
                  }`}
                  aria-label={`Show testimonial from ${item.name}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white/85 dark:bg-white/5 backdrop-blur-sm"
            >
              <p className="font-semibold mb-1">{item.name}</p>
              <p className="text-sm text-black dark:text-gray-300 mb-3">{item.role}</p>
              <p className="text-sm text-black dark:text-gray-200">{item.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadTestimonials;
