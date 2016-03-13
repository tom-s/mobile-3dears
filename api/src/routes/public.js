import Router from 'koa-router'
import passport from '../auth'
import jwt from 'jsonwebtoken'
import CONF from '../../config/conf'
import shortid from 'shortid'
import passwordHash from 'password-hash'
import {sendEmailValidation} from '../services/mailer'

// Models
import User from '../models/User'

// Token settings
const TOKEN_EXPIRE_DURATION = 1440 * 30 // 30 days'

/* Routes */
const publicRouter = new Router()

publicRouter.get('/validation', function *() {
  const { email, token } = this.query
  if (!email || !token) {
    this.throw(400)
  }

  const user = yield User.findOne({ email, emailConfirmationToken: token, emailConfirmed: false })
  if (user) {
    user.emailConfirmed = true
    user.emailConfirmationToken = null
    yield user.save()
    this.status = 200
    this.body = 'Your account has been activated. Go to the website : <a href="http://localhost:3000/"> Click here </a>' // @todo: make it better
  } else {
    this.throw(400)
  }
})

publicRouter.post('/user', function *() {
  const { email, password } = this.request.body
  if (!email || !password) {
    this.throw(400)
  }

  const existingUser = yield User.findOne({ email: email })

  if (existingUser) {
    this.throw(409)
  } else {
    const emailConfirmationToken = shortid.generate()
    const hashedPassword = passwordHash.generate('password123')

    const newUser = User({
      email: email,
      username: email,
      password: hashedPassword,
      emailConfirmationToken: emailConfirmationToken,
      emailConfirmed: false
    })
    try {
      yield newUser.save()
      sendEmailValidation({
        email,
        emailConfirmationToken
      })
      this.status = 201
    } catch (err) {
      this.throw(500)
    }
  }
})

publicRouter.post('/login', function *() {
  const ctx = this
  yield passport.authenticate('local', { session: false }, function * (err, user, info) {
    if (err) throw err
    if (!user) {
      ctx.status = 401
      ctx.body = { success: false }
    } else {
      // create a token
      const token = jwt.sign(user, CONF.TOKEN_SECRET, {
        expiresInMinutes: TOKEN_EXPIRE_DURATION
      })
      ctx.body = {
        success: true,
        user: {
          token: token,
          id: user.id
        }
      }
    }
  })
})

export default publicRouter
