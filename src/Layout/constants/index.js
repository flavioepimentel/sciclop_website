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
  {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
    id: "veículos",
    categoria: "Fleet",
    title: "Veículos",
  },
  {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
    id: "posto",
    categoria: "Fleet",
    title: "Posto",
  },
  {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
    id: "abastecimento",
    categoria: "Fleet",
    title: "Abastecimento",
  },
  {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
    id: "lubrificacao",
    categoria: "Fleet",
    title: "Lubrificação",
  },
  {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
    id: "laboratorio",
    categoria: "Fleet",
    title: "Laboratório",
  },
  {// Veículos, posto, abastecimento, Lubrificação, laboratório, ofcina
    id: "oficina",
    categoria: "Fleet",
    title: "Oficina",
  },
   { // Pneus, mecânica e material rodante
    id: "pneus",
    categoria: "Maintenance",
    title: "Pneus",
  },
  { // Pneus, mecânica e material rodante
    id: "mecanica",
    categoria: "Maintenance",
    title: "Mecânica",
  },
  { // Pneus, mecânica e material rodante
    id:  "rodante" ,
    categoria: "Maintenance",
    title: "Material Rodante",
  },
   { // Administração, compras, almoxarifado, Custos operacionais e controles
    id: "administrativo",
    categoria: "Financial",
    title: "Administrativo",
  },
  { // Administração, compras, almoxarifado, Custos operacionais e controles
    id: "compras",
    categoria: "Financial",
    title: "Compras",
  },
  { // Administração, compras, almoxarifado, Custos operacionais e controles
    id: "almoxarifado",
    categoria: "Financial",
    title: "Almoxarifado",
  },
  { // Administração, compras, almoxarifado, Custos operacionais e controles
    id:  "custos" ,
    categoria: "Financial",
    title: "Custos Operacionais",
  },
  { // Administração, compras, almoxarifado, Custos operacionais e controles
    id: "controles",
    categoria: "Financial",
    title: "Controles",
  }
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

