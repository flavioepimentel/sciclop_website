import styles, { layout } from "../../../style";

const proposel = `${import.meta.env.VITE_APP_STATIC}/proposel.png`

const Propusel = () => {
    return (
        <>
        <section id="proposel" className={`flex md:flex-row flex-col pt-16 sm:pt-20 `}>
            <div className={`${layout.sectionInfoCenter} sm:pt-0 pt-16  ${layout.paddingText}`}>
                <h1 className={`${styles.heading2}`}>Nossa Proposta</h1>
                <p className={`${styles.paragraph}`}>
                    A inteligência de negócios possibilita uma redução racional de custos operacionais. 
                    O acesso a informações precisas e em tempo real oferece um entendimento profundo dos fatores 
                    que impactam os custos da frota, permitindo um gerenciamento instantâneo das causas de variação. 
                    Com treinamento no uso dessas informações, é possível alcançar o equilíbrio ideal entre máxima produtividade e custos mínimos.
                </p>
            </div>
            <div className={layout.sectionImgReverse}>
              <img src={proposel} alt="billing" className={`${styles.boxWidthImageLarge}`} />
              

              {/* gradient start */}
              <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
              {/* gradient end */}
            </div>
        </section>
        </>
    )
}

export default Propusel