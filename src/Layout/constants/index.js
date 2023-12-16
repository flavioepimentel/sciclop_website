const facebook = `${import.meta.env.VITE_APP_STATIC}/facebook.webp` 
const instagram = `${import.meta.env.VITE_APP_STATIC}/instagram.webp` 
const linkedin = `${import.meta.env.VITE_APP_STATIC}/linkedin.webp` 
const twitter = `${import.meta.env.VITE_APP_STATIC}/twitter.webp` 

export const navLinks = [
  { //	O que é o Siclope, contato, Descrição da dor.
    id: "Home",
    title: "Inicio",
  },
  { // Quem somos, A quem serve, como funcioa
    id: "About",
    title: "Quem somos",
  }
];

export const dropdownLinks = [
  {
    id:"fleet",
    categoria: "Frotas",
    item:[
      {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
        id: "veículos", 
        title: "Veículos",
      },
      {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
        id: "posto",
        title: "Posto",
      },
      {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
        id: "abastecimento",
        title: "Abastecimento",
      },
      {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
         id: "lubrificacao",
         title: "Lubrificação",
      },
      {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
        id: "laboratorio",
        title: "Laboratório",
      },
      {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
        id: "oficina",
        title: "Oficina",
      },
    ]
  },
  
   { // Pneus, mecânica e material rodante
    id:"maintenace",
    categoria: "Manutenção",
    item:[
      {
        id: "pneus",
        title: "Pneus",
      },
      { // Pneus, mecânica e material rodante
        id: "mecanica",
        title: "Mecânica",
      },
      { // Pneus, mecânica e material rodante
        id:  "rodante" ,
        title: "Material Rodante",
      },
    ]
  },
   { // Administração, compras, almoxarifado, Custos operacionais e controles
    id: "financial",
    categoria: "Administrativo",
    item:[
     { // Pneus, mecânica e material rodante
        id:  "administrativo" ,
        title: "Administrativo",
      },
      { // Administração, compras, almoxarifado, Custos operacionais e controles
        id: "compras",
        title: "Compras",
      },
      { // Administração, compras, almoxarifado, Custos operacionais e controles
        id: "almoxarifado",
        title: "Almoxarifado",
      },
      { // Administração, compras, almoxarifado, Custos operacionais e controles
        id:  "custos" ,
        title: "Custos Operacionais",
      },
      { // Administração, compras, almoxarifado, Custos operacionais e controles
        id: "controles",
        title: "Controles",
      }
    ]
  },
]

export const dropdownLinksMobile = [
  {
    id: "fleet",
    title: "Frotas",
  },
  {
    id: "financial",
    title: "Administrativo",
  },
  {
    id: "maintenance",
    title: "Manutenção",
  },
]

export const footerLinks = [
  {
    title: "Informação",
    links: [
      {
        name: "Orçamento",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Como Funciona",
        link: "https://www.siclope.com/About/",
      },
    ],
  },
  {
    title: "Comunicação",
    links: [
      {
        name: "Suporte",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Contato",
        link: "https://www.hoobank.com/help-center/",
      },
    ],
  },
  {
    title: "Aplicativo",
    links: [
      {
        name: "Login",
        link: "https://frotas-erp.bubbleapps.io/version-test/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

