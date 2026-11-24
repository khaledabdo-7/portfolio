import {
  Server,
  Layers,
  Zap,
  Database,
  ShieldCheck,
  Container,
} from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: "Backend Architecture & API Development",
    icon: Server,
    description:
      "Designing and building high-throughput, maintainable RESTful & GraphQL APIs with Node.js, NestJS, and Express.js with clean domain boundaries and strict TypeScript typing.",
    features: [
      "NestJS Modular & Hexagonal Architecture",
      "Robust REST & GraphQL Schema Design",
      "DTO Validation & Error Handling Pipelines",
      "Asynchronous Event Processing",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Web Applications",
    icon: Layers,
    description:
      "End-to-end responsive web applications combining modern reactive frontends (React.js, Tailwind CSS) with robust, resilient backend microservices.",
    features: [
      "Full Lifecycle Development (Frontend & Backend)",
      "High-Performance State Management",
      "Responsive, Mobile-First UI/UX",
      "Seamless API & WebSocket Integration",
    ],
  },
  {
    id: 3,
    title: "Real-Time Systems & Event Streams",
    icon: Zap,
    description:
      "Architecting interactive real-time experiences including live chat, instant notifications, live feeds, and collaborative workspaces using WebSockets & Socket.io.",
    features: [
      "Socket.io & Native WebSockets",
      "Redis Pub/Sub Distributed Messaging",
      "Bi-directional Room & Channel State",
      "Automatic Reconnection & Fallback Handling",
    ],
  },
  {
    id: 4,
    title: "Database Design & Optimization",
    icon: Database,
    description:
      "Data modeling, query optimization, indexing strategies, and multi-tier caching architectures with MongoDB (Mongoose), MySQL (Sequelize), and Redis.",
    features: [
      "Relational & NoSQL Schema Engineering",
      "In-Memory Caching Strategies (Redis)",
      "Index Tuning & Query Execution Plan Optimization",
      "ACID Transactions & Data Integrity",
    ],
  },
  {
    id: 5,
    title: "API Security & Performance",
    icon: ShieldCheck,
    description:
      "Hardening applications against vulnerabilities through modern authentication patterns, token rotation, rate limiting, and OWASP security standards.",
    features: [
      "JWT Authentication with Refresh Token Rotation",
      "Role-Based Access Control (RBAC)",
      "Helmet, CORS Policies & Data Sanitization",
      "Sliding-Window Rate Limiting via Redis",
    ],
  },
  {
    id: 6,
    title: "Containerization & Deployment",
    icon: Container,
    description:
      "Dockerizing backend services and full-stack environments to ensure reproducible staging and seamless cloud deployment workflows.",
    features: [
      "Multi-stage Dockerfile Optimization",
      "Docker Compose for Multi-Service Local Stacks",
      "Environment Configuration & Secrets Management",
      "Cloud Readiness (AWS Core Services & Linux Hosting)",
    ],
  },
];
