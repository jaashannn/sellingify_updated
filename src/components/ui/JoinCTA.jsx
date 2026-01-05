import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react';
import { getSaaSWebsite } from '../../utils/env';

const JoinCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-orange-400/10 to-sky-500/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 dark:bg-orange-200/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500/20 to-orange-400/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-sky-500" />
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Limited Early Access</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">Transform</span>
            <br />
            Your Business?
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Join thousands of freelancers and businesses already earning more with Reflo Hub.
            Start your journey today with exclusive early access.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Join 10K+ Users',
                description: 'Growing community of successful freelancers and businesses',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Average 80% increase in lead conversion rates',
              },
              {
                icon: Sparkles,
                title: 'Early Access',
                description: 'Be among the first to access premium features',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 text-center hover:border-orange-400/30 dark:hover:border-orange-300/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-sky-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Join Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <a href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255, 165, 0, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join as Freelancer
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </a>

            <a href={getSaaSWebsite() ? `${getSaaSWebsite()}/register` : '/get-started'}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 40px rgba(30, 64, 175, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-orange-300 to-sky-500 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-white dark:text-white rounded-xl font-semibold text-lg hover:border-sky-500/50 dark:hover:border-sky-400/50 transition-all duration-300"
              >
                <span className="flex items-center">
                  Join as Business
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
