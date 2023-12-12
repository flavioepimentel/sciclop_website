import styles from "../../style";
import { CTA } from "../../Layout/components";
import { Billing, Business, CardDeal, Hero, Testimonials } from "./components";

const Home = () => (
  <>
  <div className="w-full overflow-hidden">
    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <CTA />
  </div>
  </>
);

export default Home;