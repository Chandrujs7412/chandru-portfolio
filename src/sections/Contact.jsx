import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineEnvelope, HiOutlinePaperAirplane, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolio';

const socialLinks = [
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600/20 hover:text-blue-400' },
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:bg-white/10 hover:text-white' },
  { icon: HiOutlineEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:bg-red-500/20 hover:text-red-400' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Interested in working together? Let's connect."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Let's Build Something Great</h3>
              <p className="text-text-secondary">
                I'm always interested in hearing about new projects, especially those involving
                distributed systems, streaming architectures, or real-time applications.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-primary-light transition-colors"
              >
                <HiOutlineEnvelope size={20} />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-text-secondary hover:text-primary-light transition-colors"
              >
                <HiOutlinePhone size={20} />
                {personalInfo.phone}
              </a>
              <div className="flex items-center gap-3 text-text-secondary">
                <HiOutlineMapPin size={20} />
                {personalInfo.location}
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-xl glass text-text-muted transition-all ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass rounded-xl p-5 font-mono text-sm"
            >
              <div className="text-text-muted mb-1">$ curl -X POST /api/contact</div>
              <div className="text-emerald-400">{'{'}</div>
              <div className="pl-4">
                <span className="text-purple-400">"status"</span>:{' '}
                <span className="text-accent-light">"open_to_opportunities"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-400">"response_time"</span>:{' '}
                <span className="text-accent-light">"&lt; 24 hours"</span>
              </div>
              <div className="text-emerald-400">{'}'}</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-light/50 border border-white/5 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-light/50 border border-white/5 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-light/50 border border-white/5 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity"
              >
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <HiOutlinePaperAirplane size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
