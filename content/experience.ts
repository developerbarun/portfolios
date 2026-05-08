export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location?: string;
  type: "full-time" | "internship";
  startDate: string;
  endDate: string;
  isCurrentRole: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "vw-india",
    role: "Software Engineer",
    company: "Volkswagen India",
    type: "full-time",
    startDate: "Nov 2025",
    endDate: "Present",
    isCurrentRole: true,
    description:
      "Java Full Stack Developer building scalable enterprise applications",
    highlights: [
      "Developing scalable enterprise applications using Java Spring Boot, Node.js, and TypeScript",
      "Gaining expertise in modern databases (Neo4j, Redis, MongoDB, Cassandra, SQL) and containerization (Docker, Kubernetes)",
      "Contributing to backend services with Hibernate ORM and implementing RESTful APIs for automotive digital solutions",
      "Working on distributed systems and optimizing application performance",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Node.js",
      "TypeScript",
      "Neo4j",
      "Redis",
      "MongoDB",
      "Cassandra",
      "SQL",
      "Docker",
      "Kubernetes",
      "Hibernate",
      "RESTful APIs",
    ],
  },
  {
    id: "icici-prudential",
    role: "Data Science Intern",
    company: "ICICI Prudential",
    type: "internship",
    startDate: "June 2024",
    endDate: "July 2024",
    isCurrentRole: false,
    description:
      "Built machine learning pipeline for loan prediction and risk assessment",
    highlights: [
      "Built a loan prediction pipeline using machine learning models to assess eligibility and risk patterns",
      "Conducted data extraction, preprocessing, and feature engineering using SQL and Python",
      "Evaluated model performance and derived actionable business insights for decision support",
      "Collaborated with cross-functional teams to ensure solution alignment with business requirements",
    ],
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Feature Engineering",
      "Data Analysis",
      "Pandas",
      "Scikit-learn",
    ],
  },
  {
    id: "hal-internship",
    role: "Software Engineer Intern",
    company: "Hindustan Aeronautics Limited",
    type: "internship",
    startDate: "June 2023",
    endDate: "July 2023",
    isCurrentRole: false,
    description:
      "Developed audio denoising and speech-to-text processing system",
    highlights: [
      "Developed a Python-based audio denoising and speech-to-text prototype for pilot communication data",
      "Applied NLP and Transformer-based models using Pandas and NumPy to process noisy audio signals",
      "Worked within multi-team engineering workflows with exposure to distributed systems",
      "Optimized signal processing pipeline for real-time audio analysis",
    ],
    technologies: [
      "Python",
      "NLP",
      "Transformer Models",
      "Audio Processing",
      "Pandas",
      "NumPy",
      "Speech-to-Text",
      "Deep Learning",
    ],
  },
];
