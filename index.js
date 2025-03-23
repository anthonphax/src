const Usuario = require('./models/Usuario');
const Pedido = require('./models/Pedido');
const Peca = require('./models/Peca');
const Lote = require('./models/Lote');
const Alarme = require('./models/Alarme');

const usuario = new Usuario(1, 'João Silva', 'joao.silva@example.com', 'senha123', 'Gerente');
usuario.acessarSessao();
usuario.administrar();

const pedido = new Pedido(1, 0.5, '2023-10-01 08:00:00', '2023-10-05 18:00:00', usuario.id);
pedido.atualizar();
pedido.visualizar();

const tempoMaxIni = 3600; // 1 hora em segundos

const peca1 = new Peca(1, '2023-10-01 08:30:00', 1, tempoMaxIni, 'tipoPeca', pedido.id); // Lote.id = 1
const peca2 = new Peca(2, '2023-10-01 09:00:00', 1); // Lote.id = 1
const peca3 = new Peca(3, '2023-10-01 09:30:00', 1); // Lote.id = 1

const idPecas = [peca1.id, peca2.id, peca3.id];

const lote = new Lote(1, pedido.id, idPecas, 'Tipolote', 'Linha A', 'Máquina 1', 'Especificações do lote');
lote.visualizar();
lote.configurar();

peca1.visualizar();
peca1.editar();
peca2.visualizar();
peca2.editar();
peca3.visualizar();
peca3.editar();


const alarme = new Alarme(1, peca1.id, lote.id, pedido.id, 3600); 

peca1.atualizarAlarme(alarme.tempoMaximo);

timestampMax = alarme.atualizaTempoMaximo(alarme.tempoMaximo);

peca1.verificarAlarme(timestampMax);
