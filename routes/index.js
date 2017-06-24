var express = require('express');
var router = express.Router();
var notas={nombre:'extudiante',
			notafibn:'nota'};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'Examen Final', 
  	subtitle:'Avances en Computacion',
  	subtitle1:'Bienvenidos',
  	notas:notas});
});

module.exports = router;
