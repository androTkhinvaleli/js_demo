const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        data: 'ok',
    });
});

app.listen(8080, ()=> console.log('on port 8080...'));
