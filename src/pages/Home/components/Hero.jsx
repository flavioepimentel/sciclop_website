import styles, { layout } from "../../../style";
import { discount, hero } from "../assets";
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingYHome}`}>
      <div className={`${layout.paddingText} flex-1 ${styles.flexStartSpace} ${styles.paddingXHome} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center px-4 bg-discount-gradient rounded-[10px]`}>          
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-white">20%</span> Desconto no{" "}
            <span className="text-white">1 Mês</span> de Contratação
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[4.5rem] text-[3.25rem] text-gray">
           Reduza<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Custos</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <div className="mt-1">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[4.1rem] text-[3.25rem] text-gray">
            Racionalmente.
          </h1>
          <p className={`${styles.paragraph} max-w-[29.375rem] `}>
            Otimize seus planos de manutenção, gerêncie recursos vitais e reduza os
            custos da sua frota com Siclope ERP
          </p>
      </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero} alt="" className={`${styles.boxWidthImage}`} />
     

        {/* gradient start */}
        <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[70%] h-[70%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[40%] h-[10%] right-15 bottom-15 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
