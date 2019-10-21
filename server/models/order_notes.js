/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('order_notes', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		user: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'order_notes'
	});
};
