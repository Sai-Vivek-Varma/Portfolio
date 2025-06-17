import { nanoid } from "nanoid";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  {
    id: nanoid(),
    href: "https://drive.google.com/file/d/1Rtgos91MCchour4Bc3oibRLSYtxDc9ZW/view",
    text: "resume",
  },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, designed visually appealing and responsive websites.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <SiJavascript className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in Javascript, building interactive and dynamic web applications with a focus on seamless user interaction and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    url: "https://food-call.lovable.app/",
    title: "Food Call",
    img: "",
    text: "Surplus food re-distribution application",
  },
  {
    id: nanoid(),
    url: "https://vibrant-vista.netlify.app/",
    title: "Vibrant Vista",
    img: "",
    text: "AI enhanced blogging website",
  },
  {
    id: nanoid(),
    url: "https://react-menu-example.netlify.app/",
    title: "React Menu",
    img: "",
    text: "react menu",
  },
];
