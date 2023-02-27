const express = require('express');
const router = express.Router();

router.get('/productos', (req, res) => {
    res.render('Productos.ejs')
})

router.get('/planes', (req, res) => {
    res.render('Plan.ejs')
})

router.get('/Inicio', (req, res) => {
    res.render('Inicio.ejs')
})

module.exports = router;