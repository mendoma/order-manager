const db = require('../config/db');

module.exports = {
	index: (_req, res) => {
		db.zipcodes.findAll().then(response => res.json(response));
	}
};
