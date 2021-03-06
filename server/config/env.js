require('dotenv').config();
const env = {
	DATABASE_NAME: process.env.DATABASE_NAME || '',
	DATABASE_HOST: process.env.DATABASE_HOST || '',
	DATABASE_USERNAME: process.env.DATABASE_USERNAME || '',
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
	DATABASE_PORT: process.env.DATABASE_PORT || '',
	DATABASE_DIALECT: process.env.DATABASE_DIALECT || '',
	NODE_ENV: process.env.NODE_ENV || '',
	SERVER_PORT: process.env.SERVER_PORT || ''
};

module.exports = env;
