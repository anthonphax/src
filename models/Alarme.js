class Alarme {
    constructor(id, idPeca, idLote, idPedido, tempoMaximo) {
        this.id = id;
        this.idPeca = idPeca;
        this.idLote = idLote;
        this.idPedido = idPedido;
        this.tempoMaximo = tempoMaximo;
        this.timestampMax = '2023-10-05T12:00:00Z';

    }

    atualizaTempoMaximo(novoTempo) {
        this.tempoMaximo = novoTempo;

        const data = new Date(novoTempo);
        data.setSeconds(data.getSeconds() + novoTempo);

        const novaTimestamp = data.getTime();
        console.log(`Nova timestamp: ${new Date(novaTimestamp).toISOString()}`);  

        this.timestampMax = novaTimestamp;
        return novaTimestamp;
    }

    visualizar() {
        console.log(`Alarme ${this.id} visualizado.`);
    }

    configurar() {
        console.log(`Alarme ${this.id} configurado.`);
    }
}

module.exports = Alarme;