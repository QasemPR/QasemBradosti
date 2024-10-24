import { title } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  word,
  excel,
  powerpoint,
  access,
  cpp,
  csharp,
  sql,
  firebase,
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
  {
    id: "skills",
    title: "Skills",
  }
];

const services = [
    {
    title: "Full  Stack Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Html",
    icon: html,
  },
  {
    name: "Css",
    icon: css,
  },
  {
    name: "Java Script",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Sql",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Word",
    icon: word,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power Point",
    icon: powerpoint,
  },
  {
    name: "aceess",
    icon: access,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Techno Speed Software Team",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Supporter",
    company_name: "Sardam",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Feb 2021",
    points: [
      "I have experience in technology and troubleshooting mobile hardware and software issues , and I worked in my mobile store (Sardam For Mobile) in Sidakan - Soran.",
    ],
  },
  {
    title: "IT Supporter And Tachnical Supporter",
    company_name: "Bradost PC and Mobile Center",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Im Worked in This center in Soran , specializes in repairing mobile phones and computers, including tasks such as formatting, data restoration,and repairing hardware components",
    ],
  },
];

const projects = [
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    name: "Food Delivary App",
    description: "This Appliction is using for food delivary",
    tags: [
      {
        name: "react Native",
        color: "blue-text-gradient",
      },
      {
        name: "node js and express js",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
