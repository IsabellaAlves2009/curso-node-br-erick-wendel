const http = require('http')

http.createServer((request, response) => {
    response.end('hello node!!')
})
    .listen(5000, () => console.log('servidor está rodando!!!'))

