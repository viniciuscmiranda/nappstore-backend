const Client = require('../models/Client');

module.exports = {
    async store(req, res){
        const client = await Client.create(req.body);
        return res.json(client);
    }
};