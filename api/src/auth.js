import passport from 'koa-passport'
import passportLocal from 'passport-local'
import passportBearer from 'passport-http-bearer'
import jwt from 'jsonwebtoken'
import passwordHash from 'password-hash'
import R from 'ramda'
import { TOKEN_SECRET } from '../../config/conf'

// Models
import User from './models/User'

const LocalStrategy = passportLocal.Strategy
const BearerStrategy = passportBearer.Strategy

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  done(null, id)
})

/**
 * LocalStrategy
 *
 * This strategy is used to authenticate users based on a username and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username: username, emailConfirmed: true }, (err, user) => {
    if (err || !user) {
      done(null, false)
    } else {
      // Check password
      if (passwordHash.verify(password, user.password)) {
        user = R.pick(['id', 'email', 'username'], user)
        done(null, user)
      } else {
        done(null, false)
      }
    }
  })
}))

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token).  If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
passport.use(new BearerStrategy((accessToken, done) => {
  jwt.verify(accessToken, TOKEN_SECRET, (err, decoded) => {
    if (err) { return done(err) }
    User.findOne({ username: decoded.username }, (err, user) => {
      done(null, user, { scope: 'all' })
    })
  })

  /*
  db.accessTokens.find(accessToken, function (err, token) {
    if (err) { return done(err) }
    if (!token) { return done(null, false) }

    if (token.userID !== null) {
      db.users.find(token.userID, function (err, user) {
        if (err) { return done(err) }
        if (!user) { return done(null, false) }
              // to keep this example simple, restricted scopes are not implemented,
              // and this is just for illustrative purposes
        var info = { scope: '*' }
        done(null, user, info)
      })
    }
  })*/
}))

/*
const FacebookStrategy = require('passport-facebook').Strategy
passport.use(new FacebookStrategy({
    clientID: 'your-client-id',
    clientSecret: 'your-secret',
    callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/facebook/callback'
  },
  function(token, tokenSecret, profile, done) {
    // retrieve user ...
    done(null, user)
  }
))

const TwitterStrategy = require('passport-twitter').Strategy
passport.use(new TwitterStrategy({
    consumerKey: 'your-consumer-key',
    consumerSecret: 'your-secret',
    callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, done) {
    // retrieve user ...
    done(null, user)
  }
))

const GoogleStrategy = require('passport-google-auth').Strategy
passport.use(new GoogleStrategy({
    clientId: 'your-client-id',
    clientSecret: 'your-secret',
    callbackURL: 'http://localhost:' + (process.env.PORT || 3000) + '/auth/google/callback'
  },
  function(token, tokenSecret, profile, done) {
    // retrieve user ...
    done(null, user)
  }
))*/

module.exports = passport
