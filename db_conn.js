const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Criando o schema do banco de dados.
const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    value: { type: Number , required: true },
    creationDate: { type: Date, default: Date.now },
    items: [{
    	productId: { type: Number, required: true },
    	quantity: { type: Number, required: true },
    	price: { type: Number, required: true }
    }],
});


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;