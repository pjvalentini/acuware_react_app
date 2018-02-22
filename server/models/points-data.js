var bcrypt = require('bcryptjs');
var cryptojs = require('crypto-js');


module.exports = function(sequelize, DataTypes) {
	var Points = sequelize.define('Points', {
		meridian: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		english_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		pinyin_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		chinese_character: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		clinical_uses: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		point_associations: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		classMethods: {
					associate: function(models) {
					 // associations can be defined here
					},
		},
		instanceMethods: {
		}
	});
	return Points;
};
