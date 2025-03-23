class Peca {
    constructor(id, timestampInicio, LoteId, tempoMaximo, tipoPeca, pedidoId) {
        this.id = id;
        this.timestampInicio = timestampInicio;
        this.LoteId = LoteId;
        this.tempoMaximo = tempoMaximo;
        this.tipoPeca = tipoPeca;
        this.pedidoId = pedidoId;
    }

    visualizar() {
        console.log(`Peça ${this.id} visualizada.`);
    }

    editar() {
        console.log(`Peça ${this.id} editada.`);
    }

    atualizarAlarme(tempoMaximoAlarme) { // segundos
        this.tempoMaximo = tempoMaximoAlarme;
        console.log(`Tempo máximo da peça ${this.id} atualizado para: ${this.tempoMaximo}`);
    }

    verificarAlarme(timestampMaximoAlarme) {
        if (this.timestampInicio === timestampMaximoAlarme) {
            const alarme = new Alarme(
                1, // ID do alarme (pode ser gerado dinamicamente)
                this.id, // ID da peça
                this.LoteId, // ID do lote
                this.pedidoId, // ID do pedido
                this.tipoLote,
                this.tempoMaximo,
                this.tipoPeca
            );
            console.log(`Alarme gerado para a peça ${this.id}.`);
            return alarme;
        }
        return null;
    }

}

module.exports = Peca;