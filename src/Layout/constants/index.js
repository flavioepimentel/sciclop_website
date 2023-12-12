const facebook = `${import.meta.env.VITE_APP_STATIC}/facebook.svg` 
const instagram = `${import.meta.env.VITE_APP_STATIC}/instagram.svg` 
const linkedin = `${import.meta.env.VITE_APP_STATIC}/linkedin.svg` 
const twitter = `${import.meta.env.VITE_APP_STATIC}/twitter.svg` 

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
    id: "Fleet",
    title: "Frotas",
  },
  { // Pneus, mecânica e material rodante
    id: "Maintenance",
    title: "Manutenção",
  },
  { // Administração, compras, almoxarifado, Custos operacionais e controles
    id: "Financial",
    title: "Administrativo",
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
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Termos & Serviços",
        link: "https://www.hoobank.com/terms-and-services/",
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
        link: "https://www.hoobank.com/our-partner/",
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

