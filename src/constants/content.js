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
  rts,
  octocubegames,
  octocube,
  aniflix,
  metaversus,
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
      "React Native development.",
      "CMS development using WordPress.",
      "Framer Motion for animations.",
      "6 months internship at Octocube Games.",
      "Developing my first application for a real client.",
      "Working on a schedule and meeting deadlines.",
      "Continuous deployment using Netlify and Vercel.",
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
      "Working with the team to maintain and improve the application.",
      "Deploying the application to a live plesk server.",
    ],
  },
];

const projects = [
  {
    name: "Octocube Games",
    description: "Web application that presents the company's portfolio of games and allows users to view details about each game and get in touch with the company.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "light-blue-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
    ],
    image: octocubegames,
    link: "https://octocubegames.com",
  },
  {
    name: "Aniflix",
    description: "Aniflix is a web app that serves as an anime library. Users can search for anime with advanced search filters and view details about each anime.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "light-blue-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: aniflix,
    link: "https://aniflix-library.netlify.app",
    source_code_link: "https://github.com/OtakuBoy420/aniflix-react-tw",
  },
  {
    name: "Metaversus",
    description: "Metaversus is a web app that serves as platform to browse through different metaverses and view details about each metaverse.",
    tags: [
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "light-blue-gradient",
      },
      {
        name: "framer",
        color: "purple-text-gradient",
      },
    ],
    image: metaversus,
    link: "https://zey-learning-next.vercel.app",
    source_code_link: "https://github.com/OtakuBoy420/learning-next",
  },
];

export { services, technologies, experiences, projects };
