import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { Briefcase, GraduationCap, Trophy, Code2 } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'AI Content Research and Development Intern',
    company: 'Physics Wallah',
    period: 'Oct 2025 – Apr 2026',
    location: 'Noida, UP',
    color: 'indigo',
    tags: ['Eleven labs', 'OpenAI API', 'Python', 'Canva', 'Figma'],
    points: [
      'Conducted research on AI-driven content creation tools, focusing on Eleven Labs and OpenAI API.',
      'Developed Python scripts to automate content generation and optimization for educational materials.',
      'Collaborated with design teams using Canva and Figma to create engaging academic visual content.',
    ],
  },
  {
    type: 'project',
    icon: Code2,
    title: 'Arzi - Smart Complaint Redressal System',
    company: 'Academic Project',
    period: 'Oct 2025 – Apr 2026',
    location: 'University',
    color: 'purple',
    tags: ['Node.js', 'Flutter', 'React.js', 'MySQL/PostgreSQL', 'TF-IDF', 'Multnomial Naive Bayes'],
    points: [
      'Developed a smart complaint management system using Flask and Python to automate the end-to-end process of submission, tracking, and resolution.',
      'Implemented an AI-based text classification model using TF-IDF and Naive Bayes to automatically categorize complaints and prioritize them by urgency level.',
      'Built a secure admin dashboard for real-time status tracking and history logs, resulting in enhanced transparency and significant gains in operational productivity.',
    ],
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'B.Tech in Computer Science(AI & ML)',
    company: 'GL Bajaj Institute of Technology and Management',
    period: '2022 – 2026',
    location: 'Greater Noida, UP',
    color: 'indigo',
    tags: ['CGPA: 8.0', 'DSA', 'DBMS', 'OS', 'CN'],
    points: [
      'Coursework: Data Structures, Database Management, Operating Systems, Computer Networks',

    ],
  },
];

const colorMap = {
  indigo: { dot: 'bg-indigo-500', border: 'border-indigo-500/30', tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', icon: 'text-indigo-400 bg-indigo-500/10' },
  purple: { dot: 'bg-purple-500', border: 'border-purple-500/30', tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20', icon: 'text-purple-400 bg-purple-500/10' },
  cyan: { dot: 'bg-cyan-500', border: 'border-cyan-500/30', tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20', icon: 'text-cyan-400 bg-cyan-500/10' },
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        label="Journey"
        title="Experience & Education"
        subtitle="A timeline of my professional journey, academic achievements."
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color];
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-4 md:left-5 top-5 w-5 h-5 rounded-full ${c.dot} ring-4 ring-slate-900 flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className={`glass-card rounded-2xl p-6 border ${c.border} hover:shadow-lg transition-shadow`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg ${c.icon} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base" style={{ fontFamily: 'Syne, sans-serif' }}>{exp.title}</h3>
                        <p className="text-slate-400 text-sm">{exp.company} · {exp.location}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-md border ${c.tag}`}>{tag}</span>
                    ))}
                  </div>

                  <ul className="space-y-1.5">
                    {exp.points.map((pt, pi) => (
                      <li key={pi} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-indigo-500 mt-1 flex-shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
