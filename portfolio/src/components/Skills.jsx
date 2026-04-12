import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { BookOpen, Monitor, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Monitor,
    label: 'Frontend',
    color: 'indigo',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'React.js', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Next.js', level: 72 },
    ],
  },
   {
    icon: BookOpen,
    label: 'Coursework',
    color: 'indigo',
    skills: [
      { name: 'DBMS', level: 92 },
      { name: 'OOPS', level: 90 },
      { name: 'CN', level: 88 },
      { name: 'OS', level: 95 },
      { name: 'DAA', level: 72 },
    ],
  },
  {
    icon: Server,
    label: 'Backend',
    color: 'purple',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'SQL', level: 92},
      
    ],
  },
  {
    icon: Wrench,
    label: 'Tools & DevOps',
    color: 'cyan',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 65 },
      { name: 'VS Code', level: 95 },
      
   
    ],
  },
];

const colorMap = {
  indigo: {
    border: 'border-indigo-500/20',
    icon: 'bg-indigo-500/10 text-indigo-400',
    bar: 'bg-indigo-500',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    glow: 'shadow-indigo-500/10',
    label: 'text-indigo-400',
  },
  purple: {
    border: 'border-purple-500/20',
    icon: 'bg-purple-500/10 text-purple-400',
    bar: 'bg-purple-500',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    glow: 'shadow-purple-500/10',
    label: 'text-purple-400',
  },
  cyan: {
    border: 'border-cyan-500/20',
    icon: 'bg-cyan-500/10 text-cyan-400',
    bar: 'bg-cyan-500',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    glow: 'shadow-cyan-500/10',
    label: 'text-cyan-400',
  },
};

function SkillBar({ name, level, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const c = colorMap[color];

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className={`font-mono text-xs ${c.label}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className={`h-full rounded-full ${c.bar}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-900/30">
      <SectionTitle
        label="Expertise"
        title="Skills & Technologies"
        subtitle="A collection of tools and technologies I use to build robust, scalable applications."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat, ci) => {
          const c = colorMap[cat.color];
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass-card rounded-2xl p-6 border ${c.border} shadow-xl ${c.glow} cursor-default`}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${c.icon} mb-4`}>
                <Icon size={20} />
              </div>
              <h3
                className="text-lg font-bold text-white mb-5"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {cat.label}
              </h3>
              <div>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} index={si} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Extra tech badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {['Java', 'SQL', 'Node.js', 'DBMS', 'OS', 'CN', 'OPPS', 'Express.js', 'HTML/CSS', 'Python'].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 text-xs font-mono text-slate-400 border border-slate-700/60 rounded-lg hover:border-indigo-500/30 hover:text-indigo-400 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
