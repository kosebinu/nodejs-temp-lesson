const http = require('http');
const fs = require ('fs');
const path = require ('path');

const server = http.createServer((req, res) => {
    let filepath = '';

    switch (req.url) {
        case '/': filepath = './odin-nodejs-assignment/index.html';
            break;
        case '/about': filepath = './odin-nodejs-assignment/about.html';
            break;
        case '/contact-me': filepath = './odin-nodejs-assignment/contact-me.html';
            break;
        default: filepath = './404.html';
    }

    fs.readFile(path.resolve(__dirname, filepath), (err, data) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end('Server Error');
            return;
        }
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(data);
    });

});

server.listen(5000, () => {
    console.log('Server is running at locat host:5000...');
    
})