const express = require('express');
const router = express.Router();
const DAO = require('../controllers/DAO');



router.get('/', DAO.handleCards)

module.exports = router