import styles, { layout } from "../../../style";
import GetStarted from "./GetStarted";

const link = import.meta.env.VITE_APP_STATIC
const discount = `${link}/Discount.webp`
const hero = `${link}/hero.webp`


const Hero = () => {
  return (
    <>
    <section id="home" className={`flex md:flex-row flex-col px-6 sm:pt-8 pt-8 pb-2`}>
      <div className={`flex-1 ${styles.flexStartSpace2} ${styles.paddingXHome} flex-col px-6`}>
        <div className={`flex flex-row items-center px-6 bg-discount-gradient rounded-[0.625rem]`}>          
        <img fetchpriority="low" src={discount} alt="discount" className="w-[2rem] h-[2rem]" />
          <p className={`font-poppins font-normal text-white text-[1.125rem] leading-[1.925rem] ml-2`}>
            <span className="text-white">20%</span> Desconto no{" "}
            <span className="text-white">1 mês</span> de contratação.
          </p>
        </div>

        <div className={`sm:pt-8 pt-8 pb-2 mt-3 flex flex-row justify-between items-center w-full`} >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[4.5rem] text-[3.25rem] text-gray">
           Reduza<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Custos</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <div >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[4.1rem] text-[2.25rem] text-gray">
            Racionalmente.
          </h1>
          <p className={`${styles.paragraph} max-w-[29.375rem] `}>
            Otimize seus planos de manutenção, gerêncie recursos vitais e reduza os
            custos da sua frota com Siclope ERP
          </p>
      </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0  relative`}>
        <img src={hero} alt="" className={`${styles.boxWidthImage} mb-10`} />
     

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
    </>
  );
};

export default Hero;
