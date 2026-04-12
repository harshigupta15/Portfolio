import { Github, Linkedin, Twitter, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <Code2 size={14} className="text-indigo-400" />
            </div>
            <span className="text-slate-400 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
              Harshi<span className="text-indigo-400">.</span>portfolio
            </span>
          </div>

          <p className="text-slate-500 text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400 fill-red-400" /> using React & Tailwind CSS
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/harshigupta15' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/harshi-gupta-a2b42a26a/' },
              { icon: Twitter, href: 'https://x.com/HarshiGupt15' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-slate-600 text-xs mt-6">
          © {new Date().getFullYear()} Harshi Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
