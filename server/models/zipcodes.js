module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zipcodes', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		market_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		code: {
			type: DataTypes.STRING(5),
			allowNull: false,
			primaryKey: true
		},
		city: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		sqmi: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		tax_rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'zipcodes'
	});
};
