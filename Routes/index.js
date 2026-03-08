const express = require('express');
const router = express.Router();

// 1. POST: Um novo pedido.
router.post('/order', (req, res) => {
    // try {
    // 	const novaOrder = await Order.create(req.body);
    // 	res.status(201).json(novaOrder);
    // } catch (error) {
    // 	res.status(400).json({ message: "Erro ao criar uma order", erro: error.message });
    // }
    return res.status(200).json({ message: "tudo ok aqui"});
});

// 2. GET: Listar todos os pedidos.
router.get('/order/list', (req, res) => {
    return res.status(200).json({ message: "tudo ok aqui"});
});

// 3. GET: Buscar um pedido específico pelo ID.
router.get('/order/:id', (req, res) => {
    
});

// 4. PUT: Atualizar um pedido existente.
router.put('/order/:id', (req, res) => {
    
});

// 5. DELETE: Remover um pedido.
router.delete('/order/:id', (req, res) => {
    
});


module.exports = router;