import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { ExternalLink, Github, Star } from 'lucide-react';

// Replace the projects array entirely:
const projects = [
   {
    title: 'Arzi — Smart Complaint System',
    description: 'AI-powered complaint management with TF-IDF + Naïve Bayes classification, urgency detection, and real-time admin dashboard.Achieved 92% accuracy in complaint classification by implementing a TF-IDF and Naïve Bayes model, reducing manual sorting time significantly.',
    tags: ['Flask', 'Python', 'Scikit-learn', 'TF-IDF', 'SQLite'],
    color: '#a855f7',
    gradient: 'from-purple-500/20 to-pink-500/10',
    stars: 0,
    github: 'https://github.com/harshigupta15',
    featured: true,
  },
  {
    title: 'Fashion Recommendation System',
    description: 'CNN-based fashion classifier with personalized recommendations and virtual try-on. Achieved 93% accuracy and 30% engagement boost.',
    tags: ['Python', 'CNN', 'NLP', 'JavaScript', 'ML'],
    color: '#6366f1',
    gradient: 'from-indigo-500/20 to-purple-500/10',
    stars: 0,
    github: 'https://github.com/harshigupta15', // 👈 direct repo link
  
  },
  {
    title: 'WanderLust',
    description: 'Full-stack travel listing app with CRUD, Passport.js auth, rating system, and optimized queries cutting response time by 25%.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Passport.js'],
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    stars: 0,
    github: 'https://github.com/harshigupta15',
  },
  
];
// Remove the last 3 placeholder projects or keep them as "Coming Soon"

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group glass-card rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/70 transition-all duration-300 hover:shadow-2xl flex flex-col"
      style={{ '--accent': project.color }}
    >
      {/* Image placeholder / gradient banner */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} border-b border-slate-700/30 overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Mock UI shapes */}
        <div className="absolute inset-4 rounded-xl border border-white/5 bg-white/2" />
        <div
          className="absolute top-8 left-8 right-8 h-3 rounded-full opacity-30"
          style={{ background: project.color }}
        />
        <div className="absolute top-16 left-8 w-2/3 h-2 rounded-full bg-white/10" />
        <div className="absolute top-22 left-8 w-1/2 h-2 rounded-full bg-white/8" />
        <div
          className="absolute bottom-4 right-4 w-16 h-16 rounded-2xl opacity-20"
          style={{ background: `radial-gradient(circle, ${project.color}, transparent)` }}
        />

        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold bg-indigo-500 text-white rounded-lg shadow-lg">
            Featured
          </div>
        )}

        {/* Stars */}
        
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md text-slate-400 border border-slate-700/60 hover:border-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/40">
          
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-lg transition-all flex-1 justify-center"
          >
            <Github size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-slate-900/20">
      <SectionTitle
        label="Portfolio"
        title="Featured Projects"
        subtitle="A selection of projects that showcase my skills in full-stack development, API design, and real-world problem solving."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com"
          className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-indigo-500/50 text-slate-400 hover:text-white rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5"
        >
          <Github size={16} />
          View all on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
