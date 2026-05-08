export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  categories: string[];
  technologies: string[];
  github?: string;
  liveLink?: string;
  image?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  results?: string;
  keyTakeaways?: string[];
}

export const projects: Project[] = [
  {
    id: "ai-career-path",
    title: "AI Career Path",
    shortDescription:
      "AI-driven recommendation system suggesting learning paths, courses, and job roles based on user skills.",
    description: "Personalized Career Guidance App using machine learning",
    categories: ["AI/ML", "Full Stack"],
    technologies: [
      "Python",
      "Machine Learning",
      "Node.js",
      "React",
      "TypeScript",
    ],
    github: "https://github.com/developerbarun/ai-career-path",
    image: "/images/projects/ai-career-path.jpg",
    problem:
      "Students and career changers struggle to identify the right learning path for their skill level and goals.",
    solution:
      "Built an AI-driven system that analyzes user skills and recommends personalized learning paths, courses, and roles using ML-based personalization logic.",
    features: [
      "Skill assessment questionnaire",
      "AI-powered course recommendations",
      "Personalized learning path generation",
      "Job role suggestions",
      "Progress tracking",
    ],
    results:
      "Successfully created a scalable recommendation system serving personalized guidance to users.",
    keyTakeaways: [
      "Implemented ML-based personalization algorithms",
      "Designed scalable backend APIs",
      "Created intuitive skill assessment UI",
    ],
  },
  {
    id: "brainly",
    title: "Brainly – Digital Knowledge Organizer",
    shortDescription:
      "Full-stack app to save and organize links, videos, and articles as a personalized second brain for digital content.",
    description:
      "A personal knowledge management system for organizing digital content",
    categories: ["Full Stack"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/developerbarun/brainly",
    liveLink: "https://brainly.barungupta.vercel.app",
    image: "/images/projects/brainly.jpg",
    problem:
      "Knowledge workers struggle to organize and retrieve the vast amount of digital content they consume daily.",
    solution:
      "Built a full-stack web application allowing users to save, tag, and organize links, videos, and articles in a structured, searchable manner.",
    features: [
      "Save links, videos, and articles",
      "Tagging and categorization system",
      "Full-text search capability",
      "Dark mode interface",
      "Responsive design",
      "Share collections with others",
    ],
    results:
      "Launched a production-ready application helping users streamline content consumption and improve information recall.",
    keyTakeaways: [
      "Built a complete full-stack application from scratch",
      "Implemented complex MongoDB queries for search",
      "Created responsive UI with TypeScript",
    ],
  },
  {
    id: "collab-canvas",
    title: "CollabCanvas – Real-Time Collaborative Whiteboard",
    shortDescription:
      "Real-time collaborative whiteboard enabling multiple users to draw, brainstorm, and ideate together visually.",
    description:
      "A distributed whiteboard application for real-time collaboration",
    categories: ["Real-Time", "Full Stack"],
    technologies: ["Next.js", "Java", "Spring Boot", "WebSockets", "Turborepo"],
    github: "https://github.com/developerbarun/collabcanvas",
    image: "/images/projects/collabcanvas.jpg",
    problem:
      "Remote teams lack real-time collaboration tools for synchronous brainstorming and visual ideation.",
    solution:
      "Created a real-time collaborative whiteboard using WebSockets for live synchronization, enabling multiple users to draw and ideate together seamlessly.",
    features: [
      "Real-time drawing synchronization",
      "Multiple user collaboration",
      "Shape and text tools",
      "Color palette and brush sizes",
      "Live cursor tracking",
      "Undo/redo functionality",
      "Session persistence",
    ],
    results:
      "Delivered a production-ready collaborative tool with real-time synchronization across multiple clients.",
    keyTakeaways: [
      "Mastered WebSocket implementation",
      "Designed scalable backend with Java Spring Boot",
      "Managed monorepo with Turborepo",
      "Implemented real-time state synchronization",
    ],
  },
];
