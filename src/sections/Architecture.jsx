import { motion } from 'framer-motion';
import {
  HiOutlineSignal, HiOutlineServerStack, HiOutlineCpuChip,
  HiOutlineCircleStack, HiOutlineChartBarSquare, HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt, HiOutlineCog6Tooth, HiOutlineBolt,
} from 'react-icons/hi2';
import SectionHeading from '../components/SectionHeading';
import { architectures } from '../data/portfolio';

const iconMap = {
  source: HiOutlineSignal,
  kafka: HiOutlineServerStack,
  flink: HiOutlineCpuChip,
  bigquery: HiOutlineCircleStack,
  grafana: HiOutlineChartBarSquare,
  client: HiOutlineDevicePhoneMobile,
  gateway: HiOutlineGlobeAlt,
  engine: HiOutlineCog6Tooth,
  ws: HiOutlineBolt,
  redis: HiOutlineBolt,
  db: HiOutlineCircleStack,
};

function ArchNode({ node, index, total }) {
  const Icon = iconMap[node.icon] || HiOutlineServerStack;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.4 }}
      className="flex flex-col items-center gap-1 relative"
    >
      <motion.div
        whileHover={{ scale: 1.1, y: -4 }}
        className="glass rounded-xl p-4 flex flex-col items-center gap-2 min-w-[100px] hover:shadow-lg hover:shadow-primary/10 transition-shadow cursor-default"
      >
        <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
          <Icon size={24} className="text-primary-light" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-text-primary">{node.label}</p>
          <p className="text-xs text-text-muted">{node.sub}</p>
        </div>
      </motion.div>

      {index < total - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2, duration: 0.3 }}
          className="hidden md:flex items-center absolute -right-6 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
          <div className="w-0 h-0 border-l-[6px] border-l-accent border-y-[4px] border-y-transparent" />
        </motion.div>
      )}
    </motion.div>
  );
}

function ArchDiagram({ arch, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass rounded-2xl p-8"
    >
      <h3 className="text-xl font-bold text-text-primary mb-2 text-center">{arch.title}</h3>
      <p className="text-sm text-text-muted text-center mb-8">{arch.description}</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 overflow-x-auto pb-2">
        {arch.nodes.map((node, i) => (
          <div key={node.id} className="flex items-center gap-4 md:gap-0">
            <ArchNode node={node} index={i} total={arch.nodes.length} />
            {i < arch.nodes.length - 1 && (
              <div className="flex md:hidden flex-col items-center">
                <div className="w-px h-6 bg-gradient-to-b from-primary to-accent" />
                <div className="w-0 h-0 border-t-[6px] border-t-accent border-x-[4px] border-x-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="System Architecture"
          subtitle="High-level architecture designs for production-grade systems"
        />
        <div className="space-y-8">
          {architectures.map((arch, i) => (
            <ArchDiagram key={arch.title} arch={arch} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
