export const EMAIL = "piotr.cieslak2406@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/piotr-cieslak-611935263";
export const GITHUB = "https://github.com/CieslakPiotr";
export const CV = `${import.meta.env.BASE_URL}assets/Piotr-Cieslak-CV.pdf`;
export const PHOTO = `${import.meta.env.BASE_URL}assets/piotr.jpg`;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const jobs = [
  {
    role: "Technical Consultant", org: "Responsiv Solutions Ltd · Bracknell, UK", when: "04/2026 – now", now: true,
    bullets: [
      "Develop and maintain Java applications, following OOP principles and engineering best practices.",
      "Technical consultancy and implementation support for IBM Guardium Data Protection: deployment, configuration, troubleshooting and platform optimisation.",
      "Take part in code reviews, defect resolution and continuous improvement to keep delivery quality high.",
      "Analyse customer requirements and deliver tailored solutions that improve performance, usability and operational efficiency.",
    ],
  },
  {
    role: "Graduate Software Developer", org: "Responsiv Solutions Ltd · Bracknell, UK", when: "09/2025 – 04/2026",
    bullets: [
      "Developed and maintained Java applications using OOP principles and best practices.",
      "Wrote technical documentation, implementation guides and knowledge base articles for customers and internal engineers.",
      "Debugged, tested and optimised Java and TypeScript applications for reliability, maintainability and scalability.",
    ],
  },
  {
    role: "Programmer (Freelance)", org: "Upwork · London, UK", when: "04/2025 – 08/2025",
    bullets: [
      "Wrote scalable, maintainable code in Python, JavaScript, HTML and CSS.",
      "Built machine learning models to analyse data and support smarter decisions.",
      "Created responsive front-ends with interactive features to improve user experience and engagement.",
      "Cut debugging time and sped up delivery through structured coding practices.",
    ],
  },
  {
    role: "Sales Assistant / Technician", org: "Profi-Tech Sp. z o.o. · Wieluń, Poland", when: "09/2019 – 06/2020",
    bullets: [
      "Diagnosed and fixed hardware and software issues to minimise downtime.",
      "Helped teammates troubleshoot and handled high-volume customer enquiries.",
    ],
  },
];

export const skills = {
  "Languages": ["Java", "TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS", "R"],
  "Frameworks": ["Spring Boot", "Vue", "Vuetify", "shadcn/ui", "Node.js", "Express", "Flask"],
  "Databases": ["PostgreSQL", "IBM Db2", "MySQL"],
  "Tools & platforms": ["IBM Guardium", "IBM ACE", "GitLab", "Maven", "Docker", "VS Code", "Bruno"],
};

export const fmt = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
