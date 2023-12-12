import styles, { layout } from "../../../style";

const bill = `${import.meta.env.VITE_APP_STATIC}/bill.svg`


const HowWeDo = () => {
    return (
        <>
        <section id="howwedo" className={layout.section}>
            <div className={`${layout.paddingText} ${layout.sectionInfoCenter} `}>
                <h1 className={styles.heading2}>O que fazemos</h1>
                <p className={`${styles.paragraph}  mt-3`}>
                    Iniciamos com uma análise abrangente das condições operacionais do cliente, considerando o 
                    tipo de operação, variados equipamentos, serviços oferecidos, e a presença de recursos 
                    como abastecimento próprio, oficina interna, centros de concentração de frotas, 
                    estoque de peças, e equipe de manutenção.

                    Esses dados são essenciais para configurar o Siclope, e com a colaboração da equipe 
                    do cliente, desenvolvemos um cronograma de implantação e treinamento. Durante esse 
                    período, realizamos treinamentos simultâneos, testes parciais e ajustes para otimizar 
                    a operação.

                    O prazo de implantação é estabelecido após a definição das condições iniciais e a 
                    determinação dos módulos a serem implantados. Oferecemos dois 
                    tipos de contrato, <strong> baseado na demanda </strong> ou baseado na <strong> meta de redução de custos</strong>.
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
        </>
    )
}

export default HowWeDo;