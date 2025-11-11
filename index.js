var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Ejemplo de elementos cargados desde el servidor
  const listaElementos = [
    { texto: 'Elemento 1', imagen: '/images/img1.jpg' },
    { texto: 'Elemento 2', imagen: '/images/img2.jpg' },
    { texto: 'Elemento 3', imagen: '/images/img3.jpg' }
  ];
  res.render('index', { title: 'Inicio', elementos: listaElementos });
});

module.exports = router;
