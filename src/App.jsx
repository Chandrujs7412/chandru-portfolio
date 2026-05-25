import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Architecture from './sections/Architecture';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-surface flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 mx-auto mb-4 border-2 border-primary/20 border-t-primary rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm text-text-muted"
        >
          Loading<span className="animate-pulse">...</span>
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <ScrollProgress />
        <ParticlesBackground />
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Architecture />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
