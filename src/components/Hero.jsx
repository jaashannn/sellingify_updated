import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getSaaSWebsite } from '../utils/env';

const Hero = () => {
  const saasWebsite = getSaaSWebsite();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white pt-20 pb-12 md:pb-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-400/10 dark:from-sky-500/10 dark:to-orange-400/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 dark:bg-orange-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 mb-3 md:mb-8 sm:px-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">Now Available in 20+ Countries</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4 md:mb-6 drop-shadow-[0_0_30px_rgba(255,165,0,0.6)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reflo Hub
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4 md:mb-6 drop-shadow-[0_0_30px_rgba(255,165,0,0.6)] max-w-2xl mx-auto leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Monopoly for Businesses. 100% Earnings for Freelancers.
          </motion.h2>

          <motion.div
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>Only 2 businesses per category per city & Premium = only 1 Business per city.</p>
            <p>Freelancers keep every rupee, dollar, or pound they earn globally.</p>
            <p>No middlemen. No commission cuts.</p>
            <p>Just Connect. Refer. Close. Earn.</p>
            <p className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mt-6">
              Register before your city fills up.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href={saasWebsite ? `${saasWebsite}/register` : '/get-started'} className="w-full sm:w-auto block sm:inline-block">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join as Freelancer
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </a>

            <a href={saasWebsite ? `${saasWebsite}/register` : '/get-started'} className="w-full sm:w-auto block sm:inline-block">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 40px rgba(30, 64, 175, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-300 to-sky-500 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-white dark:text-white rounded-xl font-semibold text-base sm:text-lg hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
              >
                <span className="flex items-center">
                  Join as Business
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '10K+', label: 'Active Freelancers' },
            { number: '500+', label: 'Partner Businesses' },
            { number: '20+', label: 'Countries Served' },
            { number: '95%', label: 'Success Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
