const express = require('express');
const router = express.Router();
// DB.js modul példányosítása
const DB = require('./../../modules/DB');
const dataBase = new DB();

// Api works
router.get('/',(req, res, next) => {    
    res.json('/api works');
});

module.exports = router;