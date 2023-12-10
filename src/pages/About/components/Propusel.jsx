import styles, { layout } from "../../../style";
import { bill } from '../assets/'

const Propusel = () => {
    return (
        <section id="proposel" className={layout.section}>
            <div className={`${layout.paddingText} ${layout.sectionInfo}`}>
                <h1 className={styles.heading2}>Proposta</h1>
                <p className={`${styles.paragraph}`}>
                    Nossa proposta pode ser resumida em uma única frase: Redução racional de custos operacionais pela utilização de tecnologia da informação 
                    e pelo treinamento de pessoal. Acreditamos que o conhecimento aprofundado sobre o que impacta o custo de uma frota, permite o 
                    gerenciamento instantâneo das causas de sua variação e com o treinamento no uso de tais informações, atingir o equilíbrio entre máxima 
                    produtividade e mínimo custo
                </p>
            </div>
            <div className={layout.sectionImgReverse}>
              <img src={bill} alt="billing" className={`${styles.boxWidthImageLarge}`} />

              {/* gradient start */}
              <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
              {/* gradient end */}
            </div>
        </section>
    )
}

export default Propusel