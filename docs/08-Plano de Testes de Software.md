# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>
 
| **Caso de Teste** 	| **CT-01 – Tela de cadastro de usuários** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 - O site deve apresentar uma tela de cadastro de usuários. |
 Tela de Cadastro de usuários| http://127.0.0.1:5500/cadastro.html<br> | | Todos os dados necessários
 Para cadastrar um novo usário/cliente apto para fazer login. | Nome , CPF/CNPJ , Cep , Senha e demais.
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-02	- O site deve apresentar uma tela de login para usuários já cadastrados. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site http://127.0.0.1:5500/login.html<br> - Preencher o campo de CPF ou CNPJ <br> - Preencher o campo da senha com no mínimo 6 caracteres <br> - Clicar em "Login" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Pesquisa de carros disponíveis**	|
|Requisito Associado | RF-03	- O site deve permitir ao usuário realizar uma pesquisa de carros disponíveis para locação.|
| Objetivo do Teste 	| Verificar se os resultados da pesquisa correspondem aos critérios fornecidos pelo usuário. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Entrar na aba de "Nossa frota" <br> - Digitar o modelo desejado <br> - Clicar em "Pesquisar" |
|Critério de Êxito | - Mostrar somente carros correspondentes aos filtros. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Histórico de reservas**	|
|Requisito Associado | RF-04	- O site deve permitir ao usuário visualizar o histórico de reservas realizadas por ele.|
| Objetivo do Teste 	| Verificar se o histórico de reservas do usuário é exibido corretamente. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Fazer login<br> - Entrar na aba de "Histórico de reservas" <br> |
|Critério de Êxito | - Mostrar todas reservas feita pelo usuário |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Cálculo de tarifas e opções de pagamento**	|
|Requisito Associado | RF-05	-O site deve realizar o cálculo de tarifas e apresentar opções de pagamento.|
| Objetivo do Teste 	| Verificar se o sistema calcula corretamente o valor do aluguel e taxa. <br> - Verificar se os métodos de pagamento disponíveis funcionam corretamente. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Fazer login<br> - Fazer uma reserva <br> |
|Critério de Êxito | - Calcular o valor do aluguel corretamente, e processar a venda com o métodode pagamento selecionado. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Informações de contato e suporte**	|
|Requisito Associado | RF-06	-O site deve permitir visualizar as informações de contatos e suporte online para tirar dúvidas.|
| Objetivo do Teste 	|  Vertificar se os usuários conseguem acessar as informações de contato e suporte online facilmente |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Clicar em a"Ajuda" <br> |
|Critério de Êxito | - Usuário deve ter acesso ao suporte com poucos cliques. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Notificação de confirmação de reserva**	|
|Requisito Associado | RF-07	- O site deve enviar uma notificação de confirmação de reserva para o email do locatário.|
| Objetivo do Teste 	| Verificar se o usuário recebe a notificação de confirmação da reserva no e-mail.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Fazer login<br> - Realizar uma reserva <br> |
|Critério de Êxito | - Usuário deve receber um e-mail confirmando a reserva, com detalhes da locação e instruções para a retirada do veículo.|
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Mapa de localização de pontos de retirada e devolução**	|
|Requisito Associado | RF-08	- O site deve apresentar um mapa para localização de pontos de retirada e devolução dos veículos.|
| Objetivo do Teste 	| Verificar se os pontos de retirada e devolução são exibidos corretamente no mapa.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Fazer login<br> - Entrar na aba "Minhas reservas" <br> |
|Critério de Êxito | - Sistema mostrar corretamente o local de retirada e devolução.|
|  	|  	|
| **Caso de Teste** 	| **CT-09  – Relatório de Consumo de Energia**	|
|Requisito Associado | RF-09	- O site deve fornecer relatório  de consumo de energia.|
| Objetivo do Teste 	| Verificar se o relatório de consumo de energia é gerado corretamente com base nos dados do veículo.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Acessar a aba"Nossa frota"<br> |
|Critério de Êxito | - O sistema deve mostrar informações corretas sobre consumo de energia do veículo.|
|  	|  	|
| **Caso de Teste** 	| **CT-10 –  Avaliações e feedbacks pós-locação**	|
|Requisito Associado | RF-10	- O site deve permitir ao usuário deixar avaliações e feedbacks pós-locação.|
| Objetivo do Teste 	| Verificar se os usuários conseguem enviar avaliações e feedbacks após a locação.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Acessar a aba "Minhas reservas" |
|Critério de Êxito | -  Após a finalização da reserva, seja disponibilizado um formulário para feedbacks.|




 
