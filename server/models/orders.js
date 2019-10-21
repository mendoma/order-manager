/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('orders', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		market_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		discount_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tax_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.ENUM('payment pending','paid','complete','canceled'),
			allowNull: false,
			defaultValue: 'payment pending'
		},
		completed_at: {
			type: DataTypes.DATE,
			allowNull: true
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
		tableName: 'orders'
	});
};
