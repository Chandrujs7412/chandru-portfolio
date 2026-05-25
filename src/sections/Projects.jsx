import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowTopRightOnSquare, HiOutlineCodeBracket } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Backend', value: 'backend' },
  { label: 'Streaming', value: 'streaming' },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary-light" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <HiOutlineCodeBracket size={20} className="text-primary-light" />
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={project.demo}
              className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Live demo"
            >
              <HiOutlineArrowTopRightOnSquare size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-light transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted mb-4 line-clamp-2">{project.description}</p>

        <div className="mb-4">
          <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Architecture</p>
          <p className="text-sm text-text-secondary italic">{project.architecture}</p>
        </div>

        <div className="mb-4">
          <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Key Features</p>
          <div className="flex flex-wrap gap-1.5">
            {project.features.map((f) => (
              <span key={f} className="px-2 py-0.5 text-xs rounded-md bg-accent/10 text-accent-light border border-accent/20">
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-surface-light text-text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production systems built for performance, reliability, and scale"
        />

        <div className="flex justify-center gap-2 mb-12">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === value
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass text-text-secondary hover:text-text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
