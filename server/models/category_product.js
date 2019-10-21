/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('category_product', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		category_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		product_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		sort: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'category_product'
	});
};
