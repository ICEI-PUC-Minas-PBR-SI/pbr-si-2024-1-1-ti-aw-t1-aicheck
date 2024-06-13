# Arquitetura da Solução

Componentes de Software
Front-end: Interface do usuário onde os visitantes do site podem ver eventos, se cadastrar, comprar ingressos. HTML e CSS

Back-end/API: Servidor que lida com a lógica de negócios, manipulação de dados, e comunicação com o banco de dados. Pode ser desenvolvido com Javascript.

Banco de Dados: Armazena informações sobre eventos, usuários, transações, etc. Pode ser um banco de dados relacional como JSON.
Serviço de Autenticação: Gerencia o registro e login dos usuários, JSON.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

Tecnologias: HTML, CSS, JavaScript, Funcionalidades: Pesquisa de eventos, exibição de detalhes do evento, cadastro de usuários, compra de ingressos.
API:

Tecnologias: Javascript 
Funcionalidades: CRUD de eventos, gerenciamento de usuários, integração com sistemas de pagamento.
Banco de Dados:

Tecnologias: JSON.
Tabelas/Collections: Eventos, Usuários, Transações, Notificações.

Sistema de Notificações:
Tecnologias: Twilio (SMS), SendGrid (Email).
Funcionalidades: Envio de confirmações de inscrição, lembretes de eventos.

Front-end
HTML5, CSS3, JavaScript: Tecnologias básicas para a estrutura, estilo e interatividade da interface do usuário.
React: Biblioteca JavaScript para a construção da interface do usuário de maneira eficiente e reutilizável.
Json: Biblioteca para gerenciamento de estado da aplicação.

Back-end
 JavaScript para construir a API do servidor.
Node.js que facilita a criação de rotas e a gestão de middleware.
 Banco de dados NoSQL para armazenar informações sobre eventos, usuários, e transações.

 Ferramentas de Desenvolvimento
Visual Studio Code: IDE para desenvolvimento de código.
Git: Sistema de controle de versão para gestão do código-fonte.
GitHub: Plataforma para hospedagem de repositórios Git.
Figma: ferramenta para criar esboços do site.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
