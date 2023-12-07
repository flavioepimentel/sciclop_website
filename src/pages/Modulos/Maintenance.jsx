import styles, { layout } from "../../style";
import { pneu, mecanica, rodante } from "./assets";
import  CTA  from "../../components/CTA"
import  Button  from "../../components/Button"


const Maintenance = () => {
  return (
  <> 
   <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={pneu} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Pneus
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Um componente significativo no custo operacional, agora podem ser gerenciados de maneira inteligente. 
      Nosso módulo exclusivo não apenas controla o desempenho dos pneus, mas também fornece dados cruciais para escolher 
      o item ideal para cada aplicação, visando sempre o menor custo operacional padrão.
    </p>
    <Button />
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>
      Mecânica
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      Este módulo é seu aliado ao criar salas especializadas para desmontagem, análise de falhas, retífica e testes de motores, ou para a manutenção de sistemas 
      hidráulicos, incluindo comandos, transmissões e conversores de torque. Oferecemos recursos abrangentes para registrar e controlar todo o processo.
    </p>
    </div>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={mecanica} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
   <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={rodante} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h2 className={styles.heading2}>
      Material rodante
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-10">
      Registre medições e acompanhe os desgastes, previna-se de problemas, 
      nosso módulo auxiliarão o atingimento de um maior do número de horas trabalhadas sem paradas desnecessárias.
    </p>
    </div>
    </div>
  </section> 
  <CTA />
  </>
  )
};

export default Maintenance;