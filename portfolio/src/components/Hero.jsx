import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';

const roles = ['MERN Stack Developer', 'Problem Solver', 'AI/ML Enthusiast', 'Curious Learner'];

function Typewriter({ words }) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[current];
    let timer;
    if (!deleting && displayed.length < word.length) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setCurrent((c) => (c + 1) % words.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, current, words]);

  return (
    <span className="text-indigo-400 typewriter-cursor">{displayed}</span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-600/8 rounded-full blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/20 text-xs text-indigo-400 font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Harshi</span>
              <span className="text-indigo-400">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-slate-400 mb-6 h-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <Typewriter words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-md"
            >
              Final year Computer Science and Engineering (AI & ML) student skilled in full-stack web development, cloud,
              and machine learning. Experienced in building AI-powered applications, recommendation systems, and scalable
              backend services. Strong problem-solving and analytical skills with a focus on impactful, real-world projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                View Projects
              </button>
              <button className="px-7 py-3.5 glass border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white font-medium rounded-xl transition-all flex items-center gap-2 hover:-translate-y-0.5">
              <a href="https://drive.google.com/file/d/15618hcXfEy02WxazzAXBEuth1yv2PuB5/view?usp=drive_link" target="_blank">
                <Download size={15}/> 
                Resume
                </a>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/harshigupta15', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/harshi-gupta-a2b42a26a/', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://x.com/HarshiGupt15', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass border border-slate-700 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Terminal card */}
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-indigo-500/10">
                {/* Terminal top bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-slate-800/50 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-mono text-slate-500">Harshi.js</span>
                </div>
                <div className="p-6 font-mono text-sm leading-7">
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-slate-400">=</span> <span className="text-yellow-400">{'{'}</span></div>
                  <div className="pl-6"><span className="text-indigo-300">name</span><span className="text-slate-400">:</span> <span className="text-green-300">'Harshi Gupta'</span><span className="text-slate-400">,</span></div>
                  <div className="pl-6"><span className="text-indigo-300">role</span><span className="text-slate-400">:</span> <span className="text-green-300">'MERN Developer'</span><span className="text-slate-400">,</span></div>
                  <div className="pl-6"><span className="text-indigo-300">stack</span><span className="text-slate-400">:</span> <span className="text-yellow-400">[</span><span className="text-green-300">'MongoDB'</span><span className="text-slate-400">, </span><span className="text-green-300">'Express'</span><span className="text-slate-400">, </span><span className="text-green-300">'React'</span><span className="text-slate-400">, </span><span className="text-green-300">'Node'</span><span className="text-yellow-400">]</span><span className="text-slate-400">,</span></div>
                  <div className="pl-6"><span className="text-indigo-300">passion</span><span className="text-slate-400">:</span> <span className="text-green-300">'Building cool stuff'</span><span className="text-slate-400">,</span></div>
                  <div className="pl-6"><span className="text-indigo-300">available</span><span className="text-slate-400">:</span> <span className="text-orange-400">true</span></div>
                  <div><span className="text-yellow-400">{'}'}</span></div>
                  <div className="mt-2 text-slate-500">{'// Ready to collaborate!'}</div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ x: [0, 5, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-2 glass-card rounded-xl border border-green-500/20 text-xs font-mono text-green-400 shadow-lg"
              >
                ✓ Open to offers
              </motion.div>
              <motion.div
                animate={{ x: [0, -5, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3 py-2 glass-card rounded-xl border border-indigo-500/20 text-xs font-mono text-indigo-400 shadow-lg"
              >
                {'<'} 6 months exp {'>'}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 mt-4"
        >
          <span className="text-xs text-slate-600 font-mono">scroll down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={18} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
