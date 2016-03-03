import passport from 'koa-passport'
import passportLocal from 'passport-local'
import passportBearer from 'passport-http-bearer'

const LocalStrategy = passportLocal.Strategy
const BearerStrategy = passportBearer.Strategy

const testUser = { id: 1, username: 'test' }

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  done(null, testUser)
})

/**
 * LocalStrategy
 *
 * This strategy is used to authenticate users based on a username and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */
passport.use(new LocalStrategy((username, password, done) => {
  // retrieve user ...
  if (username === 'test' && password === 'test') {
    done(null, testUser)
  } else {
    done(null, false)
  }
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
    } else {
          // The request came from a client only since userID is null
          // therefore the client is passed back instead of a user
      db.clients.findByClientId(token.clientID, function (err, client) {
        if (err) { return done(err) }
        if (!client) { return done(null, false) }
              // to keep this example simple, restricted scopes are not implemented,
              // and this is just for illustrative purposes
        var info = { scope: '*' }
        done(null, client, info)
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
