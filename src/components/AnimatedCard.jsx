import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`glass rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
