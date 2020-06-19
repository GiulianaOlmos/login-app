const express = require('express');
const config = require('./config/config');
      bodyParser = require('body-parser');
      jwt = require('jsonwebtoken');
      config = require('./config/config');
      app = express();

const port = process.env.PORT || 8080;

app.set('llave', config.llave);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.send('Hola Giuli');
});

app.get('/Holis', function (req, res) {
    res.send('Amiga funciona');
});



app.listen(port);