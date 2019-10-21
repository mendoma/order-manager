const db = require('../config/db');

module.exports = {
	index(_req, res) {
		db.customers
			.findAll()
			.then(response => res.json(response))
			.catch(err => {
				res.status(404);
				res.render('error', { error: err });
			});
	}
};
