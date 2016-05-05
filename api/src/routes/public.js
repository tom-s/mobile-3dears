import Router from 'koa-router'
import passport from '../auth'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET, TOKEN_EXPIRE_DURATION } from '../../config/conf'
import shortid from 'shortid'
import passwordHash from 'password-hash'
import {sendEmailValidation} from '../services/mailer'

// Models
import User from '../models/User'

/* Routes */
const publicRouter = new Router()

publicRouter.post('/validation', function *() {
  const { email, token } = this.request.body
  if (!email || !token) {
    this.throw(400)
  }

  const user = yield User.findOne({ email, emailConfirmationToken: token, emailConfirmed: false })
  if (user) {
    user.emailConfirmed = true
    user.emailConfirmationToken = null
    yield user.save()
    this.status = 200
    this.body = { success: true }
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
    const hashedPassword = passwordHash.generate(password)

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
      this.body = { success: true }
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
      const token = jwt.sign(user, TOKEN_SECRET, {
        expiresInMinutes: TOKEN_EXPIRE_DURATION
      })
      ctx.body = {
        success: true,
        token: token
      }
    }
  })
})

export default publicRouter
