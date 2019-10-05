const express = require('express');
const router = express.Router();
const ProductService = require('../services/productService');
const UserService = require('../services/userService');
const OrderService = require('../services/orderService');
const AdminService = require('../services/adminService');

const productService = new ProductService();
const userService = new UserService();
const orderService = new OrderService();
const adminService = new AdminService();

// Check API
router.get('/', (req, res, next) => {
    res.json('API works :)');
});

// PRODUCTS
// Get all products
router.get('/products', async (req, res, next) => {
    let result = await productService.getAllProducts();
    res.json(result);
});

// Get one product
router.get('/products/:id', async (req, res, next) => {
    let result = await productService.getOneProduct();
    res.json(result);
});

// Update product
router.post('/products/:id', async (req, res, next) => {
    let result = await productService.updateProduct(req.body);
    res.json(result);
});

// Create new product
router.put('/products', async (req, res, next) => {
    let result = await productService.createProduct(req.body);
    res.json(result);
});

// USERS
// Get all users
router.get('/users', async (req, res, next) => {
    let result = await userService.getAllUsers();
    res.json(result);
});

// Get one user
router.get('/users/:id', async (req, res, next) => {
    let result = await userService.getOneUser(req.params.id);
    res.json(result);
});

// Delete user
router.delete('/users/:id', async (req, res, next) => {
    let customer = await userService.getOneUser(req.params.id);
    let result = await userService.deleteUser(customer);
    res.json(result);
});

// Update user
router.post('/users/:id', async (req, res, next) => {
    let result = await userService.updateUser(req.body);
    res.json(result);
});

// ADMINS
// Get all admins
router.get('/admins', async (req, res, next) => {
    let result = await adminService.getAllAdmins();
    res.json(result);
});

// Get one admin
router.get('/admins/:id', async (req, res, next) => {
    let result = await adminService.getOneAdmin(req.params.id);
    res.json(result);
});

// Delete admin
router.delete('/admins/:id', async (req, res, next) => {
    let admin = await adminService.getOneAdmin(req.params.id);
    let result = await adminService.deleteAdmin(admin);
    res.json(result);
});

// Update admin
router.post('/admins/:id', async (req, res, next) => {
    let result = await adminService.updateAdmin(req.body);
    res.json(result);
});

// Create admin
router.post('/admins', async (req, res, next) => {
    let result = await adminService.createAdmin(req.body);
    res.json(result);
});

// ORDERS
// Get all orders
router.get('/orders', async (req, res, next) => {
    let result = await orderService.getAllOrders();
    res.json(result);
});

router.post('/orders/:id', async (req, res, next) => {
    let result = await orderService.updateOrder(req.body);
    res.json(result);
});

module.exports = router;