import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineEnvelope, HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import TypeWriter from '../components/TypeWriter';
import { personalInfo, stats } from '../data/portfolio';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ label, value, prefix, suffix }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold gradient-text">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-text-muted mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-secondary mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-4 h-8"
          >
            <TypeWriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10 text-balance"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href={personalInfo.resume}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-all glow"
            >
              <HiOutlineDocumentArrowDown size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl glass text-text-primary font-medium hover:bg-white/10 transition-all"
            >
              <HiOutlineEnvelope size={20} />
              Contact Me
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary-light font-medium hover:bg-primary/10 transition-all"
            >
              View Projects
              <HiOutlineArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto glass rounded-2xl p-6"
          >
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiOutlineArrowDown className="text-text-muted" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
