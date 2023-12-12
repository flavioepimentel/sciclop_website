import styles from "../../style";
import  CTA  from "../../Layout/components/CTA"

const HowWeDo = `${import.meta.env.VITE_APP_STATIC}/HowWeDo.svg`
const WeAre = `${import.meta.env.VITE_APP_STATIC}/WeAre.svg`
const Public = `${import.meta.env.VITE_APP_STATIC}/Public.svg`
const Propusel = `${import.meta.env.VITE_APP_STATIC}/Propusel.svg`


const About = () => {
  return ( 
    <>
    <div className="w-full overflow-hidden">
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Propusel/>
        <WeAre/>
        <HowWeDo/>
        <Public/>
        <CTA />
        </div>
      </div>
    </div>
    </>
  )
};

export default About;