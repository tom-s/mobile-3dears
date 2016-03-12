import Router from 'koa-router'
import passport from '../auth'
import jwt from 'jsonwebtoken'
import thunkify from 'thunkify'
import CONF from '../../config/conf'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
import shortid from 'shortid'
import passwordHash from 'password-hash'

// Models
import User from '../models/User'

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const CONF_MAIL = {
  service: 'Mailgun',
  auth: {
    api_key: 'key-826bb010d334f23aa20ff733287e7f46',
    domain: 'sandbox2e9cb37771bd40dda6440a0287c8488d.mailgun.org'
  }
}

// Token settings
const TOKEN_EXPIRE_DURATION = 1440 * 30 // 30 days'

/* Routes */

const publicRouter = new Router()

publicRouter.get('/public', function *() {
  const body = 'Public Zone: koa'
  this.body = body
})

publicRouter.post('/user', function *() {
  console.log("ahah")
  const { email, password } = this.request.body
  if (!email || !password) {
    this.throw(400)
  }

  const hashedPassword = passwordHash.generate('password123')
  console.log('password', hashedPassword)

  const userExist = false
  if (userExist) {
    // todo
  } else {
    console.log("try adding user")
    const newUser = User({
      email: email,
      username: email,
      password: hashedPassword,
      emailConfirmationToken: shortid.generate(),
      emailConfirmed: false
    })
    try {
      const user = yield newUser.save()
      console.log('res', user)
    } catch (err) {
      console.log("err", err)
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
