const express = require('express');
const router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();
const UsersDB = require('../modules/usersDB');
const usersDB = new UsersDB();
const OrdersDB = require('../modules/orderDB');
const ordersDB = new OrdersDB();

// Check API
router.get('/', (req, res, next) => {
res.json('API works :)');
});

router.get('/products', async (req, res, next) => {
    let result = await productDB.getAllProducts();
    res.json(result);
});

router.get('/products/:id', async (req, res, next) => {
    let result = await productDB.getOneProduct();
    res.json(result);
});

router.post('/products/:id', async (req, res, next) => {
    let result = await productDB.createProduct(req.body);
    res.json(result);
});

// USERS
// Get all users
router.get('/users', async (req, res, next) => {
    let result = await usersDB.getAllUsers();
    res.json(result);
});

// Get one user
router.get('/users/:id', async (req, res, next) => {
    let result = await usersDB.getOneUser(req.params.id);
    res.json(result);
});

// Delete user
router.delete('/users/:id', async (req, res, next) => {
    let customer = await usersDB.getOneUser(req.params.id);
    let result = await usersDB.deleteUser(customer);
    res.json(result);
});

// Update user
router.post('/users/:id', async (req, res, next) => {
    let result = await usersDB.updateUser(req.body);
    res.json(result);
});

// ORDERS
// Get all orders
router.get('/orders', async (req, res, next) => {
    let result = await ordersDB.getAllOrders();
    res.json(result);
});

module.exports = router;
