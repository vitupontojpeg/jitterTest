const express = require('express');
const app = express();
const PORT = 3000;

const indexRoute = require('./Routes/index');

app.use('/', indexRoute);

app.use(express.json());

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;