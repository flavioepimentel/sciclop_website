const link = import.meta.env.VITE_APP_STATIC;
const integration = `${link}/integration.webp`
const optimization = `${link}/optimization.webp`
const control = `${link}/control.webp`


export const features = [
  {
    id: "feature-1",
    icon: control,
    title: "Controle",
    content:
      "Com as informações fornecidas pelo módulo de abastecimento, escale as trocas de óleo e de filtros.",
  },
  {
    id: "feature-2",
    icon: integration,
    title: "Integração",
    content:
      "Requisita os filtros que serão utlizados em cada equipamento automaticamente quando necessário.",
  },
  {
    id: "feature-3",
    icon: optimization,
    title: "Otimização",
    content:
      "Gera um processo de aperfeiçoamento continuo atráves dos planos de manutençao preventiva.",
  },
];
