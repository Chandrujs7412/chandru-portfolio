import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { personalInfo } from '../data/portfolio';

const socials = [
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: HiOutlineEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-text-muted">
            <span className="text-primary-light">&lt;</span>
            Built by{' '}
            <span className="text-text-primary">{personalInfo.name}</span>
            <span className="text-primary-light"> /&gt;</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-text-muted hover:text-primary-light hover:bg-white/5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
