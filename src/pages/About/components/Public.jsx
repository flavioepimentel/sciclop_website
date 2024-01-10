import styles, { layout } from "../../../style";

const forwho = `${import.meta.env.VITE_APP_STATIC}/forwho.webp`

const Public = () => {
	return (
		<section id="public" className={layout.especialSectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img
					src={forwho}
					alt="billing"
					className={`pb-16 sm:pb-0 ${styles.boxWidthImageSmall}`}
				/>


				{/* gradient start */}
				<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
				{/* gradient end */}
			</div>
			<div className={`${layout.paddingTextReverse} ${layout.sectionInfoCenter}`}>
				<h1 className={styles.heading2}>A quem serve</h1>
				<p className={`${styles.paragraph}`}>
					O Siclope atende a qualquer empresa com uma frota de equipamentos em
					sua operação. Seja para veículos leves, como em empresas de entrega ou
					locadoras de automóveis, ou para veículos de transporte de cargas e
					passageiros, como transporte de longa distância, empresas de ônibus ou
					transporte urbano. Além disso, é útil para prestadores de serviços,
					incluindo concreteiras, construção civil, terraplanagem, entre outros.
					Com aplicação também em companhias agrícolas, pedreiras, empresas de
					perfuração de poços artesianos, o Siclope oferece uma solução para
					otimizar o custo operacional em qualquer cenário onde haja uma frota
					de equipamentos produtivos.
				</p>
			</div>
		</section>
	);
};

export default Public;
