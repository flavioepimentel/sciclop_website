import styles from "../../style";
import { Billing, Business, CardDeal, CTA, Testimonials, Hero } from "../../components";

const Home = () => (
  <div className="w-full overflow-hidden">
    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
        {/* <Stats /> */}
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
  </div>
);

export default Home;