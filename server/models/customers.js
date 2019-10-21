/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		stripe_token: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		first_name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		company: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'customers'
	});
};
