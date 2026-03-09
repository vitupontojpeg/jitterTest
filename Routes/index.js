const express = require('express');
const router = express.Router();
const Order = require('../db_conn');

// 1. POST: Um novo pedido.
router.post('/order', (req, res) => {
	const { orderId, value, items } = req.body;

	try{
		if (!orderId || !value || !items) return res.send({ error: 'Dados insuficientes'});

	   	Order.create({
	   		orderId: orderId,
	   		value: value,
	   		items: [
	   			{ productId: items[0], quantity: items[1], price: items[2]}
	   		]});

	   	const data = Order.findOne({ orderId: orderId });
	   	return res.send(data);

	   } catch {
	   		res.status().json({
	   			mensagem: "Erro na criacao do pedido",
	   			erro: error.message
	   		});
	   }
	
});

// 2. GET: Listar todos os pedidos.
router.get('/order/list', (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);

	} catch (error) {
        res.status(500).json({ 
            mensagem: "Erro ao buscar a lista de pedidos", 
            erro: error.message 
        });
    }
});

// 3. GET: Buscar um pedido específico pelo ID.
router.get('/order/:id', (req, res) => {
	try {
		const orderId = req.params.id;
		const order = await Order.findById(id);

		if (!order) {
            return res.status(404).json({ 
                mensagem: "Pedido não encontrado." 
            });
        }

        res.status(200).json(order);
	} catch (error) {
        res.status(500).json({ 
            mensagem: "Erro ao buscar pedido. Verifique se o ID está correto.", 
            erro: error.message 
        });
    }
});

// 4. PUT: Atualizar um pedido existente.
router.put('/order/:id', (req, res) => {
	try {
        const id = req.params.id;
        const orderDataUpdate = req.body;

        // O segredo está nas opções: { new: true }
        const updatedOrder = await Order.findByIdAndUpdate(
            id, 
            orderDataUpdate, 
            { 
                new: true,           // Retorna o objeto JÁ ATUALIZADO (sem isso, retorna o antigo)
                runValidators: true  // Garante que os novos dados sigam as regras do seu Schema
            }
        );

        if (!updatedOrder) {
            return res.status(404).json({ mensagem: "Pedido não encontrado para atualização." });
        }

        res.status(200).json({
            mensagem: "Pedido atualizado com sucesso!",
            dados: updatedOrder
        });

    } catch (error) {
        res.status(500).json({ 
            mensagem: "Erro ao atualizar o pedido", 
            erro: error.message 
        });
    }
});

// 5. DELETE: Remover um pedido.
router.delete('/order/:id', (req, res) => {
	try {
		const orderId = req.params.id;
		const deletedOrder = await Order.findByIdAndDelete(orderId);

		if (!deletedOrder) {
            return res.status(404).json({ 
                mensagem: "Erro: Pedido não encontrado para exclusão." 
            });
        }

        res.status(200).json({
            mensagem: "Pedido removido com sucesso!",
            objetoRemovido: pedidoDeletado
        });	
	} catch (error) {
		res.status(500).json({ 
            mensagem: "Erro ao deletar o pedido", 
            erro: error.message 
        });
	}
});


module.exports = router;