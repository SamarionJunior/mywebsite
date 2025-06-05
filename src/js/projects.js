import { Image } from "../assets/images/index"

const urlsBase = {
  site: "https://samarionjunior.github.io",
  git: "https://github.com/SamarionJunior",
  mobile: "",
  desktop: ""
}

const projects = [{
    actived: true,
    thumbnail: {
        url: Image.Card.Restaurant,
        position: "top center"
    },
    title: "Restaurante",
    description: "O site de um restaurante permite que o estabelecimento tenha presença online. Ele oferece um cardápio virtual, meios de fazer pedidos online e informações do negócio.",
    links: [
        {name: "site", url: urlsBase.site},
        {name: "git", url: urlsBase.git},
        {name: "mobile", url: urlsBase.mobile},
        {name: "desktop", url: urlsBase.desktop}
    ],
    // param: "/to-do-list/"
    param: "/restaurant/"
  },{
    actived: false,
    thumbnail: {
        url: Image.Card.ToDoList,
        position: "top center"
    },
    title: "To Do List",
    description: "É uma lista de tarefas, de coisas que precisam ser feitas. É uma forma de organizar as atividades que não podem ser esquecidas, e que não estão inseridas na nossa rotina. É diferente de uma agenda,onde as atividades tem dia e hora para acontecer. Como por exemplo uma lista de compras.",
    links: [
        {name: "site", url: urlsBase.site},
        {name: "git", url: urlsBase.git},
        {name: "mobile", url: urlsBase.mobile},
        {name: "desktop", url: urlsBase.desktop}
    ],
    // param: "/to-do-list/"
    param: "/todolist/"
  },{
    actived: false,
    thumbnail: {
        url: Image.Card.Pokedex,
        position: "center center"
    },
    title: "Pokedex",
    description: "A Pokédex (palavra comum no vocabulário dos amantes de Pokémon) é uma enciclopédia virtual que detém todas as espécies de pokémon.",
    links: [
        {name: "site", url: urlsBase.site},
        {name: "git", url: urlsBase.git},
        {name: "mobile", url: urlsBase.mobile},
        {name: "desktop", url: urlsBase.desktop}
    ],
    param: "/pokedex/"
  },{
    actived: false,
    thumbnail: {
        url: Image.Card.Pomodoro,
        position: "center center"
    },
    title: "Pomodoro",
    description: `A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos.`,
    links: [
        {name: "site", url: urlsBase.site},
        {name: "git", url: urlsBase.git},
        {name: "mobile", url: urlsBase.mobile},
        {name: "desktop", url: urlsBase.desktop}
    ],
    param: "/pomodoro/"
  }
]

export const getProjects = () => {
  const newProjects = [...projects].map(project => {
    const newProject = {
      ...project,
      key: Math.random(),
    }
    // console.log(newProject);
    return newProject;
  });
  // console.log(newProjects);
  return newProjects;
}