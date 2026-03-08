const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const postOrder = require('./Routes/createOrder');
const getListOrder = require('./Routes/listOrder');
const getOneOrder = require('./Routes/getOneOrder');
const updateOrder = require('./Routes/updateOrder');
const deleteOrder = require('./Routes/deleteOrder');

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidorrr rodando em http://localhost:${PORT}`);
});

module.exports = app;