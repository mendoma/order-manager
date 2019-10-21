const db = require('../config/db');

module.exports = {
	index(_req, res) {
		db.markets
			.findAll()
			.then(response => res.json(response))
			.catch(err => res.json(err));
	},
	marketZipcodes(_req, res) {
		const { id } = _req.params;

		db.zipcodes
			.findAll({ where: { marketId: id } })
			.then(response => res.json(response))
			.catch(err => console.log('error'));
	}
};
