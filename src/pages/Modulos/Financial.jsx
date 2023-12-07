import styles, { layout } from "../../style";
import { adm, almoxarifado, compras, custos, controle } from "./assets";
import  CTA  from "../../Layout/components/CTA"
import  Button  from "../../Layout/components/Button"

const Financial = () => {
  return (
  <> 
    <section id="adm" className={layout.sectionReverse}>
    <div className={`${layout.hiddenImageOnSmall}`}>
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
       <div className={`${layout.hiddenImageOnBig}`}>
      <img src={adm} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

      <Button />
    </div>

    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>
      Almoxarifado
      </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
       Controle todos os itens em estoque, utilize a identificação de ruas e preteleiras para posicionar cada item em estoque. 
       Aprove a saída de cada unidade de consumo.
       Acompanhe o consumo, obsolescência de materias e custo com a curva ABC. Matém inventário rotativo baseado na curva de valores (ABC).
       Escolha a movimentação que melhor se adequa ao seu preocesso, PEPS, UEPS ou preço médio.
    </p>
    </div>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={almoxarifado} alt="billing" className={`w-[100%] h-[100%] relative z-[5] ${layout.hiddenImageOnSmall}`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={compras} alt="billing" className={`${layout.hiddenImageOnSmall} w-[100%] h-[100%] relative z-[5]`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>
      Compras
      </h2>

    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      Acompanhe todas as aquisições de peças e serviços essenciais para atender às necessidades da frota. 
      Iniciando com uma requisição, o processo passa por aprovação, cotação e culmina na verificação no momento da entrega. 
      Todo o procedimento é conduzido de forma digital, eliminando o uso de papel. 
      Realize análises de desempenho do processo utilizando o histórico de aquisições como base.
    </p>
    </div>
    </div>
  </section>
  <section >
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>
      Custos
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      Crie uma grade de custos de cada equipamento da frota, dividindo em custos fixos e variávies e suas subdivisões. 
      Tome decisões estratégicas nas aquisições, escolha de fornecedores e na venda de equipamentos da frota, 
      Use o módulo de Custos para acessar o seu custo operacional e tomar decisões táticas mais acertivas.
      Integre ao sistemas de contabilidade para mais confiabilidade nos dados dos custos.
    </p> 
    </div> 
    </div>
        <div>
      <img src={custos} alt="billing" className={` w-[100%] h-[100%] relative z-[5]`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
    <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={controle} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>
      Controle
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      Aqui se concentrarão os dados necessários para as tomadas de decisões estratégicas. 
      
      
      Refinamento de planos de preventiva, 
      Acompanhamento de ordens de serviços de oficina, 
      Desempenho de pneus, 
      Acompanhamento de serviços externos (recuperações e socorros etc.)
      
    </p>
    </div>
    </div>
  </section>
    <CTA />
  </>
  )
};

export default Financial;