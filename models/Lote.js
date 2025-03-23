class Lote {
    constructor(id, idPedido, idPecas, tipoLote, linhaProducao, maquina, especificacoes) {
        this.id = id;
        this.idPedido = idPedido;
        this.idPecas = idPecas;
        this.tipoLote = tipoLote;
        this.linhaProducao = linhaProducao;
        this.maquina = maquina;
        this.especificacoes = especificacoes; 
    }

    configurar() {
        console.log(`Lote ${this.id} configurado.`);
    }

    visualizar() {
        console.log(`Lote ${this.id} visualizado.`);
    }
}

module.exports = Lote;