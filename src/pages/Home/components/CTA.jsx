import styles from "../../../style";
import ButtonReverse from "./ButtonReverse";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Entre em contato agora!</h2>
      <p className={`${`"font-poppins font-normal text-white text-[18px] leading-[30.8px]"`} max-w-[470px] mt-5`}>
        Descubra tudo o que seu negócio precisa hoje para começar a economizar com uma gestão eficiente.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonReverse />
    </div>
  </section>
);

export default CTA;
