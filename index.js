const express = require('express');
      bodyParser = require('body-parser');
      jwt = require('jsonwebtoken');
      config = require('./config/config');
      app = express();

const port = process.env.PORT || 8080;




app.get('/', function (req, res) {
    res.send('Hola Giuli');
});

app.get('/Holis', function (req, res) {
    res.send('Amiga funciona');
});

app.post('/autenticar', (req, res) => {
    if(req.body.usuario === "giuliana" && req.body.contrasena === "estaesamicontrasena"){
        res.send("Vevo te logueaste")
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})


app.listen(port);