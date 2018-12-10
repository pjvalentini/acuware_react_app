var models = require('../models');

var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
// sets up the object to be passed around
	passport.serializeUser(function(user, done) {
		done(null, user);
	});

// passes the object around from route to route
	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

// Setting up the LocalStrategy
	passport.use('local-signin', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true,
	},
	function(req, username, password, done) {
	// process.nextTick() which is used by developers in realtime applications everyday to defer the execution of a function until the next Event Loop Iteration
		process.nextTick(function() {
			// find User by Username and will check if there is a user or a valis password.
			models.User.findOne({ where: { username: username } }).then(function(user) {
				if (!user)
					return done(null, false, { message: 'no user' });
		        if (!bcrypt.compareSync(password, user.get('password_hash'))) {
		          return done(null, false, { message: 'incorrect password' });
		        }
				return done(null, user);
			});
		});
	}));

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true,
	},
	function(req, username, password, done) {
		process.nextTick(function() {
			models.User.findOne({ where: { username: username } }).then(function(user) {
				if (user) {
					return done(null, false, req.flash('signupMessage', 'That username already taken'));
				} else {
					// here we manipulate how we want our user data to be passed in to our DB
	  				return models.User.create({
	  					name: req.body.name,
	  					username: username,
	  					password: password,
	  				}).then(function(newUser) {
	  					return done(null, newUser);
						}).catch(function(err) {
							console.error(err);
						});
				  }
	  	  });
	   });
	}));
};
