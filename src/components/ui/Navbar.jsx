import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/new_loogo.png';
import { useTheme } from '../../ThemeContext.jsx';
import { getSaaSWebsite } from '../../utils/env';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const saasWebsite = getSaaSWebsite();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Freelancer', path: '/freelancer' },
    { name: 'Business', path: '/business' },
    { name: 'Webinar', path: '/webinar' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-gray-100/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Reflo Hub Logo"
                className="h-16 w-16 object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2, color: '#00d4ff' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-orange-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>





              </motion.div>
            ))}

            {/* Login Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={saasWebsite ? `${saasWebsite}/login` : '/login'}
                className="px-4 py-2 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                Login
              </a>
            </motion.div>
            
            {/* Register Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={saasWebsite ? `${saasWebsite}/register` : '/get-started'}
                className="px-4 py-2 bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                Register
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:text-cyan-400 hover:bg-gray-200/60 dark:hover:bg-white/5 rounded-lg transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Login Button */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <a
                href={saasWebsite ? `${saasWebsite}/login` : '/login'}
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg transition-colors duration-300"
              >
                Login
              </a>
            </motion.div>
            
            {/* Mobile Register Button */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: (navItems.length + 1) * 0.1 }}
            >
              <a
                href={saasWebsite ? `${saasWebsite}/register` : '/get-started'}
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-sky-500 to-orange-300 text-white rounded-lg transition-colors duration-300"
              >
                Register
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;