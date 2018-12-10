var models = require('./../models');

// Here we can manipulate the data from the models structuring it how we want it.

// This createPoint function will create the model Points and can be called in the routes.js file.
module.exports = {
	createPoint: (meridian, english_name, pinyin_name, chinese_character, location, clinical_uses, point_associations, pointsData) => {
			models.Points.create({
				meridian: meridian,
				english_name: english_name,
				pinyin_name: pinyin_name,
				chinese_character: chinese_character,
				location: location,
				clinical_uses: clinical_uses,
				point_associations: point_associations,
		}).then((res) => {
				pointsData(res);
		});
	},

// Function getAllPoints will run a findAll query to the DB, and can be called in the routes.js file.
	getAllPoints: (points) => {
		models.Points.findAll({}).then((res) => {
			points(res);
		});
	},
};
