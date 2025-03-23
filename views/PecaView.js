class PecaView {
    mostrarDetalhes(peca) {
        console.log(`Detalhes da Peça:`);
        console.log(`- ID: ${peca.id}`);
        console.log(`- Timestamp Início: ${peca.timestampInicio}`);
        console.log(`- Lote ID: ${peca.LoteId}`);
        console.log(`- Tempo Máximo: ${peca.tempoMaximo}`);
        console.log(`- Tipo de Peça: ${peca.tipoPeca}`);
        console.log(`- Pedido ID: ${peca.pedidoId}`);
    }

    mostrarAlarme(alarme) {
        if (alarme) {
            console.log(`Alarme disparado para a peça ${alarme.idPeca}:`);
            console.log(`- Lote ID: ${alarme.idLote}`);
            console.log(`- Pedido ID: ${alarme.idPedido}`);
            console.log(`- Tipo de Peça: ${alarme.tipoPeca}`);
            console.log(`- Tempo Máximo: ${alarme.tempoMaximo}`);
        } else {
            console.log('Nenhum alarme disparado.');
        }
    }
}

module.exports = PecaView;