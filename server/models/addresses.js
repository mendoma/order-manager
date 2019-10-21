/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('addresses', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		street_1: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		street_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		state: {
			type: DataTypes.STRING(2),
			allowNull: false,
			defaultValue: ''
		},
		zip: {
			type: DataTypes.STRING(5),
			allowNull: false,
			defaultValue: ''
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
		tableName: 'addresses'
	});
};
