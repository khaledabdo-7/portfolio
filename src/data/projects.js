/**
 * Projects Data
 * 
 * Instructions for updating:
 * 1. image: Place your screenshots inside `public/projects/` and update the path (e.g. "/projects/my-screenshot.png")
 * 2. liveUrl: Paste your live deployment link (Vercel, Render, AWS, etc.)
 * 3. githubUrl: Paste your GitHub repository link
 * 4. tags: Array of technology strings
 */
export const projectsData = [
  {
    id: 1,
    title: "High-Concurrency E-Commerce & Order Engine",
    description:
      "Enterprise microservice architecture featuring distributed order processing, Redis caching layers, and transaction safety across high-volume traffic spikes.",
    image: "/projects/project1.svg",
    liveUrl: "#",
    githubUrl: "https://github.com/khaledabdo-7/e-commerce/tree/master/backend",
    tags: ["NestJS", "Node.js", "Redis", "MongoDB", "Docker", "TypeScript"],
    featured: true,
  },
  {
    id: 2,
    title: "Sphere — Realtime Social Network Platform",
    description:
      "Full-stack social media engine powered by Express 5.0 & TypeScript, distributed Socket.io + Upstash Redis for instant messaging and notifications, smart feed algorithms, Cloudinary media CDN, and a dual Dark/Light mode theme system.",
    image: "/projects/sphere.jpg",
    liveUrl: "http://localhost:5173",
    githubUrl: "https://github.com/khaledabdo-7/socialAppTS",
    tags: ["TypeScript", "Express 5.0", "Socket.io", "Redis", "MongoDB", "React", "TailwindCSS"],
    stackOverview: [
      { label: "TypeScript Engine", value: "Express 5.0" },
      { label: "Realtime Layer", value: "Socket.io + Redis" },
      { label: "Media Storage", value: "Cloudinary CDN" },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Saraha — Anonymous Messaging & Feedback Platform",
    description:
      "Full-stack secret messaging platform with end-to-end anonymity, JWT token rotation, Cloudinary uploads, social story card export, and interactive animated UI.",
    image: "/projects/saraha.png",
    liveUrl: "https://saraha-frontend-delta.vercel.app",
    githubUrl: "https://github.com/khaledabdo-7/saraha-app",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Vercel"],
    featured: true,
  },
];
