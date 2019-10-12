const {
    Schema,
    model
} = require('mongoose');

const ProdSchema = new Schema({
    productId: Schema.Types.ObjectId,
    price: Number,
    amount: {
        type: Number,
        default: 1
    }
}, {
    _id: false
});

const SaleSchema = new Schema({
    clientId: Schema.Types.ObjectId,
    products: [ProdSchema],
}, {
    timestamps: true
});

module.exports = model('Sale', SaleSchema);