const assert = require('assert');
const Postgres = require('../DB/strategies/postgries');
const Context = require('../DB/strategies/base/contextStrategy');

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: 'Gavião Negro',
    poder: 'flexas'
}
const MOCK_HEROI_ATUALIZAR = {
    nome: 'Batman',
    poder: 'dinheiro'
}

DESCRIBE('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async function () {
        db = await context.connect()
    })
    it('PostgresSQL Connection', async function () {
        const result = await context.isConnected()
        assert.equal(result, true);
    })
    it('cadastrar', async function () {
        const result = await context.create(MOCK_HEROI_CADASTRAR);
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('listar', async function () {
        const [result] = await context.read({nome: MOCK_HEROI_CADASTRAR.nome})
        delete result.id;
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('atualizar', async function () {
        const [itemAtualizar] = await context.update({nome: MOCK_HEROI_ATUALIZAR.nome})
        const novoItem = {
            ...MOCK_HEROI_ATUALIZAR,
            nome: 'Mulher Maravilha'
        }

        const [result] = await context.update(itemAtualizar.nome, novoItem)
        const [itemAtualizado] = await context.read({id: itemAtualizar.id})
        assert.deepEqual(result, 1)
        assert.deepEqual(result.nome, novoItem.nome)
    })
    it('remover por id', async function () {
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepEqual(result, 1)
    })
})
