import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
} from 'react-icons/si';

import {
  FaAws,
} from 'react-icons/fa6';

import {
  Database,
  Layout,
  Workflow,
  Layers,
  Cpu,
  ShieldCheck,
  Shield,
  Gauge,
  Network,
  RotateCw,
  Server,
  KeyRound,
} from 'lucide-react';

export const skillCategories = [
  {
    category: "Languages",
    description: "Core programming and query languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: Database, color: "#FCF1D0" },
    ],
  },
  {
    category: "Backend",
    description: "Scalable server-side architectures & runtimes",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express.js", icon: SiExpress, color: "#FCF1D0" },
    ],
  },
  {
    category: "Frontend",
    description: "Modern, reactive and accessible user interfaces",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Hooks", icon: RotateCw, color: "#61DAFB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Responsive UI", icon: Layout, color: "#FCF1D0" },
      { name: "REST/GraphQL Integration", icon: Network, color: "#E535AB" },
    ],
  },
  {
    category: "APIs & Patterns",
    description: "Communication protocols and system design patterns",
    skills: [
      { name: "REST APIs", icon: Server, color: "#60A5FA" },
      { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
      { name: "WebSockets / Socket.io", icon: SiSocketdotio, color: "#FCF1D0" },
      { name: "Dependency Injection", icon: Workflow, color: "#A78BFA" },
      { name: "MVC Architecture", icon: Layers, color: "#38BDF8" },
      { name: "OOP Principles", icon: Cpu, color: "#4ADE80" },
    ],
  },
  {
    category: "Databases",
    description: "NoSQL document stores, relational DBs, and in-memory caches",
    skills: [
      { name: "MongoDB (Mongoose)", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL (Sequelize)", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    category: "DevOps & Security",
    description: "Containerization, version control, and hardened defense",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git / GitHub", icon: SiGit, color: "#F05032" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#FCF1D0" },
      { name: "Bcrypt", icon: KeyRound, color: "#FBBF24" },
      { name: "Helmet", icon: Shield, color: "#34D399" },
      { name: "Rate Limiting", icon: Gauge, color: "#F87171" },
    ],
  },
  {
    category: "Learning Now",
    description: "Actively expanding cloud deployment and infrastructure capabilities",
    isLearning: true,
    skills: [
      {
        name: "AWS Fundamentals (Deployment & Core Services: EC2, S3, IAM)",
        icon: FaAws,
        color: "#FF9900",
      },
    ],
  },
];
