/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('audit', {
		'id': {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'type': {
			type: DataTypes.ENUM('error','audit'),
			allowNull: false,
			comment: "null"
		},
		'action': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'message': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'created_at': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'updated_at': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'audit'
	});
};
