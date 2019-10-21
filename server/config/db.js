const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(
	env.DATABASE_NAME,
	env.DATABASE_USERNAME,
	env.DATABASE_PASSWORD,
	{
		host: env.DATABASE_HOST,
		port: env.DATABASE_PORT,
		dialect: env.DATABASE_DIALECT,
		define: {
			underscored: true,
			timestamps: false
		}
	}
);

// Connect all the models/tables in the database to a db object,
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.addresses = require('../models/addresses.js')(sequelize, Sequelize);
db.appointments = require('../models/appointments.js')(sequelize, Sequelize);
db.audit = require('../models/audit.js')(sequelize, Sequelize);
db.availabilities = require('../models/availabilities.js')(sequelize, Sequelize);
db.capacities = require('../models/capacities.js')(sequelize, Sequelize);
db.categories = require('../models/categories.js')(sequelize, Sequelize);
db.category_product = require('../models/category_product.js')(sequelize, Sequelize);
db.clients_config = require('../models/clients_config.js')(sequelize, Sequelize);
db.clients = require('../models/clients.js')(sequelize, Sequelize);
db.customers = require('../models/customers.js')(sequelize, Sequelize);
db.discounts = require('../models/discounts.js')(sequelize, Sequelize);
db.jobs = require('../models/jobs.js')(sequelize, Sequelize);
db.markets = require('../models/markets.js')(sequelize, Sequelize);
db.order_items = require('../models/order_items.js')(sequelize, Sequelize);
db.order_notes = require('../models/order_notes.js')(sequelize, Sequelize);
db.orders = require('../models/orders.js')(sequelize, Sequelize);
db.product_images = require('../models/product_images.js')(sequelize, Sequelize);
db.product_pricing = require('../models/product_pricing.js')(sequelize, Sequelize);
db.products = require('../models/products.js')(sequelize, Sequelize);
db.users = require('../models/users.js')(sequelize, Sequelize);
db.zipcodes = require('../models/zipcodes.js')(sequelize, Sequelize);

//Relations
db.zipcodes.belongsTo(db.markets);
db.markets.hasMany(db.zipcodes);

module.exports = db;
