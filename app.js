const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./server/config/db');
const env = require('./server/config/env');
const apiRoutes = require('./server/router');
const app = express();

// Port to listen on
const PORT = env.SERVER_PORT;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', apiRoutes);

db.sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`The Order Manager API is running on http://localhost:${PORT}`);
	});
});
