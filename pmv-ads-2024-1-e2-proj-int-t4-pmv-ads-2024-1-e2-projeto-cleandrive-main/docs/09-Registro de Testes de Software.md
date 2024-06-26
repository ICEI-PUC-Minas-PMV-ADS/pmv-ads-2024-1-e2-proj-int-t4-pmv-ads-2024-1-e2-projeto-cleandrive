# Registro de Testes de Software

# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>
 
| **Caso de Teste** 	| **CT-01 – Tela de cadastro de usuários** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 - O site deve apresentar uma tela de cadastro de usuários. |
 Tela de Cadastro de usuários| http://127.0.0.1/html-csspuc/cadastro.html<br> | | Todos os dados necessários
 Para cadastrar um novo usário/cliente apto para fazer login. | Nome , CPF/CNPJ , Cep , Senha e demais.
 ![Captura de tela bd](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/aae9f33f-1c61-4161-90ba-34e843f205bb)
 
Apos cadastro esses dados vão pra um banco de dados , no navicat, onde ficam armazenados.

 
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-02	- O site deve apresentar uma tela de login para usuários já cadastrados. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site http://127.0.0.1/pages/login.php<br> - Preencher o campo de e-mail <br> - Preencher o campo da senha com no mínimo 6 caracteres <br> - Clicar em "Login" |
 ![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/b36425b0-7850-4723-9cbe-fad47a1ffb80)
 ![Login com dados do usário]![login com usuário](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/a24c8c5c-33c3-429d-9a5f-ca9a88a6706e)

|Critério de Êxito | - O login foi realizado com sucesso. |
![login realizado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/30731043-6bde-4eda-b087-55589aeb7d3d)
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Pesquisa de carros disponíveis**	|
|Requisito Associado | RF-03	- O site deve permitir ao usuário realizar uma pesquisa de carros disponíveis para locação.|
| Objetivo do Teste 	| Verificar se os resultados da pesquisa correspondem aos critérios fornecidos pelo usuário. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site http://127.0.0.1/pages/fleet.php<br> - Entrar na aba de "Nossa frota" <br> - Digitar o modelo desejado <br> - Clicar em "Pesquisar" |

|Critério de Êxito | - Mostrar somente carros correspondentes aos filtros. |

|  	|  	| ![login realizado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/8c2ecc07-e6e0-4bf3-bb45-c31693c60b8c)
![reserva 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/d16f2018-e5f7-4bc6-8936-4011385dd0c4)

)
| **Caso de Teste** 	| **CT-04 – Histórico de reservas**	|
|Requisito Associado | RF-04	- O site deve permitir ao usuário visualizar o histórico de reservas realizadas por ele.|
| Objetivo do Teste 	| Verificar se o histórico de reservas do usuário é exibido corretamente. |
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site http://127.0.0.1/pages/my_reservations.php<br> - Fazer login<br> - Entrar na aba de "Histórico de reservas" <br> |
|Critério de Êxito | - Mostrar todas reservas feita pelo usuário |
![reservas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/4e3f80c0-1fe3-4971-9460-e2177b414791)

|  	|  	|
| **Caso de Teste** 	| **CT-05 – Cálculo de tarifas**	|
|Requisito Associado | RF-05	-O site deve realizar o cálculo de tarifas .|
| Objetivo do Teste 	| Verificar se o sistema calcula corretamente o valor do aluguel e taxa. <br>. |
![reservas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/b7339fe8-5679-434c-8299-178db8154810)

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
|Requisito Associado | RF-07	- O site deve disponibilizará no campo ''minhas reservas'' a confirmação da reserva.|
| Objetivo do Teste 	| Verificar se o usuário recebe a notificação de confirmação da reserva.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site https://adefinir.com.br<br> - Fazer login<br> - Realizar uma reserva <br> |
|Critério de Êxito | - Usuário deve receber um e-mail confirmando a reserva, com detalhes da locação e instruções para a retirada do veículo.|
|  	|  	|
| **Caso de Teste** 	| **CT-08  – Relatório de Consumo de Energia**	|
|Requisito Associado | RF-09	- O site deve fornecer relatório  de consumo de energia.|
| Objetivo do Teste 	| Verificar se o relatório de consumo de energia é gerado corretamente com base nos dados do veículo.|
| Passos 	| - Acessar o navegador <br> - Informar o endereço do site http://127.0.0.1/pages/fleet.php<br> - Acessar a aba"Nossa frota"<br> |
|Critério de Êxito | - O sistema deve mostrar informações corretas sobre consumo de energia do veículo.|
|  	|  	|
![consumo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t4-pmv-ads-2024-1-e2-projeto-cleandrive/assets/144749545/7dbf4aec-e8ef-497e-9784-91b061530a37)
