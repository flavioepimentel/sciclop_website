import { features } from "../constants";
import styles, { layout } from "../../../style";
import Button from "../../../Layout/components/Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img fetchpriority="low" src={icon} alt="star" className={`${styles.iconeListStyle}`} />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={`flex-1 flex justify-center items-start flex-col px-6 ${layout.sectionHome}`}>
    <div className={`${layout.sectionInfo} ${layout.paddingText}`}>
      <h2 className={styles.heading2}>
        Gerencie a frota, <br className="sm:block hidden" /> 
        em tempo real.
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Nós fornecemos o conhecimento aprofundado sobre o que impacta o custo 
        da sua frota, para o gerenciamento instantâneo das causas de sua 
        variação e o treinamento no uso inteligente das informações.
      </p>

      <Button styles={`text-white mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
