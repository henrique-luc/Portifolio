import Buy from "../../assets/Buy.png";
import KenzieHub from "../../assets/KenzieHub.png";
import NuKenzie from "../../assets/NuKenzie.png";

export const Projects = [
  {
    id: 1,
    image: Buy,
    title: "Buy An Idea",
    description:
      "Projeto de conclusão do curso de Desenvolvedor Front End da Kenzie Academy Brasil. A aplicação conecta investidores a Empreendedores utilizando um sistema de match entre ambos, facilitando a empreendedores conseguirem capital para realização de seus produtos/projetos. Desenvolvido utilizando framework React no front-end e JSON-Server como API.",
    vercel: "https://capstone-buy-an-idea.vercel.app/",
    github: "https://github.com/henrique-luc/Buy-An-Idea",
    UsedProg: [
      "React JS",
      "VSCode",
      "Git",
      "GitHub",
      "Heroku",
      "Whimsical",
      "JSON-Server",
      "Vercel",
    ],
    UsedLibs: [
      "React Router Dom@5",
      "Material UI",
      "Swiper",
      "React Hook Form",
      "React Icons",
      "Axios",
      "Yup",
      "Styled-Components",
      "Toastify",
      "Context API",
    ],
  },
  {
    id: 2,
    image: NuKenzie,
    title: "NuKenzie",
    description:
      " Aplicação desenvolvida para controle de finanças, utilizando o framework React Js no front end com styled-components na parte da estilização. Com isso pude melhorar a gestão financeira do usuário.",
    vercel: "https://react-entrega-s1-nu-kenzie-henrique-luc.vercel.app/",
    github: "https://github.com/henrique-luc/NuKenzie",
    UsedProg: ["React JS", "VSCode", "Git", "GitHub", "Vercel"],
    UsedLibs: ["React Router Dom@5", "Styled-Components"],
  },
  {
    id: 3,
    image: KenzieHub,
    title: "KenzieHub",
    description:
      "Aplicação desenvolvida para cadastro de Tecnologias e Linguagens que o usuário possui conhecimento e o nível em que se encontra esse conhecimento.Alem de adicionar, o usuário pode editar e deletar tecnologias que ele adicionou. Utilizando o framework React Js no front end com Formik para criação dos formulários. Com isso pude fazer um projeto mais dinâmico e de melhor compreenção e escalabilidade do projeto",
    vercel: "https://react-entrega-s2-kenzie-hub-henrique-luc.vercel.app/",
    github: "https://github.com/henrique-luc/KenzieHub",
    UsedProg: ["React JS", "VSCode", "Git", "GitHub", "Vercel"],
    UsedLibs: [
      "React Router Dom@5",
      "React Hook Form",
      "React Icons",
      "Axios",
      "Yup",
      "Styled-Components",
      "Toastify",
      "Formik",
    ],
  },
];
