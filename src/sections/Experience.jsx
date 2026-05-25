import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineCheckBadge } from 'react-icons/hi2';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolio';

function ProjectTimeline({ project, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row gap-6 md:gap-12 relative ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-primary/40 to-transparent -translate-x-1/2" />
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-primary glow items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
        >
          <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
          <p className="text-text-secondary mb-4 text-sm">{project.description}</p>

          <div className="space-y-2 mb-5">
            {project.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className={`flex items-start gap-2 ${isLeft ? 'md:justify-end' : ''}`}
              >
                <HiOutlineCheckBadge size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-text-muted">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary-light border border-primary/20">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="Building production systems that handle real-time data at scale"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 mb-12 max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <HiOutlineBriefcase size={24} className="text-primary-light" />
            <h3 className="text-xl font-bold text-text-primary">{experience.company}</h3>
          </div>
          <p className="text-accent-light font-medium">{experience.role}</p>
          <p className="text-text-muted text-sm mt-1">{experience.period}</p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {experience.projects.map((project, i) => (
            <ProjectTimeline key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
