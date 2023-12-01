const Modulos = () => {
  return (
  <> 
  <h1>Frotas</h1>
  <section id="modulos">
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">Veículos</h2>
      <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Contém todas as iformações cadastrais da frota sob controle do sistema. Armazena também os dados básicos de operação de grande parte dos módulos operantes.
        Tem as ligações para cada uma das funções de controle de recursos da frota como combustíveis, pneus, filtros e lubrificantes, combustíveis etc. É a base de operação de todo o sistema.
      </p>
  </section>
  <section>
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">Postos</h2>
      <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Os clientes que tiverem em suas estruturas operacionais postos próprios de abastecimento, terão em mãos todos os dados táticos e estratégicos deste recurso, pois lida com um dos itens de maior relevância na estrutura de custos operacionais que é o combustível.
        Garantir a utilização ótima deste recurso torna-se de extrema valia. O módulo acompanha os estoques em cada tanque da empresa, planeja e avisa sobre eventos como conferência física de estoque, aferição de bombas de abastecimento, além de acompanhar a qualidade do material que chega dos distribuidores, avisando previamente em caso de irregularidades.
        Liga-se ao módulo de materiais (almoxarifado) e ao de abastecimento.
      </p>
  </section>
  <section>
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
      Abastecimentos
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Irmão siamês do módulo de postos, acompanha e fiscaliza todos os abastecimentos feitos em postos internos bem como em postos externos cadastrados. Constrói a espinha dorsal de todo o sistema, uma vez que todos os eventos ocorrem em alguma quilometragem ou horagem do equipamento e este módulo tem a responsabilidade de criar essa estrutura de forma confiável. Para tanto é a prova de quebras de odômetros ou horímetros, sua troca ou virada após o atingimento de valores limites.
      Fornece informações sobre ocorrência de excessos que possibilitam ações corretivas sejam de origem mecânica ou operacional.
      Liga-se aos módulos de postos, veículos, materiais (almoxarifado), lubrificação e a todos os demais módulos, pois como dito, dá origem ao principal suporte do sistema que é a quilometragem ou horas acumuladas.
    </p>
  </section>
  <section>
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
      Lubrificação
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Inicialmente usa-se a periodicidade de troca de lubrificantes e filtros indicada pelo fabricante que é controlada e fornecida pelo módulo de abastecimento.
      Para isso todos os compartimentos são cadastrados com suas características de capacidade, tipo de óleo e períodos de intervenção. Com as informações fornecidas pelo módulo de abastecimento (a quilometragem ou horas), o sistema escala as trocas de óleo de filtros e uma vez integrado ao módulo de materiais, já requisita os filtros que serão utlizados em cada equipamento vencido e encaminha as ordens de troca para os responsáveis determinados.
      Liga-se ao módulo de veículos, abastecimento, materiais, custos.
    </p>
  </section>
  <section>
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
      Laboratório
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      A análise de óleo lubrificante retirada de um compartimento, fornece informações preventivas importantíssimas sobre o estado do compartimento, da mesma maneira que um exame de sangue fornece dados sobre a nossa saúde. Uma vez implantado em calibrado, permite acompanhar ocorrências mecânicas ou operacionais que podem reduzir significativamente a vida do compartimento, como a entrada de poeira em um motor ou a operação com constante superaquecimento ou um débito anormal de diesel por falha em bicos ou bomba injetora mesmo um desgaste excessivo nas engrenagens ou rolamentos de uma caixa de mudanças e muito mais.
      Liga-se aos módulos de abastecimento, mecânica, custos.
    </p>
  </section>
  <section>
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
      Oficina
      </h2>
    <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Este módulo acompanha todas as ocorrências da frota em termos mecânicos criando histórico de quebras e reparos. Registra o consumo de peças, serviços externos, internos bem como a utilização da mão de obra. Assim elétrica, hidráulica, mecânica, caldeiraria, funilaria e pintura, torno e solda e demais, permanecem nos registros de cada unidade, permitindo análises futuras para melhoria de todo o processo. 
      Como o sistema prevê a criação de planos de manutençao preventiva, o histórico criado por esse módulo associado à informação da quilometragem/horas das quebras, gera um processo de aperfeiçoamento da preventiva que, com o decorrer do tempo, tende a reduzir drasticamente as corretivas e socorros em campo.
      Liga-se aos módulos de almoxarifado, abastecimento, custos, compras, administração, laboratório.
    </p>
  </section>
  </>
  )
};

export default Modulos;