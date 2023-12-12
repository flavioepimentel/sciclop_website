import styles, { layout } from "../../style";

import  CTA  from "../../Layout/components/CTA"
import  Button  from "../../Layout/components/Button"

const link = import.meta.env.VITE_APP_STATIC;

const adm = `${link}/adm.svg` 
const almoxarifado = `${link}/almoxarifado.svg` 
const compras = `${link}/compras.svg` 
const custos = `${link}/custos.svg` 
const controle = `${link}/controle.svg` 


const Financial = () => {
  return (
  <> 
    <section id="adm" className={layout.especialSectionReverse}>
    {/*    ---  Imagem Desktop   ---   */}
    <div className={`${layout.hiddenImageOnSmall}  `}>
      <img src={adm} alt="billing" className={`${styles.boxWidthImage}`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={`${layout.sectionInfoCenter}`}>
    <h2 className={`${styles.heading2} `}>
      Administração
      </h2>
    <p className={`${styles.paragraph} mb-5`}>
      Administre e controle a manutenção da sua frota com informações de ocorrências relevantes, 
      expeça ordens de intervenção para perfeita operação dos equipamentos.
      
    </p>
    {/*    ---  Imagem Mobile   ---   */}
    <div >
      <Button />
    </div>

    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
    <h2 className={styles.heading2}>
      Almoxarifado
      </h2>
    <p className={`${styles.paragraph}`}>
       Controle todos os itens em estoque, utilize a identificação de ruas e preteleiras para posicionar cada item em estoque. 
       Aprove a saída de cada unidade de consumo.
       Acompanhe o consumo, obsolescência de materias e custo com a curva ABC. Matém inventário rotativo baseado na curva de valores (ABC).
       Escolha a movimentação que melhor se adequa ao seu preocesso, PEPS, UEPS ou preço médio.
    </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={almoxarifado} alt="billing" className={`${styles.boxWidthImage} ${layout.hiddenImageOnSmall}`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={compras} alt="billing" className={`${styles.boxWidthImage}`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
    <h2 className={styles.heading2}>
      Compras
      </h2>

    <p className={`${styles.paragraph}`}>
      Acompanhe todas as aquisições de peças e serviços essenciais para atender às necessidades da frota. 
      Iniciando com uma requisição, o processo passa por aprovação, cotação e culmina na verificação no momento da entrega. 
      Todo o procedimento é conduzido de forma digital, eliminando o uso de papel. 
      Realize análises de desempenho do processo utilizando o histórico de aquisições como base.
    </p>
    </div>
  </section>
  <section className={layout.section} >
    <div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
    <h2 className={styles.heading2}>
      Custos
      </h2>
    <p className={`${styles.paragraph}`}>
      Crie uma grade de custos de cada equipamento da frota, dividindo em custos fixos e variávies e suas subdivisões. 
      Tome decisões estratégicas nas aquisições, escolha de fornecedores e na venda de equipamentos da frota, 
      Use o módulo de Custos para acessar o seu custo operacional e tomar decisões táticas mais acertivas.
      Integre ao sistemas de contabilidade para mais confiabilidade nos dados dos custos.
    </p> 
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      <img src={custos} alt="billing" className={`${styles.boxWidthImage}`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
    <section className={layout.especialSectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={controle} alt="billing" className={`${styles.boxWidthImage} ${styles.boxWidthImage} relative z-[5]`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
    <h2 className={styles.heading2}>
      Controle
      </h2>
    <p className={`${styles.paragraph}`}>
      Aqui se concentrarão os dados necessários para as tomadas de decisões estratégicas. 
      
      
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