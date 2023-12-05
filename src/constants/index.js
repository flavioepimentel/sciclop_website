import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  { //	O que é o Siclope, contato, Descrição da dor.
    id: "Home",
    title: "Inicio",
  },
  { // Quem somos, A quem serve, como funcioa
    id: "About",
    title: "Quem Somos",
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


export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Benefícios",
    content:
      "Atingir o equilíbrio entre máxima produtividade e o custo mínimo, com gerenciamento instantâneo de variações em sua frota e suas causas.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Máxima Confiabilidade",
    content:
      "Nós nos concentramos em produzir um fluxo de informação com grande nível de precisão, com a segurança e confiabilidade.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Informação em Tempo Real",
    content:
      "Acesse dados para decisões do dia a dia baseada em fatos para intervenções acertivas antes que produzam efeitos negativos, garantindo o melhor resultado.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Administrar a frota sem fonte confiável de dados é como andar às cegas em um campo minado",
    name: "Herman Jensen",
    title: "Eng de Mantuenção",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
    "Análise de lubrificantes? Nunca havia ouvido falar, embora agora saiba que isso foi criado há muito tempo.É o exame de sangue do equipamento previnindo as doenças do desgaste prematuro trazendo redução no custo operacional.",
    name: "Steve Mark",
    title: "Coord. Financeiro",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Novas tecnologias e a correta utilização de antigas tecnologias, devem se unir na busca de soluções ótimas que tragam redução de custos operacionais de forma técnica, sem comprometimento da produção, do equipamento ou da equipe.",
    name: "Kenn Gallagher",
    title: "Chefe de Operações",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Usuários Ativos",
    value: "3100+",
  },
  {
    id: "stats-2",
    title: "Empresas Clientes",
    value: "200+",
  },
  {
    id: "stats-3",
    title: "Veiculos Monitorados",
    value: "2300+",
  },
];

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

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];