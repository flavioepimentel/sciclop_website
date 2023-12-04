import styles, { layout } from "../../style";
import { notebook_mocukp } from "../../assets";
import { adm, almoxarifado } from "./assets";
import  CTA  from "../../components/CTA"
import  Button  from "../../components/Button"

const Financial = () => {
  return (
  <> 
    <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={adm} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Administração
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Administre e controle a manutenção da sua frota com informações de ocorrências relevantes, 
      expeça ordens de intervenção para perfeita operação dos equipamentos.
      
    </p>
    <div>

      <Button />
    </div>

    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Almoxarifado
      </h2>
    <p className={`${styles.paragraph} max-w-[470px] `}>
       Controle todos os itens em estoque, utilize a identificação de ruas e preteleiras para posicionar cada item em estoque. 
       Aprove a saída de cada unidade de consumo.
       Acompanhe o consumo, obsolescência de materias e custo com a curva ABC. Matém inventário rotativo baseado na curva de valores (ABC).
       Escolha a movimentação que melhor se adequa ao seu preocesso, PEPS, UEPS ou preço médio.
    </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={almoxarifado} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

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

    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Acompanhe todas as aquisições de peças e serviços feitas para atendimento das necessidades da frota. 
      Partindo de uma requisição, passa por todo um processo de aprovação e contação, finalizando com a checagem na entrega do que foi adquirido. 
      Todo o processo é feito online sem nenhuma intervenção de papel. 
      Usa por base o histórico de aquisições o que permite análise de desempenho do processo.
    </p>
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Custos
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Crie uma grade de custos de cada equipamento da frota, dividindo em custos fixos e variávies e suas subdivisões. 
      Tome decisões estratégicas nas aquisições, escolha de fornecedores e na venda de equipamentos da frota, 
      Use o módulo de Custos para acessar o seu custo operacional e tomar decisões táticas mais acertivas.
      Integre ao sistemas de contabilidade para mais confiabilidade nos dados dos custos.
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
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Aqui se concentrarão os dados necessários para as tomadas de decisões estratégicas. 
      
      Eventos de troca de óleo e filtros, 
      Refinamento de planos de preventiva, 
      Acompanhamento de ordens de serviços de oficina, 
      Desempenho de pneus, 
      Acompanhamento de serviços externos (recuperações e socorros etc.)
      
    </p>
    </div>
  </section>
    <CTA />
  </>
  )
};

export default Financial;