const express = require('express');
      bodyParser = require('body-parser');
      app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/Holis', function (req, res) {
    res.send({mensaje : 'Amiga funciona'});
});

app.post('/autenticar', (req, res) => {
    if(req.body.usuario === "giuliana" && req.body.contrasena === "estaesamicontrasena"){
        res.send({ "name":"Giuliana", "Apellido":"Olmos",  "age":25, "description": "Me gusta codear, los gatos y los videjuegos me marean" })
    } else {
        res.json({ mensaje: "Usuario o contraseña incorrectos"})
    }
})


app.listen(port);