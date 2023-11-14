import { card } from "../../../assets";
import styles, { layout } from "../../../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 ${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Avalie as melhores marcas e fornecedores<br className="sm:block hidden" /> em alguns
        passos
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Escolha as marcas que demonstram o melhor desempenho na sua área de ação e 
        de empresas prestadoras de serviços que atendam aos níveis de qualidade ideais.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
