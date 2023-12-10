import styles, { layout } from "../../../style";
import { bill } from '../assets/'

const WeAre = () => {
    return (
        <section id="weare" className={layout.especialSectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="billing" className={`${styles.boxWidthImageLarge}`} />
        
          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>
        <div className={`${layout.paddingText} ${layout.sectionInfo}`}>
            <h1 className={styles.heading2}>Quem somos</h1>
                <p className={`${styles.paragraph}`}>
                    O Siclope é um sistema tipo ERP projetado para fornecer informações táticas e estratégicas, 
                    integrando todos os módulos para administrar eficientemente a frota em tempo real, com máxima 
                    confiabilidade. Desenvolvido por nossa equipe, o sistema prioriza a produção de informações 
                    precisas, eliminando praticamente o uso de papel, e conta com a segurança e confiabilidade dos 
                    servidores da Amazon.

                    Uma vez geradas as informações, os tomadores de decisão passam por treinamento para utilizá-las, 
                    buscando compreender suas origens. Dessa forma, as decisões diárias são embasadas em fatos, 
                    administrando resultados positivos. O sistema atua na identificação e intervenção nas causas antes 
                    que produzam efeitos negativos, evitando sua perpetuação por desconhecimento.

                    Em um nível mais elevado, o Siclope fornece informações estratégicas, auxiliando na tomada de 
                    decisões alinhadas ao objetivo de produção ao menor custo. Isso inclui a seleção de marcas com 
                    melhor desempenho e a escolha de prestadores de serviços que atendam aos padrões ideais de 
                    qualidade, visando à redução de custos.

                    Além disso, o sistema permite a segregação de informações específicas de testes, avaliando 
                    resultados operacionais e fornecendo dados relevantes para diversos departamentos, como financeiro, 
                    operacional, estratégico e administrativo.
                </p>
            </div>
        </section>
    )
}

export default WeAre