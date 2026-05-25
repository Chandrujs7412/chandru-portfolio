import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
    </motion.div>
  );
}
