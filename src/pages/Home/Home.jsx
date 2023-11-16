import styles from "../../style";
import { Billing, Business, CardDeal, Clients, CTA, Stats, Testimonials, Hero } from "../../components";

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
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