import Router from 'koa-router'
import passport from '../auth'
import jwt from 'jsonwebtoken'
import CONF from '../../config/conf'

const TOKEN_EXPIRE_DURATION = 1440 * 30 // 30 days'

const publicRouter = new Router()

publicRouter.get('/public', function *() {
  const body = 'Public Zone: koa'
  this.body = body
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