import styles, { layout } from "../../../style";
import Button from "../../../Layout/components/Button";

const card = `${import.meta.env.VITE_APP_STATIC}/1.svg`


const CardDeal = () => (
  <section id="carddeal" className={`flex-1 flex justify-center items-start flex-col px-6 ${layout.sectionHome}`}>
    <div className={`${layout.paddingText} ${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Avalie as melhores marcas e fornecedores<br className="sm:block hidden" /> em alguns
        passos
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Escolha as marcas que demonstram o melhor desempenho na sua área de ação e 
        de empresas prestadoras de serviços que atendam aos níveis de qualidade ideais.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} sm:block hidden`}>
      <img src={card} alt="card" className={`${styles.boxWidthImageLarge} ${layout.hiddenImageOnSmall}`} />
    </div>
  </section>
);

export default CardDeal;
