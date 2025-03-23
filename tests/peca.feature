Funcionalidade: Visualizar Detalhes de uma Peça
  Como um operador de produção
  Eu quero visualizar os detalhes de uma peça
  Para obter informações sobre seu status e configurações

  Cenário: Visualizar detalhes de uma peça existente
    Dado que eu tenho uma peça com ID 1
    Quando eu visualizo os detalhes da peça
    Então o sistema deve exibir as informações da peça, incluindo:
      | Campo            | Valor               |
      | ID               | 1                   |
      | Timestamp Início | 2023-10-01 08:30:00 |
      | Lote ID          | 1                   |
      | Tempo Máximo     | 3600                |
      | Tipo de Peça     | Tipo X              |
      | Pedido ID        | 1                   |

Funcionalidade: Editar uma Peça
  Como um gerente de produção
  Eu quero editar os detalhes de uma peça
  Para corrigir ou atualizar informações incorretas

  Cenário: Editar o tempo máximo de uma peça
    Dado que eu tenho uma peça com ID 1
    Quando eu edito o tempo máximo da peça para 7200 segundos
    Então o sistema deve atualizar o tempo máximo da peça
    E exibir a mensagem "Tempo máximo da peça 1 atualizado para: 7200"