import styles, { layout } from "../../style";
import  CTA  from "../../Layout/components/CTA"
import  Button  from "../../Layout/components/Button"

const link = import.meta.env.VITE_APP_STATIC;

const pneu = `${link}/pneu.webp`
const mecanica = `${link}/mecanica.webp`
const rodante = `${link}/rodante.webp`

const Maintenance = () => {
	return (
		<>
			<section id="pneu" className={`${layout.especialSectionReverse}`}>
				<div className={layout.sectionImgReverse}>
					<img
						src={pneu}
						alt="billing"
						className={`${styles.boxWidthImage} ${layout.hiddenImageOnSmall}`}
					/>

					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
				</div>
				<div className={`${layout.sectionInfoCenter}`}>
					<h2 className={styles.heading2}>Pneus</h2>
					<p className={`${styles.paragraph} mb-5`}>
						Um componente significativo no custo operacional, agora podem ser
						gerenciados de maneira inteligente. Nosso módulo exclusivo não
						apenas controla o desempenho dos pneus, mas também fornece dados
						cruciais para escolher o item ideal para cada aplicação, visando
						sempre o menor custo operacional padrão.
					</p>
					<Button />
				</div>
			</section>
			<section id="mecanica" className={`flex md:flex-row flex-col-reverse sm:py-16 py-0`}>
				<div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
					<h2 className={styles.heading2}>Mecânica</h2>
					<p className={`${styles.paragraph}`}>
						Este módulo é seu aliado ao criar salas especializadas para
						desmontagem, análise de falhas, retífica e testes de motores, ou
						para a manutenção de sistemas hidráulicos, incluindo comandos,
						transmissões e conversores de torque. Oferecemos recursos
						abrangentes para registrar e controlar todo o processo.
					</p>
				</div>
				<div className={layout.sectionImgReverse}>
					<img
						src={mecanica}
						alt="billing"
						className={`${styles.boxWidthImage}`}
					/>

					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
				</div>
			</section>
			<section id="rodante" className={layout.especialSectionReverse}>
				<div className={layout.sectionImgReverse}>
					<img
						src={rodante}
						alt="billing"
						className={`${styles.boxWidthImage}`}
					/>

					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
				</div>
				<div className={layout.sectionInfoCenter}>
					<h2 className={styles.heading2}>Material rodante</h2>
					<p className={`${styles.paragraph}`}>
						Registre medições e acompanhe os desgastes, previna-se de problemas,
						nosso módulo auxiliarão o atingimento de um maior do número de horas
						trabalhadas sem paradas desnecessárias.
					</p>
				</div>
			</section>
			<CTA />
		</>
	);
};

export default Maintenance;
