const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = require('../models/userModel');

//stuffs into cookie
passport.serializeUser((user, done) => {
	done(null, user.id);
	console.log('serializeUser: ' + user);
});

//pulls from cookie to make mongoose model instance
passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
		console.log('deserializeUser' + user);
	});
});

//console.developers.google.com
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }, async (err, user) => {
				if (err) {
					return done(err, null);
				}

				if (!user) {
					const newUser = new User({
						googleId: profile.id,
						name: profile.name.givenName,
					});

					await newUser.save();
					done(null, newUser);
				}
				done(null, user);
			});
		}
	)
);
