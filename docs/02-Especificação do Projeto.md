# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Visão geral:

> - 1)Algoritmos de Recomendação: Usamos algoritmos de recomendação baseados em aprendizado de máquina para sugerir eventos aos usuários com base em seus interesses, históricos de navegação e preferências anteriores. A filtragem colaborativa, a filtragem baseada em conteúdo e os sistemas de recomendação híbridos podem fazer parte disso. 
> - 2)Processamento de Texto: Analisamos descrições de eventos usando técnicas de processamento de texto para encontrar palavras-chave e extrair informações pertinentes, como localização, data, hora e tipo de evento. Além de ajudar na classificação e categorização dos eventos, isso aumenta a precisão das recomendações.
> - 3)Algoritmos de Busca: Criamos algoritmos de busca eficientes para que os usuários encontrem facilmente eventos específicos. Isso permite incluir métodos de busca binária, em largura e em profundidade, combinados com algoritmos de indexação e classificação com base na relevância. 
> - 4)Análise de Dados Geoespaciais: Fornecemos aos usuários informações sobre eventos próximos à sua localização atual por meio da utilização da análise de dados geoespaciais. Isso requer o uso de algoritmos de geolocalização e análise de proximidade para identificar eventos pertinentes em uma área geográfica específica. 
> - 5)Algoritmos de Detecção de Anomalias: Usamos algoritmos de detecção de anomalias para encontrar e reduzir atividades fraudulentas ou suspeitas relacionadas à compra de ingressos ou inscrição em eventos. Detecção de padrões de comportamento incomuns, detecção de robôs e análise de transações suspeitas são exemplos de métodos que podem fazer parte disso.


## Personas

Adriana Lima, uma Química Industrial de 36 anos, é uma pessoa extrovertida, confiante, empática e autêntica. Ela aprecia socializar com amigos, mergulhar em livros e participar de eventos relacionados à sua área de atuação. Seu maior desejo é construir uma carreira de sucesso. Para alcançar esse objetivo, ela busca ampliar seu networking por meio da participação em eventos relevantes. Para atender às suas preferências, é crucial identificar e frequentar os eventos adequados. Adriana valoriza a sinceridade e a transparência na comunicação. Portanto, é essencial manter uma comunicação clara e direta com ela. Além disso, demonstrar um interesse genuíno por suas preocupações e oferecer soluções que atendam às suas necessidades específicas são maneiras eficazes de deixá-la satisfeita.

[Empatia 05 - Análise - Persona-1.1.docx](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-2024-1-1-ti-aw-t1-aicheck/files/15055725/Empatia.05.-.Analise.-.Persona-1.1.docx)

Lucas Alvarenga, um adolescente de 18 anos, gosta de jogar futebol, sair com os amigos e navegar nas redes sociais. Ele também trabalha com investimentos. Lucas é dinâmico, animado e cativante e tem o desejo de ter uma grande quantidade de amigos e viver uma vida plena. O que o motiva é ir a shows e conhecer novas pessoas. Os telefones celulares são essenciais para se comunicar e agendar reuniões com amigos, seja online ou pessoalmente. É fundamental priorizar sua segurança e fornecer a Lucas informações precisas sobre onde ele deseja participar de eventos para interagir com ele de forma adequada. Além disso, dar conselhos sobre como chegar ao evento pode ajudá-lo a ter uma experiência mais agradável. Por outro lado, não devemos divulgar eventos suspeitos. Isso permitirá que Lucas aproveite ao máximo seus eventos.


[Empatia 05 - Análise - Persona-2.docx](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-2024-1-1-ti-aw-t1-aicheck/files/15055754/Empatia.05.-.Analise.-.Persona-2.docx)"

## Histórias de Usuários

Camila contacta a empresa explica suas preocupações e necessidades. Camila enfatiza a importância de manter sua autenticidade e transparência com seus seguidores, e expressa sua preocupação com a disseminação de informações falsas em seu nome. O representante da empresa ouve atentamente suas preocupações e explica os serviços que podem oferecer para proteger sua identidade e reputação online.

Camila estava viajando de carro quando ficou sabendo de um vídeo falso a envolvendo em que seus seguidores estão achando que é real, a viagem é longa e ela teme a repercussão enquanto não poder tomar providências

Maria está querendo aproveitar seu tempo de aposentada para utilizar mais da internet, ao mesmo tempo ela teme ser vitima de criminosos virtuais, ela pesquisa por serviços que podem auxilia-la

Maria baixou o aplicativo, mas ainda possui várias dúvidas de como usá-lo 

|EU COMO... `Camila` | QUERO/PRECISO ... `FUNCIONALIDADE`       |PARA ... `MOTIVO/VALOR`                                                           |
|--------------------|------------------------------------------|----------------------------------------------------------------------------------|
|Usuário do sistema  | Informar os tipos de golpes              | Ficar ciente das novas armadilhas e saber se proteger                            |
|Usuário do sistema  | Relatórios Detalhados                    | Explicar de maneira clara ao usuário para que ele entenda o resultado da análise |
|Usuário do sistema  | Precisão na Detecção                     | Aumentar a confiabilidade dos clientes e se destacar em relação a concorrência   |
|Usuário do sistema  | Suporte a diversos dispositivos          | Aumentar o alcance de acesso e uso do seu sistema                                |
|Usuário do sistema  | Suporte a Diferentes Formatos de Arquivo | Aumentar a variedade de usos do sistema                                          |

|EU COMO... `Maria ` | QUERO/PRECISO ... `FUNCIONALIDADE`       |PARA ... `MOTIVO/VALOR`                                                           |
|--------------------|------------------------------------------|----------------------------------------------------------------------------------|
|Usuário do sistema  | Informar os tipos de golpes              | Ficar ciente das novas armadilhas e saber se proteger                            |
|Usuário do sistema  | Relatórios Detalhados                    | Explicar de maneira clara ao usuário para que ele entenda o resultado da análise |
|Usuário do sistema  | Interface Amigável                       | Para que usuários leigos possam navegar e usar os recursos sem dificuldade.      |
|Usuário do sistema  | Proteção de Dados                        | Aumentar a confiabilidade dos clientes                                           |
|Usuário do sistema  | Suporte ao Cliente                       | Auxiliar usuários com dúvidas durante o uso da plataforma                        |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|------------------------------------------|-------|
|RF-001| Informar os tipos de golpes              | ALTA  | 
|RF-002| Relatórios Detalhados                    | MÉDIA |
|RF-003| Precisão na Detecção                     | MÉDIA |
|RF-004| Suporte a diversos dispositivos          | ALTA  |
|RF-005| Suporte a Diferentes Formatos de Arquivo | ALTA  |
|RF-006| Interface Amigável                       | MÉDIA |
|RF-007| Proteção de Dados                        | MÉDIA |
|RF-008| Suporte ao Cliente                       | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel    |  MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 5s                |  BAIXA |
|RNF-002| O sistema deve ser capaza de suportar até 50.000 acessos simultaneos |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
