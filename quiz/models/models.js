var path = require('path');

// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite   DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);

var Sequelize = require('sequelize');

if(url!=null){
	var DB_name  = (url[6]||null);
	var user     = (url[2]||null);
	var pwd      = (url[3]||null);
	var protocol = (url[1]||null);
	var dialect  = (url[1]||null);
	var port     = (url[5]||null);
	var host     = (url[4]||null);
}else{
	var DB_name  = null;
	var user     = null;
	var pwd      = null;
	var protocol = null;
	var dialect  = "sqlite";
	var port     = null;
	var host     = null;
}

var sequelize = new Sequelize(DB_name, user, pwd, 
  { dialect:  dialect,
	protocol: protocol,
	port:     port,
	host:     host,
    storage:  'quiz.sqlite',  // solo SQLite (.env)
	omitNull: true      // solo Postgres
  }      
);

// Importar la definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz; // exportar definici�n de tabla Quiz

// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync()
.then(function() {
  Quiz.count().then(function (count){
    if(count === 0) {   // la tabla se inicializa solo si est� vac�a
		Quiz
		.bulkCreate([
			{pregunta: 'Capital de Italia',   respuesta: 'Roma'},
			{pregunta: 'Capital de Grecia',   respuesta: 'Atenas'},
			{pregunta: 'Capital de Suiza',   respuesta: 'Berna'},
			{pregunta: 'Capital de Reino Unido',   respuesta: 'Londres'},
			{pregunta: 'Capital de Dinamarca',   respuesta: 'Copenhague'},
			{pregunta: 'Capital de Portugal', respuesta: 'Lisboa'}
        ]).then(function(){console.log('Base de datos inicializada')});
    };
  });
}); 
