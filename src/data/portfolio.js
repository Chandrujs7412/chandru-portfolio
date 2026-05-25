import {
  FaJava, FaGitAlt, FaLinux, FaDocker,
} from 'react-icons/fa';
import {
  SiSpringboot, SiSpring, SiApachekafka, SiApacheflink,
  SiElasticsearch, SiGrafana, SiPostman, SiApachemaven,
  SiHibernate, SiJsonwebtokens,
} from 'react-icons/si';
import {
  HiOutlineServer, HiOutlineCube, HiOutlineBolt,
  HiOutlineCog6Tooth, HiOutlineCloud, HiOutlineCircleStack,
  HiOutlineCommandLine, HiOutlineShieldCheck,
} from 'react-icons/hi2';
import {
  TbApi, TbBrandGoogleBigQuery, TbArrowsShuffle,
} from 'react-icons/tb';

export const personalInfo = {
  name: 'J S Chandru',
  role: 'Java Backend & Streaming Data Engineer',
  intro: 'Backend engineer specializing in Java, Apache Kafka, Apache Flink, real-time streaming pipelines, and scalable multiplayer gaming systems.',
  email: 'chandrujs005@gmail.com',
  phone: '+91 9398604963',
  location: 'Chennai, India',
  linkedin: 'https://www.linkedin.com/in/chandru-j-s-a110bb305',
  github: 'https://github.com/jschandru',
  resume: '/resume.pdf',
};

export const aboutPoints = [
  '1+ years of hands-on backend engineering experience building production-grade systems',
  'Developed core features for a multiplayer poker platform supporting 500+ concurrent players',
  'Built real-time event streaming pipelines processing 50,000+ events per second with sub-100ms latency',
  'Expert in Apache Kafka and Apache Flink for distributed data processing and stream analytics',
  'Designed and implemented RESTful APIs and SDKs consumed by multiple client teams',
  'Led data pipeline migration and operator modernization initiatives',
  'Deep interest in scalable distributed systems, event-driven architecture, and high-throughput computing',
];

export const skills = [
  {
    category: 'Backend',
    icon: HiOutlineServer,
    color: 'from-indigo-500 to-purple-500',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'REST APIs', icon: TbApi },
      { name: 'Hibernate', icon: SiHibernate },
      { name: 'JPA', icon: HiOutlineCircleStack },
      { name: 'Spring Security', icon: SiSpring },
    ],
  },
  {
    category: 'Streaming & Data',
    icon: HiOutlineBolt,
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'Apache Kafka', icon: SiApachekafka },
      { name: 'Apache Flink', icon: SiApacheflink },
      { name: 'BigQuery', icon: TbBrandGoogleBigQuery },
      { name: 'Elasticsearch', icon: SiElasticsearch },
    ],
  },
  {
    category: 'Tools',
    icon: HiOutlineCog6Tooth,
    color: 'from-emerald-500 to-teal-500',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Maven', icon: SiApachemaven },
      { name: 'Linux', icon: FaLinux },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Postman', icon: SiPostman },
      { name: 'CI/CD', icon: HiOutlineCommandLine },
    ],
  },
  {
    category: 'Concepts',
    icon: HiOutlineCube,
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'Distributed Systems', icon: HiOutlineCloud },
      { name: 'Microservices', icon: TbArrowsShuffle },
      { name: 'Event-Driven Arch.', icon: HiOutlineBolt },
      { name: 'Real-Time Processing', icon: HiOutlineBolt },
      { name: 'JWT Auth', icon: SiJsonwebtokens },
      { name: 'Agile/Scrum', icon: HiOutlineShieldCheck },
    ],
  },
];

export const experience = {
  company: 'Digient Technologies Pvt Ltd',
  role: 'Junior Software Developer',
  period: '2023 – Present',
  projects: [
    {
      title: 'Multiplayer Poker Platform',
      description: 'Engineered backend systems for a high-traffic multiplayer poker platform supporting diverse game modes and real-time player interactions.',
      highlights: [
        'Developed Bomb Pot feature — a high-stakes, forced-bet poker variant',
        'Built backend for cash games and multi-round tournament systems',
        'Designed REST APIs for tournament lifecycle management',
        'Implemented real-time gameplay systems with WebSocket integration',
        'Architected anti-cheat integrity systems for fair play enforcement',
        'Scaled platform to support 500+ concurrent active players',
      ],
      tech: ['Java', 'Spring Boot', 'WebSocket', 'REST API', 'Redis', 'PostgreSQL'],
    },
    {
      title: 'OptiKPI Real-Time Data Monitoring',
      description: 'Built high-throughput streaming data pipelines for real-time business analytics and operational monitoring.',
      highlights: [
        'Engineered Apache Flink streaming pipelines for continuous data processing',
        'Achieved throughput of 50,000+ events per second',
        'Maintained sub-100ms end-to-end processing latency',
        'Integrated Apache Kafka as the event backbone for reliable message delivery',
        'Developed SDK for seamless client-side event ingestion',
        'Led operator migration from legacy to modern Flink operators',
        'Configured Grafana dashboards and alerting for system observability',
      ],
      tech: ['Apache Flink', 'Apache Kafka', 'BigQuery', 'Grafana', 'Java', 'Elasticsearch'],
    },
  ],
};

export const projects = [
  {
    title: 'Poker Multiplayer Backend',
    description: 'High-performance backend system for real-time multiplayer poker with support for various game modes, tournaments, and anti-cheat mechanisms.',
    tech: ['Java', 'Spring Boot', 'WebSocket', 'Redis', 'PostgreSQL'],
    features: ['Real-time gameplay', 'Multi-round tournaments', 'Anti-cheat system', '500+ concurrent players'],
    architecture: 'Microservices with WebSocket layer for real-time communication and Redis for session management',
    github: '#',
    demo: '#',
    category: 'backend',
  },
  {
    title: 'OptiKPI Streaming Pipeline',
    description: 'Enterprise-grade real-time data streaming platform processing 50K+ events/sec with sub-100ms latency for business analytics.',
    tech: ['Apache Flink', 'Kafka', 'BigQuery', 'Grafana', 'Java'],
    features: ['50K+ events/sec', 'Sub-100ms latency', 'Real-time dashboards', 'Custom SDK'],
    architecture: 'Kafka → Flink → BigQuery pipeline with Grafana observability layer',
    github: '#',
    demo: '#',
    category: 'streaming',
  },
  {
    title: 'Kafka-Flink Real-Time Analytics',
    description: 'End-to-end real-time analytics engine using Kafka for event ingestion and Flink for stream processing and aggregation.',
    tech: ['Apache Kafka', 'Apache Flink', 'Java', 'Elasticsearch'],
    features: ['Stream processing', 'Windowed aggregations', 'Event-time processing', 'Exactly-once semantics'],
    architecture: 'Kafka topics → Flink stream jobs → Elasticsearch indices with monitoring',
    github: '#',
    demo: '#',
    category: 'streaming',
  },
  {
    title: 'Tournament Management APIs',
    description: 'RESTful API suite for managing poker tournament lifecycles including registration, seating, blind structures, and payouts.',
    tech: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'Swagger'],
    features: ['Tournament CRUD', 'Auto-seating', 'Blind schedules', 'Payout calculation'],
    architecture: 'Layered architecture with repository pattern and DTOs for clean API contracts',
    github: '#',
    demo: '#',
    category: 'backend',
  },
];

export const architectures = [
  {
    title: 'Kafka → Flink → BigQuery Pipeline',
    description: 'High-throughput streaming architecture for real-time data analytics',
    nodes: [
      { id: 'source', label: 'Event Sources', sub: 'SDK / APIs', icon: 'source' },
      { id: 'kafka', label: 'Apache Kafka', sub: 'Event Broker', icon: 'kafka' },
      { id: 'flink', label: 'Apache Flink', sub: 'Stream Processing', icon: 'flink' },
      { id: 'bigquery', label: 'BigQuery', sub: 'Data Warehouse', icon: 'bigquery' },
      { id: 'grafana', label: 'Grafana', sub: 'Monitoring', icon: 'grafana' },
    ],
  },
  {
    title: 'Real-Time Poker System Architecture',
    description: 'Scalable multiplayer gaming backend architecture',
    nodes: [
      { id: 'client', label: 'Game Clients', sub: 'Web / Mobile', icon: 'client' },
      { id: 'gateway', label: 'API Gateway', sub: 'Load Balanced', icon: 'gateway' },
      { id: 'game', label: 'Game Engine', sub: 'Spring Boot', icon: 'engine' },
      { id: 'ws', label: 'WebSocket Server', sub: 'Real-Time', icon: 'ws' },
      { id: 'redis', label: 'Redis', sub: 'Session & Cache', icon: 'redis' },
      { id: 'db', label: 'PostgreSQL', sub: 'Persistence', icon: 'db' },
    ],
  },
];

export const certifications = [
  {
    title: 'Java Full Stack Development',
    issuer: 'Accourd Info Matric',
    icon: FaJava,
  },
];

export const education = [
  {
    degree: 'B.Com Computer Applications',
    institution: 'Govt Degree College Nagari',
    cgpa: '8.0',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Events/Sec Processed', value: 50000, suffix: '+' },
  { label: 'Concurrent Players', value: 500, suffix: '+' },
  { label: 'Latency (ms)', value: 100, prefix: '<' },
  { label: 'Year(s) Experience', value: 1, suffix: '+' },
];
