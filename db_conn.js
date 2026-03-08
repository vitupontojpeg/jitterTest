const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/api_db';

mongoose.connect(mongoURI)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));


// Criando o schema do banco de dados.
const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    value: { type: Number , required: true },
    creationDate: { type: Date, default: Date.now },
    items: [
    	productId: { type: Number, required: true},
    	quantity: { type: Number, required: true},
    	price: { type: Number, required: true}
    ],
    __v: { type: , required: false }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;