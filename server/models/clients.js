/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('clients', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		api_token: {
			type: DataTypes.STRING(60),
			allowNull: false,
			unique: true
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
		tableName: 'clients'
	});
};
