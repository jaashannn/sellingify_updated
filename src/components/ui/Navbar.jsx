import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/business' },
    { name: 'Features', path: '/features' },
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
      className="fixed top-0 left-0 w-full bg-zinc-100/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.02 }} className="flex-shrink-0">
            <Link
              to="/"
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 rounded-md dark:focus-visible:ring-offset-zinc-950"
            >
              <img
                src="/logo.png"
                alt="Sellingify"
                className="h-9 w-auto sm:h-10 object-contain object-left"
                width={180}
                height={40}
                decoding="async"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-black dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-black dark:text-white hover:text-violet-500 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-violet-400" />
            ) : (
              <Moon className="w-5 h-5 text-black" />
            )}
          </button>
        </div>

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
                  className="block px-3 py-2 text-base font-medium text-black dark:text-white hover:text-violet-500 hover:bg-zinc-200/60 dark:hover:bg-white/5 rounded-lg transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
