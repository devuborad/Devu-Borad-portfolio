import { Skill, Experience, Project, Achievement } from "../types";

export const heroDetails = {
  name: "Devu Borad",
  title: "BE-2 Computer Science Student",
  university: "The Maharaja Sayajirao University of Baroda",
  tagline: "Full-Stack Developer | Problem Solver | Tech Enthusiast",
  bio: "A passionate 2nd-year Computer Science Engineering student focused on building performant, visually-arresting web applications. Constantly refining my skills in full-stack architecture, algorithm design, and UI/UX styling.",
  resumeUrl: "#", // placeholder
  githubUrl: "https://github.com/DevuBorad", // realistic placeholder
  linkedinUrl: "https://linkedin.com/in/devu-borad", // realistic placeholder
  email: "devuborad.edu@gmail.com", // realistic placeholder
};

export const skillsData: Skill[] = [
  // Languages
  { name: "C", category: "Languages", iconName: "C", proficiency: 85 },
  { name: "C++", category: "Languages", iconName: "Cplusplus", proficiency: 90 },
  { name: "Java", category: "Languages", iconName: "Java", proficiency: 80 },
  { name: "Python", category: "Languages", iconName: "Python", proficiency: 85 },
  { name: "JavaScript", category: "Languages", iconName: "JavaScript", proficiency: 88 },
  
  // Frameworks/Libraries
  { name: "React.js", category: "Frameworks/Libraries", iconName: "React", proficiency: 88 },
  { name: "Node.js", category: "Frameworks/Libraries", iconName: "Nodejs", proficiency: 80 },
  { name: "Express.js", category: "Frameworks/Libraries", iconName: "Express", proficiency: 82 },
  { name: "Tailwind CSS", category: "Frameworks/Libraries", iconName: "Tailwind", proficiency: 95 },
  { name: "Bootstrap", category: "Frameworks/Libraries", iconName: "Bootstrap", proficiency: 75 },

  // Version Control/Tools
  { name: "Git", category: "Version Control/Tools", iconName: "Git", proficiency: 85 },
  { name: "GitHub", category: "Version Control/Tools", iconName: "Github", proficiency: 90 },
  { name: "VS Code", category: "Version Control/Tools", iconName: "Vscode", proficiency: 95 },
  { name: "Postman", category: "Version Control/Tools", iconName: "Postman", proficiency: 80 }
];

export const experiencesData: Experience[] = [
  {
    role: "Club Member & Developer",
    organization: "Dev Infinity Club",
    location: "The Maharaja Sayajirao University of Baroda",
    duration: "2024 – Present",
    isCurrent: true,
    description: [
      "Collaborate with senior developers to build open-source university utility platforms.",
      "Participated and helped coordinate tech workshops, bootcamps, and intra-college hackathons.",
      "Contributed to building real-time collaboration websites and internal dashboards.",
      "Participate in weekly coding reviews, algorithmic sprints, and mentoring incoming juniors."
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "DevConnect — Club Collaboration Hub",
    description: "A centralized platform designed for the Dev Infinity Club. Enables active club members to organize technical workshops, post study resources, submit tasks, and review project contributions with a dark glassmorphic interface.",
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Local Storage"],
    githubUrl: "https://github.com/DevuBorad/dev-connect",
    demoUrl: "https://dev-connect-demo.example.com",
    imagePlaceholderGradient: "linear-gradient(135deg, #ef4444 0%, #7f1d1d 50%, #18181b 100%)"
  },
  {
    title: "AlgoVisualizer — Interactive Sandbox",
    description: "An educational algorithm sandbox that animates popular sorting processes (Bubble, Quick, Merge) and pathfinding algorithms (Dijkstra, A* Search) in real time. Features speed controls, custom wall generators, and runtime logs.",
    techStack: ["React.js", "Tailwind CSS", "motion", "Algorithms"],
    githubUrl: "https://github.com/DevuBorad/algo-visualizer",
    demoUrl: "https://algo-visualizer-demo.example.com",
    imagePlaceholderGradient: "linear-gradient(135deg, #f97316 0%, #b91c1c 50%, #09090b 100%)"
  },
  {
    title: "StoreSphere — E-Commerce Engine",
    description: "A high-performance storefront displaying customizable catalog sorting, multi-attribute filter mechanics, and reactive shopping-cart interactions. Modeled with high-contrast crimson accents and smooth page-transition physics.",
    techStack: ["React.js", "Lucide Icons", "Tailwind CSS", "Context API"],
    githubUrl: "https://github.com/DevuBorad/storesphere",
    demoUrl: "https://storesphere-demo.example.com",
    imagePlaceholderGradient: "linear-gradient(135deg, #b91c1c 0%, #450a0a 50%, #09090b 100%)"
  },
  {
    title: "PulseTask — Kanban Workspace",
    description: "A local-storage persistent workflow manager supporting smooth drag-and-drop mechanics. Helps engineering students maintain task swimlanes, logs, and pomodoro countdown integrations to power deep work.",
    techStack: ["React.js", "Tailwind CSS", "HTML5 Drag & Drop", "Web Audio API"],
    githubUrl: "https://github.com/DevuBorad/pulsetask",
    demoUrl: "https://pulsetask-demo.example.com",
    imagePlaceholderGradient: "linear-gradient(135deg, #ef4444 0%, #000000 100%)"
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Inducted into Dev Infinity Club",
    category: "Club Recruitment",
    description: "Secured a top-ranking position in the highly competitive annual recruitment drive of Dev Infinity, the premier computer science and coding club of MSU Baroda.",
    date: "Sep 2024",
    iconType: "code"
  },
  {
    id: "ach-2",
    title: "2nd Place — MSU HackSprints",
    category: "Hackathon",
    description: "Co-developed an automated hostel gate-pass system using RFID logging simulation and a responsive React administration panel within a 24-hour development window.",
    date: "Mar 2025",
    iconType: "award"
  },
  {
    id: "ach-3",
    title: "LeetCode Milestone (300+ Solved)",
    category: "Competitive Coding",
    description: "Successfully solved 300+ problems spanning dynamic programming, graph theory, and advanced array algorithms using C++ with a high success rate.",
    date: "Ongoing",
    iconType: "trophy"
  },
  {
    id: "ach-4",
    title: "Full-Stack Web Dev Specialization",
    category: "Professional Certification",
    description: "Completed an immersive curriculum verifying mastery over modern JavaScript/ES6+, single-page applications with React, backend routing via Express, and atomic styling with Tailwind CSS.",
    date: "Dec 2024",
    iconType: "cert"
  }
];
