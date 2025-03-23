class Pedido {
    constructor(id, status, dataInicio, previsaoTermino, usuarioId) {
        this.id = id;
        this.status = status;
        this.dataInicio = dataInicio;
        this.previsaoTermino = previsaoTermino;
        this.usuarioId = usuarioId;
    }

    atualizar() {
        console.log(`Pedido ${this.id} atualizado.`);
    }

    visualizar() {
        console.log(`Pedido ${this.id} visualizado.`);
    }

    editar() {
        console.log(`Pedido ${this.id} editado.`);
    }
}

module.exports = Pedido;