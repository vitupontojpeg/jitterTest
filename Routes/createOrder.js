// 1. POST: Um novo pedido.
app.post('/order', (req, res) => {
    // try {
    // 	const novaOrder = await Order.create(req.body);
    // 	res.status(201).json(novaOrder);
    // } catch (error) {
    // 	res.status(400).json({ message: "Erro ao criar uma order", erro: error.message });
    // }
    return res.status(200).json({ message: "tudo ok aqui"});
});