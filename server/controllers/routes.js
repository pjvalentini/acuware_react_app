var path = require('path');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

var models = require('../models');

module.exports = (app, passport) => {

	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});

	app.get('/api/sign-up', function(req, res) {
		console.log(res);
		if (req.user) {
			res.json({ message: 'signed-in', user_id: req.user.id });
		}
	});

	app.get('/api/sign-in', function(req, res) {
		if (req.user) {
			res.json({ message: 'signed-in', user_id: req.user.id });
		}
	});

	app.post('/api/sign-up', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			if (err) {
				return next(err);
			} else {
				res.json({ user: user, info: info });
			}
		})(req, res, next);
	});

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

	app.get('/api/signed-in', (req, res) => {
		console.log(req.user);
		if (req.user) {
			res.json({ message: 'signed-in', user: req.user });
		} else {
			res.json({ message: 'no req.user' });
		}
	});

	app.delete('/api/logout', function(req, res) {
		req.session.destroy(function() {
			res.status(204).send();
		});
	});

	app.get('*', function(req,res) {
		res.sendFile(path.join(__dirname, './../../client/public/index.html'));
	});
};
