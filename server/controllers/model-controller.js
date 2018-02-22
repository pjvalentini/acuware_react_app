var models = require('./../models');

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
	getAllPoints: (points) => {
		models.Points.findAll({}).then((res) => {
			points(res);
		});
	},
};
