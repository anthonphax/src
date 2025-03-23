// src/controllers/PecaController.js
const Peca = require('../models/Peca');
const PecaView = require('../views/PecaView');

class PecaController {
    constructor() {
        this.pecaView = new PecaView();
    }

    criarPeca(id, timestampInicio, LoteId, tempoMaximo, tipoPeca, pedidoId) {
        const peca = new Peca(id, timestampInicio, LoteId, tempoMaximo, tipoPeca, pedidoId);
        return peca;
    }

    visualizarPeca(peca) {
        peca.visualizar();
        this.pecaView.mostrarDetalhes(peca);
    }

    editarPeca(peca) {
        peca.editar();
    }

    atualizarAlarmePeca(peca, tempoMaximoAlarme) {
        peca.atualizarAlarme(tempoMaximoAlarme);
    }

    verificarAlarmePeca(peca, timestampMaximoAlarme) {
        const alarme = peca.verificarAlarme(timestampMaximoAlarme);
        this.pecaView.mostrarAlarme(alarme);
    }
}

module.exports = PecaController;