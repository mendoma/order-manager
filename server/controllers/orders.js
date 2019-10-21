const db = require('../config/db');

module.exports = {
	index: (_req, res) => {
		db.orders.findAll().then(response => res.json(response));
	}
};
