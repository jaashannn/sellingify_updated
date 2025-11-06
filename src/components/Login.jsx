import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, DollarSign, Globe, Shield } from 'lucide-react';
import { getSaaSWebsite } from '../utils/env';
import logo from '../assets/new_loogo.png';

const Login = () => {
  const saasWebsite = getSaaSWebsite();

  useEffect(() => {
    // Redirect to external login page if SAAS_WEBSITE is set
    if (saasWebsite) {
      window.location.href = `${saasWebsite}/login`;
    }
  }, [saasWebsite]);

  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "100% Commission",
      description: "Keep every dollar you earn - no platform fees"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Submit leads from anywhere in the world"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Leads",
      description: "AI-powered verification ensures quality"
    },
    {
      icon: <img src={logo} alt="Reflo Hub Logo" className="w-6 h-6 object-contain" />,
      title: "Instant Payouts",
      description: "Get paid immediately when leads convert"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Freelancers" },
    { number: "500+", label: "Partner Businesses" },
    { number: "20+", label: "Countries Served" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Left Side - Project Showcase */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-orange-400/10 to-sky-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-400/10 animate-[gradient-shift_20s_ease_infinite] bg-[length:200%_200%]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sky-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 py-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={logo}
              alt="Reflo Hub Logo"
              className="h-20 w-20 object-contain"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent mb-4">
              Reflo Hub
            </h1>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Keep 100% Of Your Earning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Revolutionizing Referrals: Empowering Freelancers to Fuel Business Growth. 
              Turn connections into cash. Share leads, earn instantly, and help businesses thrive.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-sky-500 to-orange-400 rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              "I've earned $2,100 in just two months by connecting realtors with my contacts. 
              No technical skills needed - Reflo Hub made it simple!"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                SM
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">
                  Sarah Mitchell
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Freelancer, Calgary
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Redirect Message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Redirecting...
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You will be redirected to the login page shortly.
            </p>
            {!saasWebsite && (
              <p className="text-sm text-orange-500">
                Please set VITE_SAAS_WEBSITE environment variable.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Login;
