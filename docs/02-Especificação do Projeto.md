# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Visão geral:

> - 1)Algoritmos de Detecção Avançados: Descreveremos os algoritmos de detecção utilizados em nosso projeto, incluindo técnicas de aprendizado de máquina, processamento de imagem e análise de vídeo.
> - 2)Processamento de Imagem e Vídeo: Exploraremos as técnicas de processamento de imagem e vídeo empregadas para identificar padrões e características distintivas associadas a conteúdo gerado por inteligência artificial.
> - 3)Redes Neurais Convolucionais (CNNs): Abordaremos o uso de redes neurais convolucionais para análise e classificação de imagens, destacando sua eficácia na detecção de padrões complexos em conjuntos de dados visuais.
> - 4)Técnicas de Análise de Áudio: Discutiremos as técnicas de análise de áudio empregadas para detecção de conteúdo falso em arquivos de áudio, incluindo análise espectral e modelagem de linguagem.
> - 5)Ferramentas de Aprendizado de Máquina: Apresentaremos as ferramentas e bibliotecas de aprendizado de máquina utilizadas em nosso projeto, como TensorFlow, PyTorch e scikit-learn, e como elas foram aplicadas na implementação dos algoritmos de detecção.
> - 6)Bancos de Dados e Conjuntos de Dados: Descreveremos os bancos de dados e conjuntos de dados utilizados para treinar e testar nossos modelos de detecção, destacando sua importância na obtenção de resultados precisos e confiáveis.

## Personas

Camila tem 25 anos, é psicóloga e influencer. É sociável, intensa, gosta de rock, sair de casa e tem muitos amigos. Tem o sonho de casar, ser mãe, crescer ainda mais nas redes sociais e escrever um livro. Ela quer proteger sua imagem pública e sua reputação online. Como uma figura pública de sucesso nas redes sociais, ela precisa garantir que sua identidade não seja usada indevidamente por golpistas ou para disseminação de fake news e desinformação. É necessário tratá-la com respeito, transparência e confiança. Ela valoriza a sinceridade e a autenticidade, então é essencial manter uma comunicação clara e direta com ela. Além disso, demonstrar interesse genuíno em suas preocupações e oferecer soluções que atendam às suas necessidades específicas são formas eficazes de deixá-la feliz.

[Empatia 05 - Análise - Persona-1.1.docx](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-2024-1-1-ti-aw-t1-aicheck/files/15055725/Empatia.05.-.Analise.-.Persona-1.1.docx)

Maria tem 57 anos, é aposentada e gosta de ler, cozinhar e de jardinagem. É gentil, cautelosa, tradicional, dedicada à família. Tem o sonho de viajar pelo mundo, passar mais tempo com os netos, aprender a utilizar a tecnologia de forma segura. Ela quer proteção de sua segurança online e à prevenção de fraudes. Como alguém que não está familiarizada com o mundo digital e teme cair em golpes, ela busca uma solução que a ajude a navegar na internet com mais confiança e segurança, protegendo-a contra possíveis ameaças cibernéticas. É importante tratá-la com paciência, empatia e clareza. Ela pode se sentir insegura ou sobrecarregada com a tecnologia, então é essencial fornecer instruções simples e passo a passo para ajudá-la a entender e utilizar o serviço. Além disso, é importante transmitir confiança e tranquilidade, demonstrando que estamos aqui para ajudá-la a se proteger online.

[Empatia 05 - Análise - Persona-2.docx](https://github.com/ICEI-PUC-Minas-PBR-SI/pbr-si-2024-1-1-ti-aw-t1-aicheck/files/15055754/Empatia.05.-.Analise.-.Persona-2.docx)

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
