const express = require('express');
const router = express.Router();
const Order = require('../db_conn');

// 1. POST: Um novo pedido.
router.post('/order', (req, res) => {
	const { orderId, value, items } = req.body;

	if (!orderId || !value || items) return res.send({ error: 'Dados insuficientes'});

   	Order.create({
   		orderId: 12,
   		value: 0,
   		items: [{ productId: items[0], quantaty: items[1], price: items[2]}]
   	}, (err, data) => {
   		if(err) return res.send({ message: 'Erro na criacao do pedido', err: err});
   		return res.send(data);
   	});
});

// 2. GET: Listar todos os pedidos.
router.get('/order/list', (req, res) => {
	Order.find({}, (err, data)=> {
		if (err) return res.status(400).json({ message: "Houve um erro", error: err });
		return res.send(data);
	});
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