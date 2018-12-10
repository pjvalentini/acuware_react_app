var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var models = require('./models');
models.sequelize.sync();

var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var app = express();
var routes = require('./controllers/routes.js');

var PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true,
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
	secret: 'lesson',
	store: new SequelizeStore({
		db: models.sequelize
 	}),
 	resave: true,
 	saveUninitialized: false
}));

// Passport middleware setup
app.use(passport.initialize());
app.use(passport.session());

// Express Middleware linking to public files.
app.use(express.static('./client/public'));

require('./controllers/passport.js')(passport);
require('./controllers/routes.js')(app, passport);

app.listen(PORT, ()=> {
	console.log("app listening on port: " + PORT);
});



