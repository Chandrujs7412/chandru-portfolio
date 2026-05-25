import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xl font-bold font-mono"
            >
              <span className="text-primary-light">&lt;</span>
              <span className="text-text-primary">JSC</span>
              <span className="text-primary-light"> /&gt;</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleClick(href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === href
                      ? 'text-primary-light bg-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-6">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleClick(href)}
                  className={`w-full text-center px-6 py-4 rounded-xl text-lg font-medium transition-all ${
                    activeSection === href
                      ? 'text-primary-light bg-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                className="w-full text-center mt-4 px-6 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-primary to-accent text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
