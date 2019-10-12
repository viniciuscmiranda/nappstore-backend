const express = require('express');
const ClientController = require('./controllers/ClientController');
const ProductController = require('./controllers/ProductController');
const SaleController = require('./controllers/SaleController');

const Client = require('./models/Client');
const Product = require('./models/Product');
const Sale = require('./models/Sale');

const routes = express.Router();

routes.post('/newclient', ClientController.store);
routes.post('/newproduct', ProductController.store);
routes.post('/newsale', SaleController.store);

routes.get('/clients', async(req, res) => {
    res.json(await Client.find());
});
routes.get('/products', async(req, res) => {
    res.json(await Product.find());
});
routes.get('/sales', async(req, res) => {
    res.json(await Sale.find());
});

module.exports = routes;
