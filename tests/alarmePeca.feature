Funcionalidade: Configurar Alarmes
  Como um gerente de produção
  Eu quero configurar alarmes para monitorar o tempo de produção das peças
  Para garantir que o tempo máximo de produção não seja excedido

  Cenário: Configurar um novo alarme
    Dado que eu tenho uma peça com tempo máximo de produção definido
    Quando eu configuro um alarme para a peça
    Então o alarme deve ser salvo no sistema
    E o alarme deve estar associado à peça, lote e pedido correspondentes

  Cenário: Tentar configurar um alarme sem tempo máximo
    Dado que eu tenho uma peça sem tempo máximo de produção definido
    Quando eu tento configurar um alarme para a peça
    Então o sistema deve exibir uma mensagem de erro
    E o alarme não deve ser criado

Funcionalidade: Disparar Alarme
  Como um operador de produção
  Eu quero ser notificado quando o tempo de produção de uma peça atingir o tempo máximo
  Para tomar ações corretivas imediatas

  Cenário: Disparar alarme quando tempo de início for igual ao tempo máximo
    Dado que eu tenho uma peça com tempo de início igual ao tempo máximo
    Quando o sistema verifica o tempo de produção da peça
    Então um alarme deve ser disparado
    E o alarme deve conter o ID da peça, lote e pedido

  Cenário: Não disparar alarme quando tempo de início for menor que o tempo máximo
    Dado que eu tenho uma peça com tempo de início menor que o tempo máximo
    Quando o sistema verifica o tempo de produção da peça
    Então nenhum alarme deve ser disparado