const Sale = require('../models/Sale');

module.exports = {
    async store(req, res) {
        const sale = await Sale.create(req.body);
        return res.json(sale);
    }
};