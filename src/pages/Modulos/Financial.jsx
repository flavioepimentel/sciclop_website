import styles, { layout } from "../../style";
import { notebook_mocukp } from "../../assets";
import  CTA  from "../../components/CTA"
import  Button  from "../../components/Button"

const Financial = () => {
  return (
  <> 
  <h1>Administrativo</h1>
    <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Administração
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Administre e controle a manutenção da sua frota com informações de ocorrências relevantes. Expeça ordens de intervenção programadas para equipamentos.
      Este módulo tem o recurso de determinar todas as margens de erro permitidas na operação como por exemplo a divergência máxima nas médias dos equipamentos dentro da qual a média ainda é considerada como normal. Limite máximo de divergência na operação de postos quando da medida física dos estoques ou da descarga dos caminhões de fornecedores de combustíveis e muito mais. É nesse módulo que os recursos da empresa em postos próprios ou terceiros são ativados ou desativados por exemplo.
    </p>
    <div>

      <Button styles={`mt-20`}/>
    </div>

    </div>
    <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Almoxarifado
      </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Como parte do sistema de materiais, controla todos os itens em estoque. Parte da criação de um espelho do almoxarifado real, com identificação de ruas, preteleiras e escaninhhos que permite identificar e posicionar cada item em estoque. Permite a saída de cada unidade de consumo mediante uma requisiçao previamente aprovada por colaboradores determinados, transferir itens entre almoxarifados, acompanhar consumo, obsolescência de materias e controla o custo mediante a curva ABC. Matém inventário rotativo baseado na curva de valores (ABC). Com ligação ao módulo de administração, permite a escolha de movimentação do tipo PEPS. UEPS ou preço médio.
      Liga-se aos módulos de compras, custos, lubrificação, Oficiana, administração e postos - uma vez que controla o estoque de combustíveis como um item em estoque.
    </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Compras
      </h2>

    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Também parte do sistema de materiais, acompanha todas as aquisições de peças e serviços feitas para atendimento das necessidades da frota. Partindo de uma requisição, passa por todo um processo de aprovação e contação, finalizando com a checagem na entrega do que foi adquirido. Todo o processo é feito online sem nenhuma intervenção de papel. Pode haver um sistema para cada unidade da empresa ou um setor central de compras. Usa por base o histórico de aquisições o que permite análise de desenpenho do processo.
      Liga-se aos módulos de almoxarifado, oficina, administração e outros com menor relevância.
    </p>
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Custos
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Centro de convergência do que ocorre na maioria dos módulos, pode receber também informações de outros departamentos da empresa com afinalidade de criar uma grade de custos de cada equipamento da frota, divididos em custos fixos e variávies, e dentro de cada um suas subdivisões, o que permite a tomada de decisões estratégicas como a compra de determinadas marcas de equipamentos ou a escolha de fornecedores ou ainda o momento de venda de equipamentos da frota por razões de custos, bem assim também decisões táticas como mudança de algum equipamento em algum tipo de operação, alteração em processos produtivos aumento de fiscalização em determinadas operações e muito mais tendo por base o custo operacional.
      Liga-se a todos os módulos recebendo informações ou fornecendo dados táticos para tomada de decisão. Pode receber informações de sistemas de contabilidade para o ajuste dos dados do custo fixo, por exemplo.
    </p>  
    </div>
        <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
    <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Controle
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Na hipótese de a empresa possuir um departamento para recebimento das informações de manutenção e emissão de ordens de mesmo nível e que seja independente da administração, que se ocupa das decisões estratégicas, aqui se concentrarão os dados necessários para as tomadas de decisão. Eventos de troca de óleo e filtros, refinamento de planos de preventiva, acompanhamento de ordens de serviços de oficina, desempenho de pneus, acompanhamento de serviços externos, como recuperações e socorros etc.
      Liga-se aos módulos de oficina, pneus, almoxarifado, compras, mecânica, laboratório, postos.
    </p>
    </div>
  </section>
    <CTA />
  </>
  )
};

export default Financial;