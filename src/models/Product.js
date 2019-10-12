const {
    Schema,
    model
} = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    price: Number,
    multiple: {
        type: Number,
        default: 1
    },
    picture: String
}, {
    timestamps: true
});

module.exports = model('Product', ProductSchema);