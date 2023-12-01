const Modulos = () => {
  return (
  <> 
  <h1>Modulos</h1>
  <section id="modulos">
    <h2>Veículos</h2>
      <p>
        Contém todas as iformações cadastrais da frota sob controle do sistema. Armazena também os dados básicos de operação de grande parte dos módulos operantes.
        Tem as ligações para cada uma das funções de controle de recursos da frota como combustíveis, pneus, filtros e lubrificantes, combustíveis etc. É a base de operação de todo o sistema.
      </p>
  </section>
  <section>
    <h2>Postos</h2>
      <p>
        Os clientes que tiverem em suas estruturas operacionais postos próprios de abastecimento, terão em mãos todos os dados táticos e estratégicos deste recurso, pois lida com um dos itens de maior relevância na estrutura de custos operacionais que é o combustível.
        Garantir a utilização ótima deste recurso torna-se de extrema valia. O módulo acompanha os estoques em cada tanque da empresa, planeja e avisa sobre eventos como conferência física de estoque, aferição de bombas de abastecimento, além de acompanhar a qualidade do material que chega dos distribuidores, avisando previamente em caso de irregularidades.
        Liga-se ao módulo de materiais (almoxarifado) e ao de abastecimento.
      </p>
  </section>
  <section>
    <h2>Abastecimentos</h2>
    <p>
      Irmão siamês do módulo de postos, acompanha e fiscaliza todos os abastecimentos feitos em postos internos bem como em postos externos cadastrados. Constrói a espinha dorsal de todo o sistema, uma vez que todos os eventos ocorrem em alguma quilometragem ou horagem do equipamento e este módulo tem a responsabilidade de criar essa estrutura de forma confiável. Para tanto é a prova de quebras de odômetros ou horímetros, sua troca ou virada após o atingimento de valores limites.
      Fornece informações sobre ocorrência de excessos que possibilitam ações corretivas sejam de origem mecânica ou operacional.
      Liga-se aos módulos de postos, veículos, materiais (almoxarifado), lubrificação e a todos os demais módulos, pois como dito, dá origem ao principal suporte do sistema que é a quilometragem ou horas acumuladas.
    </p>
  </section>
  <section>
    <h2>Lubrificação</h2>
    <p>
      Inicialmente usa-se a periodicidade de troca de lubrificantes e filtros indicada pelo fabricante que é controlada e fornecida pelo módulo de abastecimento.
      Para isso todos os compartimentos são cadastrados com suas características de capacidade, tipo de óleo e períodos de intervenção. Com as informações fornecidas pelo módulo de abastecimento (a quilometragem ou horas), o sistema escala as trocas de óleo de filtros e uma vez integrado ao módulo de materiais, já requisita os filtros que serão utlizados em cada equipamento vencido e encaminha as ordens de troca para os responsáveis determinados.
      Liga-se ao módulo de veículos, abastecimento, materiais, custos.
    </p>
  </section>
  <section>
    <h2>Administração</h2>
    <p>
      Classifica-se como administração o departamento destinado ao controle de manutenção da frota que concentra todas as informações das ocorrências relevantes bem como expede todas as ordens de intervenção programadas e/ou necessárias à perfeita operação dos equipamentos.
      Este módulo tem o recurso de determinar todas as margens de erro permitidas na operação como por exemplo a divergência máxima nas médias dos equipamentos dentro da qual a média ainda é considerada como normal. Limite máximo de divergência na operação de postos quando da medida física dos estoques ou da descarga dos caminhões de fornecedores de combustíveis e muito mais. É nesse módulo que os recursos da empresa em postos próprios ou terceiros são ativados ou desativados por exemplo.
    </p>
  </section>
  <section>
    <h2>Laboratório</h2>
    <p>
      A análise de óleo lubrificante retirada de um compartimento, fornece informações preventivas importantíssimas sobre o estado do compartimento, da mesma maneira que um exame de sangue fornece dados sobre a nossa saúde. Uma vez implantado em calibrado, permite acompanhar ocorrências mecânicas ou operacionais que podem reduzir significativamente a vida do compartimento, como a entrada de poeira em um motor ou a operação com constante superaquecimento ou um débito anormal de diesel por falha em bicos ou bomba injetora mesmo um desgaste excessivo nas engrenagens ou rolamentos de uma caixa de mudanças e muito mais.
      Liga-se aos módulos de abastecimento, mecânica, custos.
    </p>
  </section>
  <section>
    <h2>Almoxarifado</h2>
    <p>
      Como parte do sistema de materiais, controla todos os itens em estoque. Parte da criação de um espelho do almoxarifado real, com identificação de ruas, preteleiras e escaninhhos que permite identificar e posicionar cada item em estoque. Permite a saída de cada unidade de consumo mediante uma requisiçao previamente aprovada por colaboradores determinados, transferir itens entre almoxarifados, acompanhar consumo, obsolescência de materias e controla o custo mediante a curva ABC. Matém inventário rotativo baseado na curva de valores (ABC). Com ligação ao módulo de administração, permite a escolha de movimentação do tipo PEPS. UEPS ou preço médio.
      Liga-se aos módulos de compras, custos, lubrificação, Oficiana, administração e postos - uma vez que controla o estoque de combustíveis como um item em estoque.
    </p>
  </section>
  <section>
    <h2>Compras</h2>
    <p>
      Também parte do sistema de materiais, acompanha todas as aquisições de peças e serviços feitas para atendimento das necessidades da frota. Partindo de uma requisição, passa por todo um processo de aprovação e contação, finalizando com a checagem na entrega do que foi adquirido. Todo o processo é feito online sem nenhuma intervenção de papel. Pode haver um sistema para cada unidade da empresa ou um setor central de compras. Usa por base o histórico de aquisições o que permite análise de desenpenho do processo.
      Liga-se aos módulos de almoxarifado, oficina, administração e outros com menor relevância.
    </p>
  </section>
  <section>
    <h2>Oficina</h2>
    <p>
      Este módulo acompanha todas as ocorrências da frota em termos mecânicos criando histórico de quebras e reparos. Registra o consumo de peças, serviços externos, internos bem como a utilização da mão de obra. Assim elétrica, hidráulica, mecânica, caldeiraria, funilaria e pintura, torno e solda e demais, permanecem nos registros de cada unidade, permitindo análises futuras para melhoria de todo o processo. 
      Como o sistema prevê a criação de planos de manutençao preventiva, o histórico criado por esse módulo associado à informação da quilometragem/horas das quebras, gera um processo de aperfeiçoamento da preventiva que, com o decorrer do tempo, tende a reduzir drasticamente as corretivas e socorros em campo.
      Liga-se aos módulos de almoxarifado, abastecimento, custos, compras, administração, laboratório.
    </p>
  </section>
  <section>
    <h2>Pneus</h2>
    <p>
      Juntamente com combustíveis representa o maior percentual no custo operacional na maioria das atividades envolvendo frotas. Este módulo permite controlar o desempenho dos pneus com base em suas posições nos veículos, bem como nas aplicações dos equipamentos, fornecendo assim base de dados que culmina na possibilidade de definição de qual o melhor item para cada aplicação tendo por padrão o menor custo operacional. 
      Da mesma forma, as companhias dedicadas ao reparo dos pneumáticos (as ressoladoras) têm o seu desempenho fiscalzado facilitando as negociações e permitindo a melhoria do processo de ressolagem tenho em vista a redução de custos pelo aumento da quilometragem.
      Liga-se aos módulos de abastecimento, compras, almoxarifado, oficina.
    </p>
  </section>
  <section>
    <h2>Mecânica</h2>
    <p>
      Embora pareça redundante, este módulo tem por finalidade o acompanhamento de itens finos do processo mecânico quando for de interesse do cliente. Caso exista ou a empresa resolva por montar por exemplo uma sala de motores destinada a desmontar o componente, analisar a sua falha determinando e controlando a prestação de serviços de retíficas, com posterior montagem e testes ou uma sala dedicada à manutençao de sistemas hidráulicos como comandos, transmissões e conversores de torque, aqui estarão os recursos para registro e controle desse processo.
      Liga-se aos módulos de abastecimento, almoxarifado, compras, oficina.
    </p>
  </section>
  <section>
    <h2>Custos</h2>
    <p>
      Centro de convergência do que ocorre na maioria dos módulos, pode receber também informações de outros departamentos da empresa com afinalidade de criar uma grade de custos de cada equipamento da frota, divididos em custos fixos e variávies, e dentro de cada um suas subdivisões, o que permite a tomada de decisões estratégicas como a compra de determinadas marcas de equipamentos ou a escolha de fornecedores ou ainda o momento de venda de equipamentos da frota por razões de custos, bem assim também decisões táticas como mudança de algum equipamento em algum tipo de operação, alteração em processos produtivos aumento de fiscalização em determinadas operações e muito mais tendo por base o custo operacional.
      Liga-se a todos os módulos recebendo informações ou fornecendo dados táticos para tomada de decisão. Pode receber informações de sistemas de contabilidade para o ajuste dos dados do custo fixo, por exemplo.
    </p>  
  </section>
  <section>
    <h2>Controle</h2>
    <p>
      Na hipótese de a empresa possuir um departamento para recebimento das informações de manutenção e emissão de ordens de mesmo nível e que seja independente da administração, que se ocupa das decisões estratégicas, aqui se concentrarão os dados necessários para as tomadas de decisão. Eventos de troca de óleo e filtros, refinamento de planos de preventiva, acompanhamento de ordens de serviços de oficina, desempenho de pneus, acompanhamento de serviços externos, como recuperações e socorros etc.
      Liga-se aos módulos de oficina, pneus, almoxarifado, compras, mecânica, laboratório, postos.
    </p>
  </section>
  <section>
    <h2>Material rodante</h2>
    <p>
      Semelhante ao item pneus, o material rodante de tratores sobre esteiras, representa um dos maiores itens de custo operacional para esse tipo de equipamento.
      Tido como um sistema bruto, o aprofundamento no assunto revela um item bastante delicado em seu trato relativo a custos onde um pequeno desajuste redunda em um aumento considerável nas despesas por recuperação e pela redução do tempo de produção. Assim medições e acompanhamento de desgastes podem previnir problemas, bem como recuperaçoes feitas de forma técnica, auxiliarão o atingimento de uma quantidade consideravelmente maior do número de horas trabalhadas sem paradas desnecessárias.
    </p>
  </section> 
  </>
  )
};

export default Modulos;