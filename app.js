const express = require('express');
const app = express();
const PORT = 3000;

import Order;

app.use(express.json());

// 1. POST: Um novo pedido.
app.post('/order', (req, res) => {
    try {
    	const novaOrder = await Order.create(req.body);
    	res.status(201).json(novaOrder);
    } catch (error) {
    	res.status(400).json({ mensagem: "Erro ao criar uma order", erro: error.message });
    }
});

// 2. GET: Listar todos os pedidos.
app.get('/order/list', (req, res) => {
    
});

// 3. GET: Buscar um pedido específico pelo ID.
app.get('/order/:id', (req, res) => {
    
});


// 4. PUT: Atualizar um pedido existente.
app.put('/order/:id', (req, res) => {
    
});

// 5. DELETE: Remover um pedido.
app.delete('/order/:id', (req, res) => {
    
});


// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidorrr rodando em http://localhost:${PORT}`);
});

module.exports = app;