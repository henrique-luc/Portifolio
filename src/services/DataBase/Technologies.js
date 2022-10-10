import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPencilAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { SiJavascript, SiAdobe, SiTypescript } from "react-icons/si";
import { IoLanguageOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

export const Technologies = [
  {
    icon: FaGitAlt,
    name: "Git",
    experience: 100,
    libs: ["GitFlow", "GitHub", "Pull Request"],
  },

  {
    icon: FaHtml5,
    name: "HTML5",
    experience: 100,
    libs: [],
  },

  {
    icon: FaCss3Alt,
    name: "CSS3",
    experience: 100,
    libs: ["Responsividade", "Mobile First"],
  },

  {
    icon: SiJavascript,
    name: "JavaScript",
    experience: 100,
    libs: ["Poo"],
  },

  {
    icon: FaReact,
    name: "React JS",
    experience: 100,
    libs: [
      "Context API",
      "Redux",
      "Axios",
      "Chakra",
      "Formik",
      "Toastify",
      "Styled Components",
    ],
  },

  {
    icon: SiTypescript,
    name: "TypeScript",
    experience: 70,
    libs: ["React TypeScript"],
  },

  {
    icon: TbBrandNextjs,
    name: "Next Js",
    experience: 100,
    libs: [],
  },

  // {
  //   icon: FaNodeJs,
  //   name: "Node.js",
  //   experience: 10,
  //   libs: [],
  // },

  {
    icon: FaInfoCircle,
    name: "API",
    experience: 100,
    libs: ["API Rest"],
  },

  {
    icon: FaFigma,
    name: "Figma",
    experience: 90,
    libs: [
      "Construção de projetos",
      "Construção de aplicações orientados pelo Figma",
    ],
  },

  {
    icon: IoLanguageOutline,
    name: "Idiomas",
    experience: 60,
    libs: ["Inglês Intermediário"],
  },

  {
    icon: FaPencilAlt,
    name: "Metod. ágeis",
    experience: 100,
    libs: ["Kanban", "Scrum"],
  },

  {
    icon: SiAdobe,
    name: "Adobe CC",
    experience: 100,
    libs: ["Lightroom", "Photoshop"],
  },
];
