import profileImg from '../assets/profile.jpeg';

export const personalData = {
  name: "VITTHAL KOKATE",
  title: "Java Full Stack Engineer",
  subtitles: [
    "Java Full Stack Engineer",
    "Backend & Microservices Developer",
    "Fintech & Security Specialist",
    "Cloud & Distributed Systems Enthusiast"
  ],
  tagline: "Building secure, scalable, and resilient backend systems with modern cloud technologies.",
  summary: "Full Stack Java Developer with hands-on, project-driven experience building secure, scalable microservices and automation platforms across Fintech and MarTech domains. Proficient in Java, Spring Boot, Spring Security, and REST APIs, with production-grade deployments leveraging RabbitMQ, Redis, and PostgreSQL. Independently designed and built Python (FastAPI) microservices integrated with Java applications, alongside Resilience4j patterns (circuit breaker, rate limiting, retry, bulkhead), AWS S3, Linux administration, and Selenium-based social media automation with advanced multithreading.",
  contact: {
    location: "Pune, Maharashtra, India",
    email: "kokatev73@gmail.com",
    phone: "+91 8530506649",
    linkedin: "www.linkedin.com/in/vitthal-kokate-629322278",
    github: "https://github.com/vitthalkokate",
    resumePdf: "/Vitthal_Kokate_CV.pdf",
    profileImg: profileImg
  }
};

export const techStoryNodes = [
  {
    id: "java",
    name: "JAVA",
    subtitle: "Core Backend Language",
    category: "Languages",
    iconName: "Code2",
    color: "#f89820",
    glowColor: "#ff9d00",
    desc: "Core OOP foundation, Java 8/17 streams, concurrency, multithreading, and memory-efficient backend service engineering.",
    position: [0, 0, 0],
    details: {
      experience: "2+ Years Hands-On Experience",
      projects: ["OmnisPay Payment Gateway", "Social Voice Automation Platform", "Student Performance System"],
      whyUse: "Provides robust type safety, platform independence, high performance, and massive ecosystem support for mission-critical enterprise systems."
    }
  },
  {
    id: "springboot",
    name: "SPRING BOOT",
    subtitle: "Microservices Framework",
    category: "Frameworks",
    iconName: "Cpu",
    color: "#6db33f",
    glowColor: "#00ff88",
    desc: "Production-grade RESTful APIs, dependency injection, auto-configuration, and resilient microservice architectures using Resilience4j.",
    position: [1.5, -0.5, -25],
    details: {
      experience: "Production Deployments",
      projects: ["OmnisPay", "Social Voice", "Student Performance System"],
      whyUse: "Eliminates boilerplate configuration, accelerates REST API development, and seamlessly integrates with Spring ecosystem modules."
    }
  },
  {
    id: "springsecurity",
    name: "SPRING SECURITY",
    subtitle: "Authentication & Authorization",
    category: "Security",
    iconName: "ShieldCheck",
    color: "#00ff88",
    glowColor: "#00f0ff",
    desc: "Stateless JWT authentication, Role-Based Access Control (RBAC), domain-based access separation, AES/RSA hybrid encryption, and HMAC checkout security.",
    position: [-1.5, 0.5, -50],
    details: {
      experience: "Security Hardened Systems",
      projects: ["OmnisPay (Hybrid AES/RSA & VAPT Remediation)", "Student Performance System (RBAC & JWT)"],
      whyUse: "Essential for securing endpoints against unauthorized access, API tampering, and preventing critical security vulnerabilities (VAPT audits)."
    }
  },
  {
    id: "react",
    name: "REACT",
    subtitle: "Frontend Development",
    category: "Frontend",
    iconName: "Atom",
    color: "#61dafb",
    glowColor: "#00d8ff",
    desc: "Modern component-driven UI, hooks architecture, interactive dashboards, and real-time performance monitoring interfaces.",
    position: [1.8, -0.8, -75],
    details: {
      experience: "Full Stack Integration",
      projects: ["Student Performance Dashboard", "Marine Item Management System", "Interactive Portfolio"],
      whyUse: "Offers fast virtual DOM rendering, modular UI architecture, and great developer experience for complex client-side applications."
    }
  },
  {
    id: "redux",
    name: "REDUX",
    subtitle: "State Management",
    category: "Frontend",
    iconName: "Layers",
    color: "#764abc",
    glowColor: "#b066ff",
    desc: "Predictable centralized state store for complex administrative portals, real-time analytics tracking, and seamless data flow.",
    position: [-1.8, 0.8, -100],
    details: {
      experience: "Enterprise Admin Portals",
      projects: ["Student Performance Management Analytics"],
      whyUse: "Ensures single source of truth for global application state, simplifying debugging and state synchronization across complex UI trees."
    }
  },
  {
    id: "threejs",
    name: "THREE.JS",
    subtitle: "3D Web Experiences",
    category: "Graphics & UI",
    iconName: "Box",
    color: "#ffffff",
    glowColor: "#00f0ff",
    desc: "WebGL 3D graphics, procedural mesh creation, custom shader effects, lighting dynamics, and immersive scroll-driven web experiences.",
    position: [2.0, -0.4, -125],
    details: {
      experience: "Advanced Interactive Web Apps",
      projects: ["3D Interactive Engineering Universe Portfolio"],
      whyUse: "Transforms static portfolio websites into unforgettable interactive storytelling experiences that engage users visually."
    }
  },
  {
    id: "aws",
    name: "AWS",
    subtitle: "Cloud Infrastructure",
    category: "Cloud & DevOps",
    iconName: "Cloud",
    color: "#ff9900",
    glowColor: "#ffaa00",
    desc: "Cloud infrastructure management, AWS S3 low-latency object storage/retrieval for media attachments, EC2 instance hosting, and IAM security controls.",
    position: [-2.0, 0.4, -150],
    details: {
      experience: "Production Cloud Storage & Hosting",
      projects: ["Social Voice Social Media Platform (S3 Attachments)"],
      whyUse: "Provides unmatched scalability, security, high availability, and global low-latency file storage for automated media operations."
    }
  },
  {
    id: "docker",
    name: "DOCKER",
    subtitle: "Containerization",
    category: "DevOps",
    iconName: "Container",
    color: "#2496ed",
    glowColor: "#00aeff",
    desc: "Containerizing application JAR files, multi-stage Docker builds, environment parity between dev and production, and release deployment pipelines.",
    position: [1.6, -0.6, -175],
    details: {
      experience: "Containerized Releases",
      projects: ["OmnisPay Platform", "Java + Python Microservices Deployment"],
      whyUse: "Ensures 'build once, run anywhere' consistency, isolates environment dependencies, and simplifies microservices orchestration."
    }
  },
  {
    id: "linux",
    name: "LINUX",
    subtitle: "Production Servers",
    category: "Infrastructure",
    iconName: "Terminal",
    color: "#fcc624",
    glowColor: "#ffea00",
    desc: "Linux server administration, bash scripting, process management, log analysis (SLF4J/Logback), and automated deployment execution.",
    position: [-1.6, 0.6, -200],
    details: {
      experience: "System Administration & Deployment",
      projects: ["mPHATEK Production Deployment Infrastructure"],
      whyUse: "The industry standard operating system for high-performance backend servers, cloud instances, and microservice containers."
    }
  },
  {
    id: "postgresql",
    name: "POSTGRESQL",
    subtitle: "Relational Database",
    category: "Databases",
    iconName: "Database",
    color: "#336791",
    glowColor: "#00a6ff",
    desc: "Production relational database management, schema design, complex query optimization, ACID compliance, and Hibernate JPA ORM integration.",
    position: [1.9, -0.5, -225],
    details: {
      experience: "Production Database Management",
      projects: ["OmnisPay Payment Gateway", "Student Performance Management System"],
      whyUse: "Provides robust data integrity, advanced JSON processing, reliable transaction handling, and exceptional scaling capability."
    }
  },
  {
    id: "redis",
    name: "REDIS",
    subtitle: "Caching & Performance",
    category: "Messaging & Cache",
    iconName: "Zap",
    color: "#dc382d",
    glowColor: "#ff3b30",
    desc: "In-memory caching with scheduled eviction policies, token validation storage, domain-based access separation, and database workload reduction.",
    position: [-1.9, 0.5, -250],
    details: {
      experience: "Sub-Millisecond Query Acceleration",
      projects: ["OmnisPay Access Separation & User Caching"],
      whyUse: "Eliminates redundant database queries, speeds up authentication token checks, and maintains ultra-fast API response times."
    }
  },
  {
    id: "rabbitmq",
    name: "RABBITMQ",
    subtitle: "Message Queue & Async Processing",
    category: "Messaging & Cache",
    iconName: "MessageSquare",
    color: "#ff6600",
    glowColor: "#ff8800",
    desc: "Asynchronous invoice processing (reducing response times by up to 40%) and VAPT device-fingerprint invalidation consumers.",
    position: [1.7, -0.7, -275],
    details: {
      experience: "Asynchronous Microservices Communication",
      projects: ["OmnisPay Asynchronous Invoicing", "Device ID Invalidation Consumer"],
      whyUse: "Decouples heavy background tasks from synchronous HTTP request threads, preventing API timeouts and ensuring message delivery."
    }
  },
  {
    id: "kafka",
    name: "APACHE KAFKA",
    subtitle: "Distributed Streaming",
    category: "Messaging & Cache",
    iconName: "Activity",
    color: "#00f0ff",
    glowColor: "#00ffaa",
    desc: "High-throughput distributed event log, pub/sub messaging patterns, real-time telemetry streaming, and fault-tolerant log partitions.",
    position: [0, 0, -300],
    details: {
      experience: "Distributed Event-Driven Architecture",
      projects: ["OmnisPay Real-Time Telemetry & Event Streams"],
      whyUse: "Handles millions of events per second with high durability and low latency for event-driven backend systems."
    }
  }
];

export const experienceData = [
  {
    role: "Software Engineer",
    company: "mPHATEK Systems Pvt Ltd",
    period: "Aug 2025 – Present",
    location: "Pune, India",
    type: "Full-Time",
    description: "Designing and engineering enterprise Fintech payment infrastructure and MarTech automation platforms using Java, Spring Boot, Microservices, and Cloud storage.",
    projects: [
      {
        name: "OmnisPay – Live Fintech Payment Gateway Platform",
        category: "Fintech / Payment Infrastructure",
        highlights: [
          "Payment Gateway Integration: Contributed to Payment Orchestrator architecture centralizing routing across payment gateways; integrated Tabby payment gateway with complete transaction lifecycle and webhook handling.",
          "Hybrid Encryption Architecture: Designed and implemented hybrid AES & RSA encryption securing client/frontend communication, improving overall security posture by 35%.",
          "HMAC Security: Implemented HMAC-based security for guest checkout payment link generation.",
          "Asynchronous Invoicing (RabbitMQ): Built async invoice generation system with RabbitMQ, reducing payment link generation time by up to 40% for users opting out of invoices.",
          "VAPT Vulnerability Remediation: Independently resolved VAPT-flagged device-fingerprint authentication vulnerability via RabbitMQ consumer invalidating previous user encrypted device IDs, eliminating cross-user activity leaks.",
          "Domain-Based Access Separation: Implemented domain access control (user vs admin portals) using JWT filter logic backed by Redis caching with scheduled eviction.",
          "Resilient REST APIs: Developed 30+ production-grade REST APIs using Java, Spring Boot, and Resilience4j (circuit breaker, rate limiter, retry)."
        ]
      },
      {
        name: "Social Voice – Social Media Automation Platform",
        category: "MarTech / Multithreaded Automation",
        highlights: [
          "Internal Automation Platform: Built social media bot platform (Instagram, Facebook, Twitter) eliminating manual posting efforts.",
          "Multithreaded Execution Engine: Engineered engine partitioning 50 bot accounts into configurable blocks (5 accounts/block) executed concurrently for max throughput.",
          "Selenium Automation: Built Java Selenium automation for Chrome browser login and realistic human activity simulation.",
          "AWS S3 Integration: Integrated S3 object storage for low-latency media upload/retrieval in automated posts.",
          "Polyglot Microservices: Built secure inter-service communication between Java and Python (FastAPI) microservices with request validation and retry mechanisms."
        ]
      }
    ]
  },
  {
    role: "Full Stack Java Developer (Intern)",
    company: "IKSC Knowledge Bridge Pvt. Ltd",
    period: "March 2025 – Aug 2025",
    location: "Pune, India",
    type: "Internship",
    description: "Built scalable academic management solutions and RESTful backend architectures using Java, Spring Boot, Spring Security, and React.",
    projects: [
      {
        name: "Student Performance Management System",
        category: "EdTech / Academic Management",
        highlights: [
          "Automated Evaluation Logic: Designed system automating grading & analytics, reducing manual processing time by 50%.",
          "Spring Boot & JPA Backend: Built high-performance REST APIs using Java, Spring Boot, and Hibernate JPA.",
          "Spring Security + JWT & RBAC: Implemented stateless registration/login with JWT token issuance, validation, and Role-Based Access Control (RBAC).",
          "React & Redux Dashboards: Built responsive analytics dashboards for real-time performance tracking and admin monitoring."
        ]
      }
    ]
  },
  {
    role: "Software Developer (Intern)",
    company: "DesignTech Systems Pvt Ltd",
    period: "Jun 2024 – Aug 2024",
    location: "Pune, India",
    type: "Internship",
    description: "Developed frontend user interfaces, resolved cross-browser UI issues, and collaborated with core engineering teams.",
    projects: [
      {
        name: "Marine Item Management System",
        category: "Inventory & Management System",
        highlights: [
          "Responsive Web UI: Developed accessible UI interfaces using HTML, CSS, JavaScript.",
          "UI Debugging & QA: Resolved cross-device display anomalies to guarantee consistent usability."
        ]
      }
    ]
  }
];

export const projectsData = [
  {
    id: "omnispay",
    title: "OmnisPay - Fintech Payment Gateway Platform",
    tag: "Live Production Platform",
    domain: "Fintech & Security",
    summary: "Production payment orchestrator routing transaction flows across multiple payment gateways (Tabby, Guest Checkout HMAC) with hybrid encryption, async invoice processing via RabbitMQ, and VAPT security fixes.",
    image: "/profile.png",
    architecture: "Microservices Architecture (Java, Spring Boot, Spring Security, Redis, RabbitMQ, PostgreSQL, Docker)",
    securityFeatures: [
      "Hybrid AES & RSA encryption (+35% security posture)",
      "HMAC Guest Checkout validation flow",
      "VAPT Device Fingerprint invalidation consumer mechanism via RabbitMQ",
      "Domain-based access separation with Redis cached JWT filtering",
      "Resilience4j Circuit Breakers & Rate Limiters"
    ],
    techStack: ["Java 17", "Spring Boot", "Spring Security", "RabbitMQ", "Redis", "PostgreSQL", "Resilience4j", "Docker", "AES/RSA"],
    metrics: [
      { label: "Security Boost", value: "+35%" },
      { label: "Latency Reduction", value: "40%" },
      { label: "REST APIs Built", value: "30+" }
    ],
    github: "https://github.com/vitthalkokate",
    liveDemo: "#"
  },
  {
    id: "socialvoice",
    title: "Social Voice - Multithreaded Automation Platform",
    tag: "Automation Engine",
    domain: "MarTech & Polyglot Microservices",
    summary: "Internal automation platform driving concurrent Instagram, Facebook, and Twitter bot accounts with custom multithreaded partition blocks, Selenium browser control, and Python (FastAPI) microservice bridges.",
    image: "/profile.png",
    architecture: "Java Spring Boot + Python (FastAPI) + Java Selenium + AWS S3",
    securityFeatures: [
      "Inter-service HMAC signature validation",
      "Robust retry & bulkhead mechanisms",
      "AWS S3 IAM secured media access"
    ],
    techStack: ["Java 17", "Spring Boot", "FastAPI (Python)", "Java Selenium", "AWS S3", "Multithreading", "REST APIs"],
    metrics: [
      { label: "Manual Effort Saved", value: "100%" },
      { label: "Concurrent Bots", value: "50+" },
      { label: "Block Execution", value: "5 per Thread" }
    ],
    github: "https://github.com/vitthalkokate",
    liveDemo: "#"
  },
  {
    id: "student-perf",
    title: "Student Performance Management System",
    tag: "Full Stack System",
    domain: "EdTech & Analytics",
    summary: "Automated academic evaluation, grading, and analytics platform featuring stateless JWT authentication, fine-grained Role-Based Access Control (RBAC), and interactive React/Redux dashboards.",
    image: "/profile.png",
    architecture: "Java Spring Boot + Spring Security JWT + React Redux + MySQL",
    securityFeatures: [
      "Stateless JWT token issuance & validation",
      "Role-Based Access Control (RBAC)",
      "Protected REST API endpoints"
    ],
    techStack: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Hibernate (JPA)", "React", "Redux", "MySQL"],
    metrics: [
      { label: "Process Time Saved", value: "50%" },
      { label: "Result Accuracy", value: "100%" }
    ],
    github: "https://github.com/vitthalkokate",
    liveDemo: "#"
  },
  {
    id: "marine-mgmt",
    title: "Marine Item Management System",
    tag: "Management System",
    domain: "Logistics & Inventory",
    summary: "Web platform designed for tracking and managing marine inventory items, ensuring clean user interfaces and multi-device responsiveness.",
    image: "/profile.png",
    architecture: "HTML5, CSS3, JavaScript ES6+, Responsive Layouts",
    securityFeatures: ["Input sanitization", "Client-side validation"],
    techStack: ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design"],
    metrics: [
      { label: "Cross-Device Support", value: "100%" }
    ],
    github: "https://github.com/vitthalkokate",
    liveDemo: "#"
  }
];

export const educationData = {
  degree: {
    title: "Bachelor of Business Administration in Computer Applications (BBA-CA)",
    institution: "Marathwada Mitra Mandal's College of Commerce (MMCC)",
    university: "Savitribai Phule Pune University",
    duration: "Jun 2021 – April 2024",
    score: "CGPA :- 8.25",
    highlights: [
      "Specialized in Computer Applications, Database Design, OOP Java, and Web Technologies.",
      "Graduated with distinction with a CGPA of 8.25."
    ]
  },
  certifications: [
    {
      title: "Full Stack Java Developer Certification",
      issuer: "Professional Certification",
      date: "Oct 2023 – May 2024",
      desc: "Gained practical, end-to-end hands-on experience in Java web application development, microservices, and enterprise integration."
    },
    {
      title: "Claude Code 101 – Anthropic Academy",
      issuer: "Anthropic Academy",
      date: "2026",
      desc: "Completed Anthropic's official course on using Claude Code as an AI coding agent for daily development workflows (Explore → Plan → Code → Commit)."
    },
    {
      title: "AI Fluency: Framework & Foundations – Anthropic Academy",
      issuer: "Anthropic Academy",
      date: "2026",
      desc: "Completed Anthropic's foundational course on effective, responsible collaboration with AI systems."
    }
  ]
};

export const skillsGrouped = [
  {
    category: "Core Languages & Foundations",
    skills: [
      { name: "Java (8/17)", level: "Advanced", desc: "Multithreading, OOP, Streams, Concurrency" },
      { name: "Python", level: "Proficient", desc: "FastAPI microservices, script automation" },
      { name: "JavaScript / HTML / CSS", level: "Proficient", desc: "ES6+, DOM manipulation, Responsive UI" }
    ]
  },
  {
    category: "Frameworks & Security",
    skills: [
      { name: "Spring Boot", level: "Advanced", desc: "REST APIs, Microservices, Resilience4j" },
      { name: "Spring Security", level: "Advanced", desc: "JWT, RBAC, HMAC, AES/RSA Hybrid Encryption" },
      { name: "Spring JPA / Hibernate", level: "Proficient", desc: "ORM mapping, transaction management" },
      { name: "React & Redux", level: "Proficient", desc: "Component UI, State store, Analytics dashboards" },
      { name: "FastAPI", level: "Proficient", desc: "Lightweight Python microservices" }
    ]
  },
  {
    category: "Messaging, Cache & Resilience",
    skills: [
      { name: "RabbitMQ", level: "Advanced", desc: "Async processing queues, VAPT ID consumers" },
      { name: "Redis", level: "Advanced", desc: "In-memory caching, domain-based request validation" },
      { name: "Apache Kafka", level: "Proficient", desc: "Distributed streaming & pub-sub pipelines" },
      { name: "Resilience4j", level: "Advanced", desc: "Circuit Breaker, Rate Limiting, Retry, Bulkhead" }
    ]
  },
  {
    category: "Cloud, DevOps & Databases",
    skills: [
      { name: "AWS (S3)", level: "Proficient", desc: "Low-latency object storage & retrieval" },
      { name: "Docker", level: "Proficient", desc: "Application containerization & JAR deployment" },
      { name: "Linux Administration", level: "Proficient", desc: "Server config, deployment, process control" },
      { name: "PostgreSQL & MySQL", level: "Advanced", desc: "Relational schema design, query optimization" }
    ]
  }
];
