export interface ProjectItem {
  id: string;
  featured: boolean;
  category: "Fullstack SaaS" | "Enterprise Systems" | "Edge PWA" | "Systems & DSA" | "Technical Shorts";
  title: string;
  tag: string;
  badge?: string;
  desc: string;
  highlights: string[];
  techStack: string[];
  metrics: string;
  demoUrl: string;
  githubUrl?: string;
}

export const personalInfo = {
  name: "Abdallah Raafat",
  brand: "CodeNest Dev",
  title: "Full-Stack Developer & Computer Science Scholar",
  location: "Cairo, Egypt",
  email: "abdallhr649@gmail.com",
  phone: "+20 1096881069",
  bio: "Full-Stack Engineer with 3+ years of experience building scalable, high-performance web applications with Next.js, TypeScript, and modern Cloudflare/Node.js backends. Driven by a deep computer science foundation from Cairo University and creator of CodeNest Dev.",
  stats: [
    { label: "Experience", value: "3+ Years" },
    { label: "Academic Foundation", value: "Cairo Univ CS" },
    { label: "Production Apps", value: "3+ Live SaaS" },
  ],
  education: {
    degree: "Higher Diploma in Computer Science",
    institution: "Cairo University",
    timeline: "2025 - Present (Final Semester)",
    focus: "System Design, Software Documentation, UML, Data Structures, OOP & Software Development",
  },
  socials: {
    youtube: "https://www.youtube.com/@CodeNestDev/shorts",
    tiktok: "https://www.tiktok.com/@abdallah.rafat51",
    instagram: "https://www.instagram.com/codenestdev26",
    github: "https://github.com/Abdall10",
    linkedin: "https://www.linkedin.com/in/abdallah-rafat-7aa0a7285",
  },
};;

export const skills = [
  { name: "Full-Stack (Next.js 16, React 19, TypeScript)", level: 94, color: "from-cyan-500 to-blue-500" },
  { name: "C++ Systems, Memory Internals & DSA", level: 92, color: "from-blue-600 to-indigo-600" },
  { name: "Edge & Cloudflare (Workers, AI, D1 SQL, R2 Bucket)", level: 90, color: "from-orange-500 to-amber-500" },
  { name: "Databases & ORMs (PostgreSQL, Neon, Drizzle, Prisma)", level: 90, color: "from-emerald-500 to-teal-400" },
  { name: "Authentication & Payments (Better Auth, Clerk, Paddle)", level: 88, color: "from-purple-500 to-indigo-500" },
  { name: "PWA, Service Workers & Real Web Push", level: 87, color: "from-teal-400 to-cyan-500" },
];

export const projects: ProjectItem[] = [
  {
    id: "01",
    featured: true,
    category: "Fullstack SaaS",
    title: "AI Image Studio — Version 1.0",
    tag: "Next.js 16 • Workers AI • R2 Storage",
    badge: "AI SaaS Platform",
    desc: "End-to-end AI-powered generative imaging SaaS. Features text-to-image AI pipelines, tokenized credit transactions, cloud object storage, and secure authentication.",
    highlights: [
      "Workers AI generative inference with sub-second orchestration",
      "S3-compatible persistent cloud storage with Cloudflare R2",
      "Robust transactional credits accounting system & Paddle payments",
      "Better Auth multi-provider authentication (Google OAuth + Email/Pass)",
      "Type-safe edge schema modeling using Drizzle ORM over Cloudflare D1"
    ],
    techStack: ["Next.js 16", "Cloudflare Workers AI", "Cloudflare R2", "D1 SQL", "Drizzle ORM", "Better Auth", "Paddle"],
    metrics: "Production V1.0 Live",
    demoUrl: "https://ai-image-studio.aiimagestudio.workers.dev",
    githubUrl: "https://github.com/Abdall10",
  },
  {
    id: "02",
    featured: true,
    category: "Enterprise Systems",
    title: "ClinicFlow — Clinic Management System",
    tag: "PostgreSQL • Prisma • RBAC",
    badge: "Healthcare CMS",
    desc: "Centralized healthcare management platform orchestrating clinical appointments, multi-role medical workflows, automated billing, and live administrative analytics.",
    highlights: [
      "Role-Based Access Control (Admin, Doctor, Staff permissions)",
      "End-to-end appointment scheduling, medical charting & record logging",
      "Automated financial invoices, payments reconciliation & status alerts",
      "Real-time notifications engine and high-level statistical dashboards",
      "Serverless PostgreSQL architecture powered by Neon and Prisma ORM"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Neon DB", "Tailwind CSS", "JWT Auth"],
    metrics: "Live Enterprise Platform",
    demoUrl: "https://clinic-flow-3fle-one.vercel.app",
    githubUrl: "https://github.com/Abdall10",
  },
  {
    id: "03",
    featured: true,
    category: "Edge PWA",
    title: "Islamic Companion — PWA Platform",
    tag: "Cloudflare Workers • Web Push • D1",
    badge: "Distributed PWA",
    desc: "Modern progressive web application featuring scheduled background prayer notifications, location-based prayer calculation engine, Qibla compass, Adhkar, and offline-first PWA caching.",
    highlights: [
      "Scheduled cron processing on Cloudflare Workers for prayer delivery",
      "Native Web Push notifications with duplicate-dispatch defense",
      "Edge-persisted user preferences via Clerk Auth and Cloudflare D1",
      "Offline-first Service Worker lifecycle with PWA installability"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "Clerk", "Web Push", "PWA"],
    metrics: "Production Live PWA",
    demoUrl: "https://islamic-companion.aiimagestudio.workers.dev/",
    githubUrl: "https://github.com/Abdall10",
  },
  {
    id: "04",
    featured: true,
    category: "Systems & DSA",
    title: "Data Structures & Algorithms in C++",
    tag: "C++ • Memory Models • Modular Headers",
    badge: "Core CS Repo",
    desc: "Production-grade implementation of fundamental data structures from scratch in modern C++, demonstrating clean header separation (.h / .cpp), pointer manipulation, and memory management.",
    highlights: [
      "Custom memory management: Stack, Queue, and LinkedListQueue implementations",
      "Strict separation of interface declarations (.h) and implementations (.cpp)",
      "Object-oriented class structures (classList, student models, driver binaries)",
      "Manual dynamic memory allocation and resource destruction routines"
    ],
    techStack: ["C++", "OOP", "Pointers & References", "Data Structures", "Memory Management"],
    metrics: "Verified Open-Source",
    demoUrl: "https://github.com/Abdall10/data-structures-and-algorithms-in-c-",
    githubUrl: "https://github.com/Abdall10/data-structures-and-algorithms-in-c-",
  },
  {
    id: "05",
    featured: true,
    category: "Systems & DSA",
    title: "C++ OOP & Operator Overloading Mechanics",
    tag: "C++ • OOP Paradigms • Binary Overloading",
    badge: "Systems Architecture",
    desc: "In-depth engineering repository exploring Object-Oriented Programming mechanics in C++, multiple constructor overloading patterns, and unary/binary operator overloading.",
    highlights: [
      "Comprehensive operator overloading (postfix vs prefix, multiplication, custom arithmetic)",
      "Constructor chaining & deep object initialization life cycles",
      "Under-the-hood temporary object handling and stack-allocated instances",
      "Compiled executables verifying custom type algebraic evaluation"
    ],
    techStack: ["C++", "OOP", "Operator Overloading", "Constructors", "Low-Level Mechanics"],
    metrics: "100% C++ Repo",
    demoUrl: "https://github.com/Abdall10/operator-overloading-c-",
    githubUrl: "https://github.com/Abdall10/operator-overloading-c-",
  },
 {
    id: "06",
    featured: false,
    category: "Technical Shorts",
    title: "Increment Mechanics & Operator Precedence",
    tag: "Systems Fundamentals • C++",
    badge: "Under-The-Hood #01",
    desc: "Bite-sized breakdown dissecting post-increment vs pre-increment evaluation orders, register states, and compiler evaluation rules in under 30 seconds.",
    highlights: [
      "Core language mechanics & evaluation order",
      "Visual memory step trace of compiler expressions",
      "Foundation for low-level systems & compiler behavior"
    ],
    techStack: ["C++", "Compilers", "Memory Registers", "DSA"],
    metrics: "Watch Breakdown",
    demoUrl: "https://www.youtube.com/@CodeNestDev/shorts",
    githubUrl: "https://github.com/Abdall10/operator-overloading-c-",
  },
  {
    id: "07",
    featured: false,
    category: "Technical Shorts",
    title: "Pass-by-Value vs Reference Memory Traps",
    tag: "Memory Management • Systems",
    badge: "Memory Deep-Dive #02",
    desc: "Visual stack frame walkthrough illustrating why mutating pass-by-value copies fails across modern languages without reference semantics.",
    highlights: [
      "Stack memory frame allocation & pointer mechanics",
      "Universal concept: C++, Go, and JS object references",
      "Avoiding silent memory duplication and logic bugs"
    ],
    techStack: ["C++", "Memory Allocation", "Stack Frames", "Pointers"],
    metrics: "Watch Breakdown",
    demoUrl: "https://www.youtube.com/@CodeNestDev/shorts",
    githubUrl: "https://github.com/Abdall10/data-structures-and-algorithms-in-c-",
  },
  {
    id: "08",
    featured: false,
    category: "Technical Shorts",
    title: "JavaScript & TypeScript Gotchas Under The Hood",
    tag: "Modern Web & Logic • JS/TS",
    badge: "Language Gotchas #03",
    desc: "High-retention technical breakdown covering runtime coercion, closures, and the event loop mechanics that catch developers off guard.",
    highlights: [
      "Type coercion mechanics & truthy/falsy pitfalls",
      "Call stack & Microtask queue execution order",
      "Essential gotchas for technical interviews"
    ],
    techStack: ["TypeScript", "JavaScript", "Event Loop", "V8 Engine"],
    metrics: "Watch Breakdown",
    demoUrl: "https://www.youtube.com/@CodeNestDev/shorts",
  },
];