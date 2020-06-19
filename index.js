const express = require('express');
      bodyParser = require('body-parser');
      jwt = require('jsonwebtoken');
      config = require('./config/config');
      app = express();

const port = process.env.PORT || 8080;

app.set('llave', config.llave);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/autenticar', function(req, res) {
    if(req.body.usuario === "giuliana" && req.body.contrasena === "estaesamicontrasena"){
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Autenticación correcta',
            token: token
        })
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})

app.get('/', function (req, res) {
    res.send('Hola Giuli');
});

app.get('/Holis', function (req, res) {
    res.send('Amiga funciona');
});



app.listen(port);