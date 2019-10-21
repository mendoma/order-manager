/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('jobs', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		queue: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		payload: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		attempts: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		reserved: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		reserved_at: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		available_at: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		created_at: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'jobs'
	});
};
