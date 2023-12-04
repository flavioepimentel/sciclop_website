import styles, { layout } from "../../style";
import { notebook_mocukp } from "../../assets";
import  CTA  from "../../components/CTA"
import  Button  from "../../components/Button"


const Maintenance = () => {
  return (
  <> 
  <h1>Manutenção</h1>
   <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}></h2>
    <h2 className={styles.heading2}>
      Pneus
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Pneus, um componente significativo no custo operacional, agora podem ser gerenciados de maneira inteligente. 
      Nosso módulo exclusivo não apenas controla o desempenho dos pneus, mas também fornece dados cruciais para escolher 
      o item ideal para cada aplicação, visando sempre o menor custo operacional padrão.
    </p>
    </div>
  </section>
  <section className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Mecânica
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] ">
      Embora pareça redundante, este módulo tem por finalidade o acompanhamento de itens finos do processo mecânico quando for de interesse do cliente. Caso exista ou a empresa resolva por montar por exemplo uma sala de motores destinada a desmontar o componente, analisar a sua falha determinando e controlando a prestação de serviços de retíficas, com posterior montagem e testes ou uma sala dedicada à manutençao de sistemas hidráulicos como comandos, transmissões e conversores de torque, aqui estarão os recursos para registro e controle desse processo.
      Liga-se aos módulos de abastecimento, almoxarifado, compras, oficina.
    </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
   <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={notebook_mocukp} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}></h2>
    <h2 className={styles.heading2}>
      Material rodante
      </h2>
    <p>
      Semelhante ao item pneus, o material rodante de tratores sobre esteiras, representa um dos maiores itens de custo operacional para esse tipo de equipamento.
      Tido como um sistema bruto, o aprofundamento no assunto revela um item bastante delicado em seu trato relativo a custos onde um pequeno desajuste redunda em um aumento considerável nas despesas por recuperação e pela redução do tempo de produção. Assim medições e acompanhamento de desgastes podem previnir problemas, bem como recuperaçoes feitas de forma técnica, auxiliarão o atingimento de uma quantidade consideravelmente maior do número de horas trabalhadas sem paradas desnecessárias.
    </p>
    </div>
  </section> 
  <CTA />
  </>
  )
};

export default Maintenance;