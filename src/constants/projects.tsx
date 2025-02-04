
export const languagesEnum: Record<string, string> = {
  JavaScript: "src/assets/Portfolio/Js.png",
  React: "src/assets/Portfolio/react.png",
  HTML: "src/assets/Portfolio/html.png",
  CSS: "src/assets/Portfolio/css.png",
  Figma: "src/assets/Portfolio/figma.png",
  ReactNative: "src/assets/Portfolio/react.png",
  Java: "src/assets/Portfolio/java.png",
  Python: "src/assets/Portfolio/python.png",
  CSharp: "src/assets/Portfolio/letter-c.png",
  Arduino: "src/assets/Portfolio/motherboard.png",
  TypeScript: "src/assets/Portfolio/TypeScript.png",
  MaterialUI: "src/assets/Portfolio/mui.png",
  Saas:"src/assets/Portfolio/saas.png",
  NextJS:"src/assets/Portfolio/next.png"
};

export const Projects = [
  {
    id: 1,
    name: "JRMTaxi",
    description:
      "App de catalogo de taxistas com objetivo de facilitar o contato entre clientes de taxistas",
    image: "src/assets/Portfolio/JRMTaxi.png",
    languages: ["React Native", "Figma"],
  },
  {
    id: 2,
    name: "Ludo Game",
    description:
      "Jogo Ludo com finalidade de praticar lógica de programação, manipulação do DOM, algoritmos e interação com o usuário",
    languages: ["HTML", "CSS", "JavaScript"],
    image: "src/assets/Portfolio/Ludo2.png",
  },
  {
    id: 3,
    name: "Projeto ONG",
    description:
      "Projeto com finalidade de simular o sistema interno de uma ONG que acolhe pessoas com diversas necessidades",
    languages: ["ReactJS", "Figma", "React Native", "Java"],
    image: "src/assets/Portfolio/ONG.png",
  },
  {
    id: 4,
    name: "Robo Compilador",
    description:
      "Consiste na construção de uma linguagem de programação que será utilizada para conduzir um robô na travessia de um campo",
    languages: ["HTML", "CSS", "JavaScript"],
    image: "src/assets/Portfolio/RoboCompilador.png",
  },
  {
    id: 5,
    name: "Rede Neural de previsão de plantações",
    description:
      "O projeto utiliza três redes neurais integradas para otimizar o cultivo em uma estufa.",
    languages: ["Python"],
    image: "src/assets/Portfolio/RedesNeuraisPY.png",
  },
  {
    id: 6,
    name: "Braço Robótico",
    description: "Braço robotico com programação manual e automática",
    languages: ["Arduino", "C#"],
    image: "src/assets/Portfolio/bracoRobo.jpg",
  },
  {
    id: 7,
    name: "CMD chatbot",
    description: "Assistente local para auxiliar o usuário",
    languages: ["JavaScript"],
    image: "src/assets/Portfolio/CMDChatbot.png",
  },
];
