import passport from 'koa-passport';
import passportLocal from 'passport-local';

passport.use(new passportLocal.Strategy((username, password, done) => {
	// retrieve user ...
	let user = {
		username: 'test'
	};
  	if (username === 'test' && password === 'test') {
    	done(null, user);
  	} else {
    	done(null, false);
  	}
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;