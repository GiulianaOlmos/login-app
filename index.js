const express = require('express');
const config = require('./config/config');
      bodyParser = require('body-parser');
      jwt = require('jsonwebtoken');
      config = require('./config/config');
      app = express();

const port = process.env.PORT || 8080;

app.set('llave', config.llave);
console.log(config.llave)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.send('Hola Giuli');
});

app.get('/Holis', function (req, res) {
    res.send('Amiga funciona');
});

app.post('/autenticar', (req, res) => {
    if(req.body.usuario === "giuliana" && req.body.contrasena === "estaesamicontrasena"){
        const payload = {
            check:  true
        };
        const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Autenticación correcta',
            token: token
        });    
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})

app.post('/autenticar', (req, res) => {
    if(req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
        const payload = {
            check:  true
        };
        const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: 1440
        });
        res.json({
            mensaje: 'Autenticación correcta',
            token: token
        });
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})

app.listen(port);