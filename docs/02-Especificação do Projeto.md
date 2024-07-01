# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Visão geral:

Centralização de Eventos: Consolidar eventos de diferentes categorias (música, esportes, negócios, etc.) em um único aplicativo para conveniência dos usuários.

Facilidade de Uso: Oferecer uma interface intuitiva e amigável que permita aos usuários buscar eventos, comprar ingressos, salvar eventos em calendários pessoais e interagir com amigos.

Personalização: Utilizar dados de preferências e histórico de eventos dos usuários para fornecer recomendações personalizadas e notificações relevantes.

Segurança e Confiança: Garantir a verificação de segurança dos eventos listados e proteção das informações pessoais dos usuários.

Integração Social: Permitir que os usuários compartilhem eventos com amigos através de redes sociais integradas e vejam quem mais está interessado nos mesmos eventos.

Feedback e Avaliação: Incentivar a interação dos usuários através de avaliações e comentários sobre os eventos, ajudando na decisão de participação futura.

Suporte Multilíngue e Acessibilidade: Garantir que o aplicativo seja acessível globalmente, suportando múltiplos idiomas e sendo acessível para usuários com necessidades especiais.

Desempenho e Escalabilidade: Assegurar que o aplicativo seja robusto o suficiente para lidar com um grande volume de usuários simultâneos e eventos listados.

Compliance Legal: Cumprir com regulamentações de proteção de dados e direitos do consumidor em todas as operações do aplicativo.

Inovação Contínua: Implementar melhorias contínuas com base no feedback dos usuários e nas tendências do mercado de eventos, visando sempre proporcionar uma experiência superior.


## Personas

Adriana Lima, uma Química Industrial de 36 anos, é uma pessoa extrovertida, confiante, empática e autêntica. Ela aprecia socializar com amigos, mergulhar em livros e participar de eventos relacionados à sua área de atuação. Seu maior desejo é construir uma carreira de sucesso. Para alcançar esse objetivo, ela busca ampliar seu networking por meio da participação em eventos relevantes. Para atender às suas preferências, é crucial identificar e frequentar os eventos adequados. Adriana valoriza a sinceridade e a transparência na comunicação. Portanto, é essencial manter uma comunicação clara e direta com ela. Além disso, demonstrar um interesse genuíno por suas preocupações e oferecer soluções que atendam às suas necessidades específicas são maneiras eficazes de deixá-la satisfeita.

[Empatia 05 - Análise - Persona-1.1.docx](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-2024-1-1-ti-aw-t1-aicheck/files/15055725/Empatia.05.-.Analise.-.Persona-1.1.docx)

Lucas Alvarenga, um adolescente de 18 anos, gosta de jogar futebol, sair com os amigos e navegar nas redes sociais. Ele também trabalha com investimentos. Lucas é dinâmico, animado e cativante e tem o desejo de ter uma grande quantidade de amigos e viver uma vida plena. O que o motiva é ir a shows e conhecer novas pessoas. Os telefones celulares são essenciais para se comunicar e agendar reuniões com amigos, seja online ou pessoalmente. É fundamental priorizar sua segurança e fornecer a Lucas informações precisas sobre onde ele deseja participar de eventos para interagir com ele de forma adequada. Além disso, dar conselhos sobre como chegar ao evento pode ajudá-lo a ter uma experiência mais agradável. Por outro lado, não devemos divulgar eventos suspeitos. Isso permitirá que Lucas aproveite ao máximo seus eventos.


[Empatia 05 - Análise - Persona-2.docx](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-2024-1-1-ti-aw-t1-aicheck/files/15055754/Empatia.05.-.Analise.-.Persona-2.docx)"

## Histórias de Usuários

Adriana, que adora aprender e expandir seu networking, quer usar o app para descobrir e participar de conferências de química industrial. Ela precisa ver detalhes como palestrantes, temas e poder se inscrever facilmente.

Adriana quer compartilhar sua opinião e ler feedbacks de outros participantes sobre os eventos que ela frequenta. Isso vai ajudá-la a escolher os melhores eventos para suas necessidades profissionais.

Lucas, que adora música e fazer novas amizades, quer usar o app para descobrir shows e festivais perto dele. Ele precisa de informações como gênero musical, localização e até ver quais amigos estão interessados nos mesmos eventos.

Lucas quer se sentir seguro ao participar de eventos. Ele espera encontrar no app informações detalhadas sobre a segurança no local, dicas de segurança pessoal e alertas sobre quaisquer mudanças de última hora nos eventos que planeja participar.

|EU COMO... `Camila` | QUERO/PRECISO ... `FUNCIONALIDADE`       |PARA ... `MOTIVO/VALOR`                                                           |
|--------------------|------------------------------------------|----------------------------------------------------------------------------------|
|Usuário do sistema  | Se inscrever facilmente                  | Evitar dor de cabeça e stress ao utilizá-lo                                      |
|Usuário do sistema  | Grande variedade de eventos              | Adriana pode pesquisar eventos muito específicos                                 |


|EU COMO... `Maria ` | QUERO/PRECISO ... `FUNCIONALIDADE`       |PARA ... `MOTIVO/VALOR`                                                           |
|--------------------|------------------------------------------|----------------------------------------------------------------------------------|
|Usuário do sistema  | Informações detalhada                    | Segurança do indivíduo e evitar decepção a frequentar o evento                   |
|Usuário do sistema  | Descobrir shows e festivais              | É o tipo de evento preferido do usuário                                          |


## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|------------------------------------------|-------|
|RF-001| Cadastro do Usuário                      | ALTA  | 
|RF-002| Enviar notificações personalizadas aos 
|      |usuários                                  | MÉDIA |
|RF-003| Precisão na Detecção                     | MÉDIA |
|RF-004| Suporte a diversos dispositivos          | ALTA  |
|RF-005| Suporte a diversas cidades               | ALTA  |
|RF-006| Interface Amigável                       | MÉDIA |
|RF-007| Proteção de Dados                        | MÉDIA |
|RF-008| Suporte ao Cliente                       | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel    |  MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 5s                |  BAIXA |
|RNF-003| O sistema deve ser capaza de suportar até 50.000 acessos simultaneos |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
