// 2. GET: Listar todos os pedidos.
app.get('/order/list', (req, res) => {
    return res.status(200).json({ message: "tudo ok aqui"});
});
