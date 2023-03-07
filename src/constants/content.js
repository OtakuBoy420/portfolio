import {
  mobile,
  backend,
  search,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  rts,
  octocube,
  motion,
  nextjs,
  scss,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SEO Specialist",
    icon: search,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Framer Motion",
    icon: motion,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "SCSS",
    icon: scss,
  },
];

const experiences = [
  {
    title: "Web Developer - Basic Course",
    company_name: "Roskilde Tekniske Skole",
    icon: rts,
    iconBg: "#f1f1f1",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Developing web applications using HTML, CSS, and JavaScript.",
      "HTML Semantic Elements and best practices.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Git and Github for version control and collaboration.",
      "SCRUM methodology",
    ],
  },
  {
    title: "Web Developer - Main Course",
    company_name: "Roskilde Tekniske Skole",
    icon: rts,
    iconBg: "#f1f1f1",
    date: "Jan 2022 - Mar 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Backend development using Node.js and MongoDB.",
      "TailwindCSS and SCSS styling methods.",
      "React Native development for mobile applications.",
      "CMS development using WordPress.",
      "Framer Motion for animations.",
      "6 months internship at Octocube Games.",
      "Developing my first real world application for a client.",
      "Working on a schedule and communicating with the client.",
      "Deploying a React.js application to a real world server",
    ],
  },
  {
    title: "Web Developer - Employment",
    company_name: "Octocube Games",
    icon: octocube,
    iconBg: "#1f1f1f",
    date: "Jan 2023 - Present",
    points: [
      "Making a web application discoverable using SEO techniques.",
      "Optimizing the application for speed and performance.",
      "Working with different departments to build a successful product.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
