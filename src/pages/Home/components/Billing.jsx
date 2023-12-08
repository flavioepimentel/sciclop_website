import { bill } from "../assets";
import styles, { layout } from "../../../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverseHome}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className={`${styles.boxWidthImage}`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Controle facilmente <br className="sm:block hidden" /> finanças e operação
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Permite a segregação de informações estratégicas para decisões 
        em sinergia com o objetivo de produção de testes específicos voltados 
        à mudança de processos avaliando resultados operacionais.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;
