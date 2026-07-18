export interface Skill {
  name: string;
  category: "Languages" | "Frameworks/Libraries" | "Version Control/Tools";
  iconName: string; // will be handled using a custom renderer or inline svg
  proficiency: number; // percentage or indicator
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imagePlaceholderGradient: string; // CSS gradient string for the card mockup background
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  iconType: "award" | "trophy" | "code" | "cert";
}
