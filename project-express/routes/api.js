const express = require('express');
const router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();
const UsersDB = require('../modules/usersDB');
const usersDB = new UsersDB();
const OrdersDB = require('../modules/orderDB');
const ordersDB = new OrdersDB();
const AdminsDB = require('../modules/adminDB');
const adminsDB = new AdminsDB();

// Check API
router.get('/', (req, res, next) => {
    res.json('API works :)');
});

// PRODUCTS
// Get all products
router.get('/products', async (req, res, next) => {
    let result = await productDB.getAllProducts();
    res.json(result);
});

// Get one product
router.get('/products/:id', async (req, res, next) => {
    let result = await productDB.getOneProduct();
    res.json(result);
});

// Update product
router.post('/products/:id', async (req, res, next) => {
    let result = await productDB.updateProduct(req.body);
    res.json(result);
});

// Create new product
router.put('/products', async (req, res, next) => {
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

// ADMINS
// Get all admins
router.get('/admins', async (req, res, next) => {
    let result = await adminsDB.getAllAdmins();
    res.json(result);
});

// Get one admin
router.get('/admins/:id', async (req, res, next) => {
    let result = await adminsDB.getOneAdmin(req.params.id);
    res.json(result);
});

// Delete admin
router.delete('/admins/:id', async (req, res, next) => {
    let admin = await adminsDB.getOneAdmin(req.params.id);
    let result = await adminsDB.deleteAdmin(admin);
    res.json(result);
});

// Update admin
router.post('/admins/:id', async (req, res, next) => {
    let result = await adminsDB.updateAdmin(req.body);
    res.json(result);
});

// Create admin
router.post('/admins', async (req, res, next) => {
    let result = await adminsDB.createAdmin(req.body);
    res.json(result);
});

// ORDERS
// Get all orders
router.get('/orders', async (req, res, next) => {
    let result = await ordersDB.getAllOrders();
    res.json(result);
});

router.post('/orders/:id', async (req, res, next) => {
    let result = await ordersDB.updateOrder(req.body);
    res.json(result);
});

module.exports = router;