/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('discounts', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		market_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		code: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false,
			defaultValue: ''
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('dollar','percentage'),
			allowNull: false
		},
		expires_at: {
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
		tableName: 'discounts'
	});
};
