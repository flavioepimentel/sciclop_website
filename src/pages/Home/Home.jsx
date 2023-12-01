import styles from "../../style";
import { Billing, Business, CardDeal, Clients, Stats, Testimonials, Hero } from "../../components";
import {  CTA } from "../../components/CTA";

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