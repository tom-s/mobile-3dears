import koa from 'koa'
import logger from 'koa-logger'
import session from 'koa-session'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
import passport from './auth'
import mongoose from 'mongoose'
import { SESSION_SECRET } from '../../config/conf' // todo

// Routes
import publicRouter from './routes/public'
import securedRouter from './routes/secured'

/* DB connection */

mongoose.connect('mongodb://DannyDane:grimreever@ds059215.mongolab.com:59215/3dears')
mongoose.connection.on('error', () => {
  console.log('error connecting to DB')
})

/* Boostrap */
// Create app
const app = koa()

// Logger
app.use(logger())

// Cors
app.use(cors())

// Sessions
app.keys = [SESSION_SECRET]
app.use(session(app))

// Error handler
app.use(function *(next) {
  try {
    yield next
  } catch (err) {
    this.status = err.status || 500
    this.body = err.message
  }
})

// body parser
app.use(bodyParser({
  onerror (err) {
    err.status = 400
    err.message = 'bad json'
    throw err
  }
}))

// Auth
app.use(passport.initialize())

/* Routing */
// public
app.use(publicRouter.routes())

// secured
app.use(securedRouter.routes())

/* Default (should be 404) */
app.use(function *() {
	// Body
  this.status = 404
})

app.listen(3000)
