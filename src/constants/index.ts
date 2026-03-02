// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  figma,
  smartinterviews,
  infosys,
  viswamai,
  project1,
  project2,
  project3,
  project4,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Kotlin Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name:"python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "sql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name:"Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {    
    name: "jetpack compose",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg",
  },
  {
    name: "git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "figma",
    icon: figma,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "DSA Student Mentor",
    company_name: "Smart Interviews",
    icon: smartinterviews, 
    iconBg: "#F0F0F0",
    date: "Nov 2025 - Present",
    points: [
      "Guiding 100+ learners in Data Structures and Algorithms concepts.",
      "Resolved coding doubts and improved students' problem-solving approaches.",
      "Conducted structured explanations of complex algorithms with practical examples.",
      "Helped learners improve coding efficiency and interview readiness."
    ],
  },
  {
    title: "Python Intern",
    company_name: "Infosys Springboard",
    icon: infosys,
    iconBg: "#F0F0F0",
    date: "Oct 2025 - Dec 2025",
    points: [
    "Developed an ML-based Fit Pulse Health Anomaly Detection System using 5,000+ wearable data samples.",
    "Achieved 90% model accuracy through preprocessing, feature engineering, and hyperparameter tuning.",
    "Built an interactive web interface using Streamlit to visualize predictions and model insights.",
    "Implemented data cleaning, model evaluation, and performance analysis using Python and ML libraries."
  ],
  },
  {
  title: "Tech-Lead Intern",
  company_name: "VISWAM.AI",
  icon: viswamai,
  iconBg: "#E6DEDD",
  date: "May 2025 - July 2025",
  points: [
    "Led technical development initiatives and resolved 50+ technical queries during project execution.",
    "Collaborated with cross-functional teams to design and implement scalable full-stack solutions.",
    "Contributed to backend API development and frontend integration using modern web technologies.",
    "Ensured code quality through debugging, optimization, and structured problem-solving approaches."
  ],
},
] as const;

// Projects
export const PROJECTS = [
  {
  name: "Money Mitra",
  description:
    "An AI-powered personal finance Android application that categorizes transactions, predicts loan approval probability, and provides personalized financial insights using ML and RAG models.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "machinelearning",
      color: "green-text-gradient",
    },
    {
      name: "kotlin",
      color: "pink-text-gradient",
    },
    {
      name: "jetpackcompose",
      color: "orange-text-gradient",
    },
  ],
  image: project1,
  source_code_link: "https://github.com/Adithyaharshithreddy24/MoneyMitraApp",
  live_site_link: "https://your-live-link.com",
},
{
  name: "EventGenie",
  description:
    "A smart event management platform that connects customers with vendors, enabling seamless service booking, vendor management, and real-time budget tracking.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "express",
      color: "orange-text-gradient",
    },
  ],
  image: project2,
  source_code_link: "https://github.com/Adithyaharshithreddy24/eventgenie",
  live_site_link: "https://eventgenie-frontend.onrender.com/",
},
{
  name: "NourishNet",
  description:
    "A full-stack food waste management platform that connects restaurants and event venues with NGOs to redistribute surplus food efficiently and reduce waste.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "express",
      color: "orange-text-gradient",
    },
  ],
  image: project3,
  source_code_link: "https://github.com/Adithyaharshithreddy24/NOURISHNET",
  live_site_link: "https://your-live-link.com",
},
{
  name: "AI Diet Recommendation System",
  description:
    "An AI-powered personalized diet recommendation system using Gemini API that generates customized Indian meal plans based on user health inputs and dietary preferences.",
  tags: [
    { name: "HTML", color: "blue-text-gradient" },
    { name: "python", color: "green-text-gradient" },
    { name: "ai", color: "pink-text-gradient" },
  ],
  image: project4,
  source_code_link: "https://github.com/Adithyaharshithreddy24/TasteMate",
  live_site_link: "https://tastemate-fk1d.onrender.com/#",
},
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@AdithyaHarshithReddy",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/adithya-harshith-reddy-boddu/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/adithya_24_",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Adithyaharshithreddy24",
  },
] as const;
