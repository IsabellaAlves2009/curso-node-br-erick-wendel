const {obterPessoas} = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let i = 0; i <= this.length -1; i++){
        valorFinal = callback(valorFinal, this[i], this)
    }
    return valorFinal;
}

async function main() {
    try{
        const {results} = await obterPessoas(`a`);
        const pesos = results.map(item => parseInt(item.heigth))
        //const total = pesos.reduce((anterior, proximo) => {
        //    return anterior + proximo;
        //})
        const minhaLista = [
            ['Isa'],
            ['rockeira']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, [])
        .join(',')
        console.log('pesos', pesos);
        console.log('total', total);
    }
    catch(error){
        console.error('DEU RUIM', error);
    }
}
main();