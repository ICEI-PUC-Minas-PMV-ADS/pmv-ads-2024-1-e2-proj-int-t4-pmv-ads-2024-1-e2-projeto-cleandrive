# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

A Partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Luciana Silva | Diminuir a emissão de CO₂.         | Evitar mudanças climáticas.           |
|Cristina Fiorentini      | Me locomover com mais praticidade em minhas viagens, porém sem impactar negativamente o meio ambiente.             | Para conhecer mais lugares em menos tempo, preservando a paisagem, para poder conhecer cada vez mais lugares. |
|Larissa Araújo  | Uma forma sustentável de levar meus filhos para suas atividades, sem causar impactos negativos no ar.  | Poder aproveitar mais tempo ao lado da minha família ao ar livre sem me preocupar em gastar horas me locomovendo para as atividades das crianças.          |
|Cristina Fiorentini      | Me locomover com mais praticidade em minhas viagens, porém sem impactar negativamente o meio ambiente.             | Para conhecer mais lugares em menos tempo, preservando a paisagem, para poder conhecer cada vez mais lugares. |
|Cliente|Ter informações detalhadas sobre carros elétricos, benefícios e pontos de recarga. |Saber o melhor carro para cada ocasião.|
|Cliente|Conectar-se com as locadoras parceiras para verificar a disponibilidade em tempo real. |Facilidade e praticidade na contratação..|
|Cliente|Filtrar informações sobre modelos, preços e disponibilidade. |Encontrar o melhor modelo para o meu caso. |
|Administrador|Visualizar e filtrar o perfil e histórico de clientes. |Permitir identificar produtos e campanhas mais relevantes e contribuir para satisfação e fidelização.|
|Administrador|Permitir que os usuários se cadastrem, criem contas e façam login. |Ter  registro dos usuários da aplicação.|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.


### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito                                                                            | Prioridade |
|------|---------------------------------------------------------------------------------------------------|------------|
| RF-01| O site deve apresentar uma tela de cadastro de novos usuários.                                    |   Alta     |
| RF-02| O site deve apresentar uma tela de login para usuários já cadastrados.                            |   Alta     | 
| RF-03| O site deve permitir ao usuário realizar uma pesquisa de carros disponíveis para locação.         |   Alta     |
| RF-04| O site deve permitir ao usuário visualizar o histórico de reservas realizadas por ele.            |   Média    | 
| RF-05| O site deve realizar o cálculo de tarifas e apresentar opções de pagamento.                       |   Alta     |
| RF-06| O site deve permitir visualizar as informações de contatos e suporte online para tirar dúvidas.   |   Média    |
| RF-07| O site deve enviar uma notificação de confirmação de reserva para o email do locatário.           |   Média    |
| RF-08| O site deve apresentar um mapa para localização de pontos de retirada e devolução dos veículos.   |   Alta     |
| RF-09| O site deve fornecer relatório simples de consumo de energia.                                     |   Baixa    |
| RF-10| O site deve permitir ao usuário deixar avaliações e feedbacks pós-locação.                        |   Média    |
| RF-11| O site deve impedir o cadastro de menores de idade, pessoas que não possuem CNH, etc.             |   Alta     |


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito                                                                                      |Prioridade |
|-------|-------------------------------------------------------------------------------------------------------------|-----------|
|RNF-01| O site deve ser responsivo e possuir uma interface de fácil utilização em dispositivos móveis e desktop.     |   Alta    |
|RNF-02| O sistema deve responder de forma ágil.                                                                      |   Alta    |
|RNF-03| O site deve proporcionar segurança na transmissão de dados (HTTPS).                                          |   Média   |
|RNF-04| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).|   Alta    |
|RNF-05| O site deve possuir opções para diferentes idiomas, bem como hora de retirada e entrega do veículo.          |   Média   |
|RNF-06| O site deve ser desenvolvido de forma sustentável.                                                           |   Alta    |
|RNF-07| O site deve ser integrado com as principais redes sociais (Instagram, tiktok, WhatsApp, etc.)                |   Baixa   |


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

| ID  | Restrição                                                                                          |
|-----|------------------------------------------------------------------------------------------------    |
|RE-01| O projeto deverá ser entregue até o final do semestre letivo, não podendo extrapolar 23/06/2024    |
|RE-02| Toda a equipe precisa participar de forma uniforme                                                 |
|RE-03| A equipe não pode sublocar o desenvolvimento do trabalho.                                          |


## Diagrama de Casos de Uso

O diagrama contempla as principais ligações previstas entre casos de uso e atores e permite detalhar os Requisitos Funcionais identificados na etapa de elicitação. Lembrando que  não se utiliza diagramas de caso de uso para requisitos não-funcionais.

Como atores é importante a identificação dos grupos de todos os envolvidos que interagem com o sistema, principalmente outros sistemas ou sensores. Eles são representados graficamente por bonecos-palito e são nomeados pelos papeis nas interações nas quais estão envolvidos (ex. Cliente, Administrador). Lembre-se de que o próprio sistema não pode ser ator do diagrama que o modela.

Em relação aos casos de uso, eles devem representar as interações ou transações dos atores com o sistema. Cada tipo possível é representada por uma elipse nomeada e os relacionamentos são indicados por linhas que podem ter setas nos casos em que se indica a origem da interação. Os nomes dos casos de uso representam verbos no infinitivo associados aos objetos com os quais se relacionam os verbos (ex. Cadastrar usuário, Visualizar relatório). Os tipos de relacionamentos mais comuns são associações entre atores e casos de uso, generalizações entre atores e entre casos de uso, inclusões e extensão entre casos de uso.

