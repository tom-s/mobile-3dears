import Router from 'koa-router'
import passport from '../auth'
import jwt from 'jsonwebtoken'

const TOKEN_SECRET = 'thisissecret'

const publicRouter = new Router()

publicRouter.get('/public', function *() {
  const body = 'Public Zone: koa'
  this.body = body
})

publicRouter.post('/login', function *() {
  const ctx = this
  yield passport.authenticate('local', function *(err, user, info) {
    if (err) throw err
    if (!user) {
      ctx.status = 401
      ctx.body = { success: false }
    } else {
      // create a token
      const token = jwt.sign(user, TOKEN_SECRET, {
        expiresInMinutes: 1440 * 30 // expires in 30 days
      })
      ctx.body = {
        success: true,
        token: token
      }
    }
  })
})

export default publicRouter