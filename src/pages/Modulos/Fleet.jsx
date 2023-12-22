import styles, { layout } from "../../style";
import CTA from "../../Layout/components/CTA";
import Button from "../../Layout/components/Button";
import { FeatureCard } from "./components/FetureCard";
import { features } from "./constants";

const link = import.meta.env.VITE_APP_STATIC;

const postos = `${link}/postos.webp`;
const abastecimento = `${link}/abastecimento.webp`;
const veiculos = `${link}/veiculos.webp`;
const lub = `${link}/lub.webp`;
const oficina = `${link}/oficina.webp`;
const lubrifica = `${link}/lubrifica.webp`;

const Fleet = () => {
	return (
		<>
			<section id="veiculos" className={`pt-16 sm:pt-0 ${layout.especialSectionReverse}`}>
				<div className={` ${layout.sectionImgReverse} `}>
					<img
						src={veiculos}
						alt="billing"
						className={`${styles.boxWidthImage} `}
					/>
					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
				</div>
				<div className={`sm:pt-0 pt-16 ${layout.sectionInfoCenter} md:ml-10`}>
					<h2 className={styles.heading2}>Veículos</h2>
					<p className={`${styles.paragraph} mb-5`}>
						Contém todas as informações cadastrais da frota sob controle do
						sistema. Armazena também os dados básicos de operação de grande
						parte dos módulos operantes.
					</p>
					<Button />
				</div>
			</section>
			<section id="postos" className={layout.sectionReverse}>
				<div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
					<h2 className={styles.heading2}>Postos</h2>
					<p className={`${styles.paragraph}`}>
						O módulo acompanha os estoques em cada tanque da empresa, planeja e
						avisa sobre eventos como conferência física de estoque, aferição de
						bombas de abastecimento, acompanha qualidade do material que chega
						dos distribuidores, avisando previamente em caso de irregularidades.
					</p>
				</div>
				<div
					className={`${layout.sectionImgReverse} ${layout.hiddenImageOnSmall}`}
				>
					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
					<img
						src={postos}
						alt="billing"
						className={`${styles.boxWidthImage} `}
					/>
				</div>
			</section>
			<section id="abastecimento" className={`${layout.sectionReverse} mb-8`}>
				<div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
					<h2 className={styles.heading2}>Abastecimentos</h2>
					<p className={`${styles.paragraph}`}>
						Acompanha e fiscaliza todos os abastecimentos feitos em postos
						internos ou externos. Este módulo tem a responsabilidade de criar
						uma estrutura confiável que serve como base para indicadores chaves.
						Além de fornecer informações sobre ocorrência de excessos que
						permitem ações corretivas na mecânica ou no operacional.
					</p>
				</div>
				<div className={layout.sectionImgReverse}>
					<img
						src={abastecimento}
						alt="abastecimento"
						className={`${styles.boxWidthImageLarge} `}
					/>

					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
				</div>
			</section>
			<section id="lubrificacao" className={layout.sectionReverse}>
				<div
					className={`${layout.sectionImgReverse} ${layout.hiddenImageOnSmall}`}
				>
					<img src={lub} alt="lub" className={`${styles.boxWidthImageLarge}`} />

					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
				</div>
				<div className={layout.sectionInfoCenter}>
					<h2 className={`${layout.paddingText} ${styles.heading2}`}>
						Lubrificação
					</h2>
					{features.map((feature, index) => (
						<FeatureCard key={feature.id} {...feature} index={index} />
					))}
				</div>
			</section>
			<section id="laboratorio" className={layout.sectionReverse}>
				<div className={`${layout.paddingText} ${layout.sectionInfoCenter}`}>
					<h2 className={styles.heading2}>Laboratório</h2>
					<p className={`${styles.paragraph}`}>
						A análise de óleo lubrificante fornece informações preventivas
						importantíssimas. Permite acompanhar ocorrências que podem reduzir
						significativamente a vida do compartimento.
					</p>
				</div>
				<div className={layout.sectionImgReverse}>
					<img
						src={lubrifica}
						alt="billing"
						className={`${styles.boxWidthImageSmall}`}
					/>

					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
				</div>
			</section>
			<section id="oficina" className={`${layout.especialSectionReverse}`}>
				<div className={layout.sectionImgReverse}>
					{/* gradient start */}
					<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
					<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
					{/* gradient end */}
					<img
						src={oficina}
						alt="billing"
						className={`${styles.boxWidthImage} `}
					/>
				</div>
				<div className={layout.sectionInfoCenter}>
					<h2 className={styles.heading2}>Oficina</h2>
					<p className={`${styles.paragraph}`}>
						Acompanhe todas as manutenções por histórico de quebras e reparos,
						consumo de peças e serviços. Cada ocorrência permanece nos registros
						permitindo análises para melhorias. O módulo prevê a criação de
						planos de manutençao preventiva e gera um processo de
						aperfeiçoamento, com o objetivo de reduzir as corretivas e socorros
						em campo.
					</p>
				</div>
			</section>
			<CTA />
		</>
	);
};

export default Fleet;
