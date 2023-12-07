import styles, { layout } from "../../style";
import { postos, abastecimento, veiculos, lub, oficina, lubrifica } from "./assets";
import  CTA  from "../../Layout/components/CTA"
import  Button  from "../../Layout/components/Button"
import { FeatureCard } from "./components/FetureCard";
import { features } from "./constants";

const Fleet = () => {
  return (
  <> 
  <section className={layout.sectionReverse}>
    <div className={` ${layout.sectionImgReverse} `}>
      <img src={veiculos} alt="billing" className=" w-[100%] h-[100%] relative z-[5]" />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Veículos</h2>
      <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
        Contém todas as informações cadastrais da frota sob controle do sistema. Armazena também os dados básicos de operação de grande parte dos módulos operantes.
      </p>
      <Button />
      </div>

  </section>
      <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>

    <h2 className={styles.heading2}>
      Postos
      </h2>
      <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
        O módulo acompanha os estoques em cada tanque da empresa, planeja e avisa sobre eventos como conferência 
        física de estoque, aferição de bombas de abastecimento, acompanha qualidade do material que chega dos 
        distribuidores, avisando previamente em caso de irregularidades.
      </p>
      </div>
    </div>
    <div className={`${layout.sectionImgReverse} ${layout.hiddenImageOnSmall}`}>
      <img src={postos} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
    <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>

    <h2 className={styles.heading2}>
      Abastecimentos
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      Acompanha e fiscaliza todos os abastecimentos feitos em postos internos ou externos. 
      Este módulo tem a responsabilidade de criar uma estrutura confiável que serve como base para
      indicadores chaves. Além de fornecer informações sobre ocorrência de excessos que permitem ações corretivas na mecânica ou no operacional.
    </p>
    </div>
  </div>
  <div className={layout.sectionImgReverse}>
      <img src={abastecimento} alt="abastecimento" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
   <section className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} ${layout.hiddenImageOnSmall}`}>
      <img src={lub} alt="lub" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>Lubrificação</h2>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>

    <h2 className={styles.heading2}>
      Laboratório
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      A análise de óleo lubrificante fornece informações preventivas importantíssimas. Permite acompanhar ocorrências que podem reduzir significativamente 
      a vida do compartimento.
    </p>
    </div>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={lubrifica} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={oficina} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>
      Oficina
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      Acompanhe todas as manutenções por histórico de quebras e reparos, consumo de peças e serviços. 
      Cada ocorrência permanece nos registros permitindo análises para melhorias. 
      O módulo prevê a criação de planos de manutençao preventiva e gera um processo de aperfeiçoamento, 
      com o objetivo de reduzir as corretivas e socorros em campo.
    </p>
    </div>
    </div>
  </section>
  <CTA />
  </>
  )
};

export default Fleet;