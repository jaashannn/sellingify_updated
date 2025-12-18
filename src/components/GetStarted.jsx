
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { getSaaSWebsite } from '../utils/env';

const GetStarted = () => {
  const saasWebsite = getSaaSWebsite();

  useEffect(() => {
    // Redirect to external register page if SAAS_WEBSITE is set
    if (saasWebsite) {
      window.location.href = `${saasWebsite}/register`;
    }
  }, [saasWebsite]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-300/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-orange-300/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(255,165,0,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,165,0,0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Join Reflo Hub</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Get Started Today
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Join Reflo Hub as a freelancer or business and unlock a world of opportunities in lead generation and global collaboration.
          </p>
          
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto bg-gradient-to-b from-gray-100/60 dark:from-white/5 to-gray-200/60 dark:to-white/3 backdrop-blur-lg border border-orange-300/40 rounded-2xl p-8 shadow-[0_0_50px_rgba(255,165,0,0.3)]"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Redirecting...
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You will be redirected to the registration page shortly.
            </p>
            {!saasWebsite && (
              <p className="text-sm text-orange-500">
                Please set VITE_SAAS_WEBSITE environment variable.
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
