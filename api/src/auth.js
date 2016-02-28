import passport from 'koa-passport';
import passportLocal from 'passport-local';

passport.use(new passportLocal.Strategy((username, password, done) => {
  // retrieve user ...
  const user = {
    username: 'test'
  };
  if (username === 'test' && password === 'test') {
    done(null, user);
  } else {
    done(null, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;