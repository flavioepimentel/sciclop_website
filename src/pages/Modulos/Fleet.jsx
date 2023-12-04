import styles, { layout } from "../../style";
import { notebook_mocukp } from "../../assets";
import  CTA  from "../../components/CTA"
import  Button  from "../../components/Button"

const Modulos = () => {
  return (
  <> 
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Veículos</h2>
      <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
        Contém todas as informações cadastrais da frota sob controle do sistema. Armazena também os dados básicos de operação de grande parte dos módulos operantes.
      </p>
      <Button />
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
      Postos
      </h2>
      <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
        Garanta a utilização ótima deste recurso. O módulo acompanha os estoques em cada tanque da empresa, 
        planeja e avisa sobre eventos como conferência física de estoque, aferição de bombas de abastecimento, 
        acompanha qualidade do material que chega dos distribuidores, avisando previamente em caso de irregularidades.
      </p>
    </div>
  </section>
    <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Abastecimentos
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Acompanha e fiscaliza todos os abastecimentos feitos em postos internos ou externos. 
      Constrói a espinha dorsal de todo o sistema, uma vez que todos os eventos ocorrem em alguma quilometragem ou horagem do equipamento. 
      este módulo tem a responsabilidade de criar essa estrutura de forma confiável. Para tanto é a prova de quebras de odômetros ou horímetros.
      Fornece informações sobre ocorrência de excessos que possibilitam ações corretivas sejam de origem mecânica ou operacional.
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
      Lubrificação
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Inicialmente usa-se a periodicidade de troca de lubrificantes e filtros indicada pelo fabricante que é controlada e fornecida pelo módulo de abastecimento.
      Para isso todos os compartimentos são cadastrados com suas características de capacidade, tipo de óleo e períodos de intervenção. Com as informações fornecidas pelo módulo de abastecimento (a quilometragem ou horas), o sistema escala as trocas de óleo de filtros e uma vez integrado ao módulo de materiais, já requisita os filtros que serão utlizados em cada equipamento vencido e encaminha as ordens de troca para os responsáveis determinados.
    </p>
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Laboratório
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      A análise de óleo lubrificante retirada de um compartimento, fornece informações preventivas importantíssimas sobre o estado do compartimento, da mesma maneira que um exame de sangue fornece dados sobre a nossa saúde. Uma vez implantado em calibrado, permite acompanhar ocorrências mecânicas ou operacionais que podem reduzir significativamente a vida do compartimento, como a entrada de poeira em um motor ou a operação com constante superaquecimento ou um débito anormal de diesel por falha em bicos ou bomba injetora mesmo um desgaste excessivo nas engrenagens ou rolamentos de uma caixa de mudanças e muito mais.
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
      Oficina
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Acompanhe todas as ocorrências de manutenções criando histórico de quebras e reparos, consumo de peças, serviços externos, internos e a utilização da mão de obra. 
      Assim elétrica, hidráulica, mecânica, caldeiraria, funilaria e pintura, torno e solda e demais, permanecem nos registros de cada unidade, permitindo análises futuras para melhoria de todo o processo. 
      Como o sistema prevê a criação de planos de manutençao preventiva, 
      o histórico criado por esse módulo associado à informação da quilometragem/horas das quebras, 
      gera um processo de aperfeiçoamento da preventiva que, com o decorrer do tempo, tende a reduzir drasticamente as corretivas e socorros em campo.
    </p>
    </div>
  </section>
  <CTA />
  </>
  )
};

export default Modulos;