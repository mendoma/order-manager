/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('appointments', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		address_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slot_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		task_id: {
			type: DataTypes.STRING(60),
			allowNull: true
		},
		storeganise_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		storeganise_updated: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.ENUM('dropoff','pickup','delivery'),
			allowNull: false,
			defaultValue: 'delivery'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00'
		},
		time_1: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		time_2: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		time_final: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		surcharge: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		notes: {
			type: DataTypes.TEXT,
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
		tableName: 'appointments'
	});
};
