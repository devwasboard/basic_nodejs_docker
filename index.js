express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Heello word, first container with docker!!!')
});

app.listen(PORT, HOST);
console.log('App Execute in docker contanner: first_app/dockernode ');