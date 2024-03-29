import styles, { layout } from "../../../style";


const team= `${import.meta.env.VITE_APP_STATIC}/team.webp`

const WeAre = () => {
    return (
        <>
        <section id="weare" className={layout.especialSectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={team} alt="billing" className={`pb-16 sm:pb-0 ${styles.boxWidthImageSmall}`} />

        
          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>
        <div className={`${layout.paddingTextReverse} ${layout.sectionInfo}`}>
            <h1 className={styles.heading2}>Quem somos</h1>
                <p className={`${styles.paragraph}`}>
                    O Siclope é um sistema tipo ERP projetado para fornecer informações táticas e estratégicas, 
                    integrando módulos para administrar eficientemente a frota em tempo real. Desenvolvido por 
                    nossa equipe, o sistema prioriza a produção de dados precisos, eliminando praticamente 
                    o uso de papel.
                </p>
                <p className={`${styles.paragraph}`}>
                    Em um nível mais elevado, o Siclope fornece dados estratégicos,
                    isso inclui a seleção de marcas com melhor desempenho e a escolha de 
                    prestadores de serviços que atendam aos padrões ideais de qualidade. 
                    Com os relatórios gerados as decisões diárias são embasadas em fatos. 
                    O sistema atua na identificação e intervenção nas causas antes que 
                    produzam efeitos negativos.
                </p>
                <p className={`${styles.paragraph}`}>
                    Além disso, o sistema permite a segregação de informações específicas de testes, avaliando 
                    resultados operacionais e fornecendo dados relevantes para diversos departamentos, como financeiro, 
                    operacional, estratégico e administrativo.
                </p>
            </div>
        </section>
        </>
    )
}

export default WeAre