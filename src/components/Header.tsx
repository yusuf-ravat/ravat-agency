import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Animation variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  // Animation variants for mobile menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.25, ease: 'easeOut' },
    }),
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm" // changed background to solid white
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          className="flex shrink-0 rounded-lg p-2 "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className="p-1">
            <span className="sr-only">Ravat Agency</span>
            <img className="h-11 w-auto sm:h-22" src="/logo.png" alt="Ravat Agency" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-10">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary-600'
                    : 'text-gray-800 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Hamburger Button */}
        <motion.div
          className="flex lg:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full bg-white/80 shadow-sm"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-primary-50 px-4 py-6 sm:px-6 shadow-lg"
              id="mobile-menu"
            > 
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg"
                >
                  <Link to="/" className="p-1" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="sr-only">Ravat Agency</span>
                    <img className="h-11 w-auto sm:h-11" src="/logo.png" alt="Ravat Agency" />
                  </Link>
                </motion.div>
                <motion.button
                  type="button"
                  className="p-2.5 text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full bg-white/80 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="mt-1 space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={item.href}
                      className={`block rounded-lg px-4 py-2.5 text-base font-semibold tracking-wide transition-colors ${
                        location.pathname === item.href
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-800 hover:bg-primary-100 hover:text-primary-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.08, duration: 0.25 }}
                >
                  <Link
                    to="/contact"
                    className="block w-full rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 mt-4 shadow-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}