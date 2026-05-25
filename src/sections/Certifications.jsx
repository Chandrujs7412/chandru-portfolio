import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import SectionHeading from '../components/SectionHeading';
import { certifications, education } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications & Education"
          subtitle="Continuous learning and formal qualifications"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map(({ title, issuer, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex items-center gap-5"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 shrink-0">
                <Icon size={28} className="text-primary-light" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary">{title}</h3>
                <p className="text-sm text-text-muted">{issuer}</p>
              </div>
            </motion.div>
          ))}

          {education.map(({ degree, institution, cgpa }, i) => (
            <motion.div
              key={degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (certifications.length + i) * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex items-center gap-5"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 shrink-0">
                <HiOutlineAcademicCap size={28} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary">{degree}</h3>
                <p className="text-sm text-text-muted">{institution}</p>
                <p className="text-sm text-accent-light mt-1">CGPA: {cgpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
