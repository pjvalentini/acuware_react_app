var path = require('path');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var mc = require('./model-controller.js');
var models = require('../models');

// Exporting to be required in server.js file.
module.exports = (app, passport) => {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

// Get Route for just signed in users.
	app.get('/api/sign-up', function(req, res) {
		// console.log(res); // shows me the user who just signed up.
		if (req.user) {
			res.json({ message: 'signed-in', user_id: req.user.id });
		}
	});

	app.get('/api/sign-in', function(req, res) {
		// console.log(res);
		if (req.user) {
			// console.log(req.user); // shows me the person who signed in throught the form.
			res.json({ message: 'signed-in', user_id: req.user.id });
		}
	});

	app.post('/api/sign-up', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			// console.log(user); // will show me the user that has just signed up to the site.
			if (err) {
				return next(err);
			} else {
				res.json({ user: user, info: info });
			}
		})(req, res, next);
	});

// Post route to send through the current user.
	app.post('/api/sign-in', function(req,res,next) {
		passport.authenticate('local-signin', function(err, user, info) {
		    if (err) {
		      	return next(err);
		    }
		    if (!user) {
		    	return res.status(401).json({ success : false, message : 'authentication failed', info: info });
		    }
		    req.login(user, function(err) {
					if (err) {
						return next(err);
				}
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });
		  });
	  })(req, res, next);
	});

// Get Route for users currently signed in
	app.get('/api/signed-in', (req, res) => {
		// console.log(req.user); // shows me the person currently signed in.
		if (req.user) {
			res.json({ message: 'signed-in', user: req.user });
		} else {
			res.json({ message: 'no req.user' });
		}
	});

// Delete Route to Logout.
	app.delete('/api/logout', function(req, res) {
		req.session.destroy(function() {
			res.status(204).send();
		});
	});

// Post route to create a point data for poulating DB in Postman.
	app.post('/api/create-point', (req, res) => {
		mc.createPoint(
			req.body.meridian,
			req.body.english_name,
			req.body.pinyin_name,
			req.body.chinese_character,
			req.body.location,
			req.body.clinical_uses,
			req.body.point_associations,
			(pointsData) => {
				res.json(pointsData);
			}
		);
	});

// Route to get all points from the DB
	app.get('/points', (req, res) => {
		mc.getAllPoints((points) => {
			points.forEach((point) => {
				point.clinical_uses = point.clinical_uses.split(".");
				point.point_associations = point.point_associations.split(".");
			});
			res.json(points);
		});
	});

	app.get('*', function(req,res) {
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});
};
