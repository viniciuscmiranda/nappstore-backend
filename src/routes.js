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

routes.get('/clients/:id', async(req, res) => {
    res.json(await Client.findById(req.params.id));
});

routes.get('/products/:id', async(req, res) => {
    res.json(await Product.findById(req.params.id));
});

routes.get('/sales/:id', async(req, res) => {
    res.json(await Sale.findById(req.params.id));
});


routes.delete('/sales/:id', async(req, res) => {
    const sale = await Sale.findById(req.params.id);
    await sale.remove();
    res.send();
});

routes.delete('/clients/:id', async(req, res) => {
    const client = await Client.findById(req.params.id);
    await client.remove();
    res.send();
});

routes.delete('/products/:id', async(req, res) => {
    const product = await Product.findById(req.params.id);
    await product.remove();
    res.send();
});

module.exports = routes;
