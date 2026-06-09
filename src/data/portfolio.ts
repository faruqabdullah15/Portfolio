export const portfolio = {
  name: "Md. Faruq Abdullah Rafi",
  alias: "rafidev",
  tagline: "Full-Stack Engineer · Builder · Problem Solver",
  logo: "R",
  shortDescription:
    "I'm a software engineer passionate about crafting elegant, performant digital experiences. I love turning complex problems into intuitive products — from scalable backends to polished user interfaces. When I'm not coding, you'll find me contributing to open source, or exploring emerging tech.",
  email: "faruqabdullah1512@gmail.com",
  location: "Dhaka, Bangladesh",
  social: [
    { name: "GitHub", url: "https://github.com/faruqabdullah15", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/md-faruq-abdullah-rafi", icon: "linkedin" },
    //{ name: "Twitter", url: "https://twitter.com/rafiahmed", icon: "twitter" },
    { name: "Email", url: "mailto:faruqabdullah1512@gmail.com", icon: "mail" },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "United International University (UIU)",
      period: "2019 – Present",
      //details: "CGPA: 3.85/4.00  (Current) · Thesis on distributed systems optimization",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Dhaka College, Dhaka",
      period: "2018 – 2019",
      details: "GPA: 5.00/5.00 ",
    },
  ],
  experience: [
    /*{
      role: "Software Engineer II",
      company: "TechNova Solutions",
      period: "Jul 2023 – Present",
      description:
        "Lead development of microservices handling 2M+ daily API requests. Reduced deployment time by 60% through CI/CD pipeline optimization and container orchestration.",
      highlights: ["Node.js", "AWS", "Kubernetes", "PostgreSQL"],
    },*/
    {
      role: "Software Engineering Intern",
      company: "StartupLab Inc.",
      period: "Jan 2023 – Jun 2023",
      description:
        "Built real-time analytics dashboard. Collaborated with design team to ship responsive UI components.",
      highlights: ["React", "TypeScript", "MongoDB", "Redis"],
    },
  ],
  expertise: {
    domains: [
      "Web Application Development",
      //"Cloud Architecture",
      "API Design & Integration",
      //"DevOps & CI/CD",
      "System Design",
    ],
    techStack: [
      //"TypeScript",
      //"JavaScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      //"Redis",
      //"Docker",
      //"AWS",
      //"GraphQL",
    ],
    tools: [
      "Git",
      "VS Code",
      "Figma",
      //"Postman",
      "Jira",
      //"Docker Compose",
      "GitHub Actions",
      "Vercel",
      "Framer Motion",
    ],
  },
  projects: [
    {
      title: "Cat-Dog-Image-Classifier",
      description:
        "This is a 4-class image classification project that classifies images into:  Both - Image contains both cat and dog. Cat - Image contains only cat. Dog - Image contains only dog. Neither - Image contains neither cat nor dog The project uses Deep Learning with Transfer Learning approach.",
      tools: ["Python"],
      link: "https://github.com/faruqabdullah15/Cat-Dog-Image-Classifier-",
      featured: true,
    },
    {
      title: "senseLearn-learning-hub",
      description:
        "SenseLearn is an inclusive learning platform designed to support deaf, deaf-mute, and visually impaired students in Bangladesh",
      tools: ["Python", "C", "Cython", "HTML", "XSLT"],
      link: "https://github.com/faruqabdullah15/senseLearn-learning-hub",
      featured: true,
    },
    /*{
      title: "AI_Chatbot_JARVIS",
      description:
        "SAD Lab Project",
      tools: ["HTML", "Python", "CSS"],
      link: "https://github.com/faruqabdullah15/AI_Chatbot_JARVIS",
      featured: false,
    },
    {
      title: "OpenAPI Generator CLI",
      description:
        "CLI tool that auto-generates type-safe API clients and server stubs from OpenAPI 3.0 specs, supporting 5+ languages with customizable templates.",
      tools: ["Python", "Click", "Jinja2", "OpenAPI"],
      link: "https://github.com/rafiahmed/openapi-gen",
      featured: false,
    },*/
  ],
  extracurricular: [
    {
      organization: "UIU Computer Club, UIU",
      role: "Software Team Lead",
      period: "2020 – 2021",
      description:
        "Organized workshops and events for students to learn about software development and technology.",
    },
  ],
  socialWork: [
    {
      title: "Code for Community",
      organization: "Volunteer Developer",
      period: "2022 – Present",
      description:
        "Build free websites and digital tools for local NGOs, including a donation management system used by 3 charities.",
    },
    /*{
      title: "Tech Mentorship Program",
      organization: "Pathshala Foundation",
      period: "2021 – 2023",
      description:
        "Mentored underprivileged students in programming fundamentals and career guidance through weekly sessions.",
    },*/
  ],
  interests: [
    "Open Source Contribution",
    "Technical Writing",
    "Photography",
    "Video Games",
    "Hiking",
  ],
};

export type Portfolio = typeof portfolio;
