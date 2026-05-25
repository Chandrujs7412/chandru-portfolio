import { motion } from 'framer-motion';
import { HiOutlineCheckCircle, HiOutlineCodeBracket, HiOutlineServerStack, HiOutlineBolt } from 'react-icons/hi2';
import SectionHeading from '../components/SectionHeading';
import { aboutPoints } from '../data/portfolio';

const highlights = [
  { icon: HiOutlineCodeBracket, label: 'Java Expert', desc: 'Spring Boot & Microservices' },
  { icon: HiOutlineServerStack, label: 'Streaming Architect', desc: 'Kafka & Flink Pipelines' },
  { icon: HiOutlineBolt, label: 'Real-Time Systems', desc: 'Sub-100ms Latency' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building systems that process millions of events in real time"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Icon size={24} className="text-primary-light" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{label}</h3>
                  <p className="text-sm text-text-muted">{desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="glass rounded-xl p-5 font-mono text-sm"
            >
              <div className="text-text-muted mb-2">// current_status.java</div>
              <div>
                <span className="text-purple-400">public class</span>{' '}
                <span className="text-accent-light">Engineer</span>{' '}
                <span className="text-text-muted">{'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-purple-400">String</span>{' '}
                <span className="text-text-primary">focus</span>{' '}
                <span className="text-text-muted">=</span>{' '}
                <span className="text-emerald-400">"Backend & Streaming"</span>;
              </div>
              <div className="pl-4">
                <span className="text-purple-400">boolean</span>{' '}
                <span className="text-text-primary">openToWork</span>{' '}
                <span className="text-text-muted">=</span>{' '}
                <span className="text-accent-light">true</span>;
              </div>
              <span className="text-text-muted">{'}'}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            {aboutPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-3 items-start group"
              >
                <HiOutlineCheckCircle
                  size={22}
                  className="text-primary-light mt-0.5 shrink-0 group-hover:text-accent transition-colors"
                />
                <p className="text-text-secondary group-hover:text-text-primary transition-colors">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
