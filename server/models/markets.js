/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('markets', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		stair_surcharge: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		pickup_surcharge: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '0000-00-00 00:00:00'
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '0000-00-00 00:00:00'
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'markets'
	});
};
