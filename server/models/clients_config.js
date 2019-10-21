/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('clients_config', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		client_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		market_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		configs: {
			type: DataTypes.TEXT,
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
		}
	}, {
		tableName: 'clients_config'
	});
};
