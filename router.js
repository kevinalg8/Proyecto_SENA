const express = require('express');
const router = express.Router();
//sudo pkill node Para volver a inicar el servidor local

router.get('/productos', (req, res) => {
    res.render('Productos.ejs')
})

router.get('/productos', (req, res) => {
    res.render('Productos.ejs')
})

router.get('/planes', (req, res) => {
    res.render('Plan.ejs')
})

router.get('/registroentrenador', (req, res) => {
    res.render('registroEntrenador.ejs')
})

router.get('/registrousuario', (req, res) => {
    res.render('registroUsuario.ejs')
})

router.get('/Inicio', (req, res) => {
    res.render('Inicio.ejs')
})

router.get('/navbar', (req, res) => {
    res.render('navbar2.ejs')
})

module.exports = router;