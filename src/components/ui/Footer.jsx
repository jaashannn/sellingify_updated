import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const companyLinks = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { label: 'Features', path: '/features' },
    { label: 'Get Started', path: '/get-started' },
    { label: 'FAQ', path: '/faq' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms and Conditions', path: '/terms-and-conditions' },
    { label: 'Cookies', path: '/cookies' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/' },
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/' },
    { icon: MessageCircle, label: 'Social', url: 'https://www.linkedin.com/' },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 dark:from-purple-950/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 border-b border-zinc-200 dark:border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Stay in the loop
            </h3>
            <p className="text-black dark:text-gray-300 mb-6">
              Pipeline tips and product updates from Sellingify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-zinc-200 dark:border-white/10 rounded-lg text-black dark:text-white placeholder-zinc-500 dark:placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 28px rgba(139, 92, 246, 0.35)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-700 to-violet-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="py-12 grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <Link to="/" className="inline-block mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md">
              <img
                src="/logo.png"
                alt="Sellingify"
                className="h-10 w-auto object-contain object-left"
                width={200}
                height={40}
                decoding="async"
              />
            </Link>
            <p className="text-black dark:text-gray-300 mb-6">
              B2B lead generation: qualified conversations, clear reporting, and campaigns built around your revenue goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#a78bfa' }}
                  className="w-10 h-10 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-zinc-200 dark:border-white/10 rounded-lg flex items-center justify-center text-black dark:text-gray-300 hover:border-violet-500 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.path}
                      className="text-black dark:text-gray-300 hover:text-violet-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.path}
                      className="text-black dark:text-gray-300 hover:text-violet-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.path}
                      className="text-black dark:text-gray-300 hover:text-violet-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="py-8 border-t border-zinc-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-black dark:text-gray-300 text-center md:text-left"
          >
            Copyright © 2026 Sellingify. All rights reserved.
          </motion.p>
          <motion.a
            href="mailto:hello@sellingify.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-black dark:text-gray-300 hover:text-violet-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@sellingify.com
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
