Casos de Uso


1. Informações de Pedidos
    Informações de Pedido podem ser cadastradas via formulário.
    Informações de Peças podem ser consultados em banco de dados.
    Gerentes podem editar informações sobre as peças. 

2. Informações de Peças
    Informações de Peças podem ser registradas via OCR.
    Informações de Peças podem ser registradas em banco de dados via json.
    Informações de Peças podem ser consultados em banco de dados.
    Gerentes e Operadores podem editar informações sobre as peças. 

3. Configurar Alarmes Personalizados
    Sistema permite a configuração de alarmes personalizados. 

4. Disparar e Rastrear Erro de Produção
    O sistema rastreia erro em peça específica e mostra máquina onde peça se encontra.
    tempoInicio é atualizado a partir da mudança de Máquina de Peça.
    Quando o tempo de início de uma peça ultrapassa o tempo máximo permitido, um alarme é disparado, notificando os operadores sobre o atraso.
    O sistema também associa o atraso ao pedido correspondente, permitindo a rastreabilidade do problema até o pedido original.

5. Alarme de Atraso
	O alarme contém informações detalhadas sobre a peça, o lote e o pedido associado, permitindo que os operadores identifiquem a origem do atraso.
    O alarme é registrado em um histórico para análise posterior. A notificação inclui detalhes sobre a peça, o lote e o pedido associados.
    O sistema exibe informações como o tempo de início da peça, o tempo máximo configurado, o tempo decorrido e o pedido relacionado. 
    O sistema associa automaticamente os atrasos de produção aos pedidos correspondentes. 

6. Gerar Relatórios de Atrasos
    Sistema gera relatórios detalhados sobre os atrasos de produção. 
    Relatórios incluem informações como o número de peças atrasadas, os lotes afetados e os pedidos impactados.

7. Monitorar Progresso de Lotes
    Sistema monitora o progresso de cada lote de produção.
    Se um lote estiver atrasado, o sistema gera alertas para os operadores e gerentes. 
    
8. Integrar com Sistemas Externos
    O sistema pode ser integrado com ERPs ou MES (Manufacturing Execution Systems) dos stakeholders.
    