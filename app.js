const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mongoURI = "AQUI VAI A STRING DE CONEXAO DO BANCO";

mongoose.connect(mongoURI);

mongoose.connection.on('error', (err) => {
  console.log('Erro na conexao com o banco de dadod: ' + err);
})

mongoose.connection.on('disconnected', () => {
  console.log('Aplicacao desconectada do bando de dados!');
})

mongoose.connection.on('connected', () => {
  console.log('Aplicacao conectada ao bando de dados!');
})

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');

app.use('/', indexRoute);

app.use(express.json());

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;