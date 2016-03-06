import koa from 'koa'
import logger from 'koa-logger'
import session from 'koa-session'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
import passport from './auth'
import CONF from '../config/conf'

// Routes
import publicRouter from './routes/public'
import securedRouter from './routes/secured'

/* Boostrap */
// Create app
const app = koa()

// Logger
app.use(logger())

// Cors
app.use(cors())

// Sessions
app.keys = [CONF.SESSION_SECRET]
app.use(session(app))

// body parser
app.use(bodyParser())

// Auth
app.use(passport.initialize())
// app.use(passport.session())

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