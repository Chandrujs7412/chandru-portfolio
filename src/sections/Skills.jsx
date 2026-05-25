import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolio';

function SkillCard({ category, icon: CategoryIcon, color, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color} bg-opacity-20`}>
          <CategoryIcon size={22} className="text-white" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {items.map(({ name, icon: Icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-surface-light/50 hover:bg-surface-lighter/50 transition-colors cursor-default"
          >
            <Icon size={18} className="text-primary-light shrink-0" />
            <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with daily to build scalable systems"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
