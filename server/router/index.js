const router = require('express').Router();
const orderController = require('../controllers/orders');
const customerController = require('../controllers/customers');
const marketController = require('../controllers/markets');
const zipcodeController = require('../controllers/zipcodes');

// Orders
router.route('/orders').get(orderController.index);

// Customers
router.route('/customers').get(customerController.index);

// Markets
router
    .route('/markets')
    .get(marketController.index);

router
    .route('/markets/:id')
    .get(marketController.marketZipcodes)

// Zipcodes
router
	.route('/zipcodes')
    .get(zipcodeController.index)

module.exports = router;
