  const express = require('express');
  const router = express.Router();
  const ProductsDB = require('../modules/productsDB');
  const productsDB = new ProductsDB();
  const UsersDB = require('../modules/usersDB');
  const usersDB = new UsersDB();

  // PRODUCTS
  router.get('/products', async (req, res, next) => {
      let result = await productsDB.getAllProducts();
      res.json(result);
  });

  router.get('/products/:id', async (req, res, next) => {
      let result = await productsDB.getOneProduct(req.params.id);
      res.json(result);
  });

  router.post('/products/:id', async (req, res, next) => {
      let result = await productsDB.createProduct(req.body);
      res.json(result);
  });

  // USERS
  router.get('/users', async (req, res, next) => {
      let result = await usersDB.getAllUsers();
      res.json(result);
  });

  router.get('/users/:id', async (req, res, next) => {
      let result = await usersDB.getOneUser(req.params.id);
      res.json(result);
  });

  router.post('/products/:id', async (req, res, next) => {
      let result = await usersDB.createUser(req.body);
      res.json(result);
  });


  module.exports = router;