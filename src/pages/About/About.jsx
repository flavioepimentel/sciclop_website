import { HowWeDo, WeAre, Public, Propusel } from './components/'
import styles from "../../style";
import  CTA  from "../../Layout/components/CTA"

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