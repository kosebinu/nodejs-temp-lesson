const express = require('express');
const app = express();

app.get('/', (reqq, res) => res.send('Hello World!'));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`My first express app - listening on port ${PORT}!`);
    
})