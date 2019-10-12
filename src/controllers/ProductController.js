const Product = require('../models/Product');

module.exports = {
    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    }
};