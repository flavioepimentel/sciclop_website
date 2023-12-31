import { feedback } from "../constants";
import styles, { layout } from "../../../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="testimonials" className={` flex-1 flex justify-center items-start flex-col px-6 ${styles.paddingYHome} ${styles.flexCenter} flex-col relative `}>
    <div className={`${layout.paddingText} absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40`} />

    <div className={` ${layout.paddingText} w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
      <h2 className={styles.heading2}>
        Opinião de<br className="sm:block hidden" /> especialistas.
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.especialParagraph} text-left`}>
          Administrar a frota sem fonte confiável de dados é como andar às cegas em um campo minado
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
