import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-indigo-500/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('#hero')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
              <Code2 size={16} className="text-indigo-400" />
            </div>
            <span className="font-display text-white font-bold text-lg tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Harshi<span className="text-indigo-400">.</span>portfolio
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                    style={{ zIndex: -1 }}
                  />
                )}
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="ml-4 px-5 py-2 text-sm font-semibold bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors shadow-lg shadow-indigo-500/25"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[64px] z-40 glass border-t border-indigo-500/10 md:hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-indigo-500/10 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 px-4 py-3 text-sm font-semibold bg-indigo-500 text-white rounded-lg"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
