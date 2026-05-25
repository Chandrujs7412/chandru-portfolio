import { useState, useEffect } from 'react';

const phrases = [
  'Java Backend Engineer',
  'Streaming Data Architect',
  'Kafka & Flink Specialist',
  'Real-Time Systems Builder',
  'Distributed Systems Enthusiast',
];

export default function TypeWriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIdx === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <span className="font-mono text-accent-light">
      {phrases[phraseIdx].substring(0, charIdx)}
      <span className="animate-pulse text-primary-light">|</span>
    </span>
  );
}
