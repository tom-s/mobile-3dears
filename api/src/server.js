import koa from 'koa'
import logger from 'koa-logger'
import session from 'koa-session'
import passport from './auth'
import bodyParser from 'koa-bodyparser'

// Routes
import publicRouter from './routes/public'
import securedRouter from './routes/secured'

/* Boostrap */
// Create app
const app = koa()

// Logger
app.use(logger())

/*
// (guest) Session
app.keys = ['3dearskey']
app.use(session(app))*/

// sessions
app.keys = ['your-session-secret']
app.use(session(app))

// body parser
app.use(bodyParser())

// Auth
app.use(passport.initialize())
app.use(passport.session())

/* Routing */
// public
app.use(publicRouter.routes())


// secured
app.use(securedRouter.routes())

/* Default (should be 404) */
app.use(function *() {
	// Ignore favicon
  if (this.path === '/favicon.ico') return

  // Body
  this.body = 'Hello from koajs'
})


app.listen(3000)