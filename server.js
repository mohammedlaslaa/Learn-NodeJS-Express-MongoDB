const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du iiiiirvefffur tahia !');
});

server.listen(process.env.PORT || 3000);