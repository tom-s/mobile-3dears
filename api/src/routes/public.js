import Router from 'koa-router'
import passport from '../auth'

const publicRouter = new Router()

publicRouter.get('/public', function*() {
  const body = 'Public Zone: koa'
  this.body = body
})

publicRouter.post('/login', function*() {
  const ctx = this
  yield passport.authenticate('local', function*(err, user, info) {
    console.log('res', user, info)
    if (err) throw err
    if (!user) {
      ctx.status = 401
      ctx.body = { success: false }
    } else {
      yield ctx.login(user)
      ctx.body = { success: true }
      ctx.session.maxAge = (10 * 365 * 24 * 60 * 60) // 10 years
    }
  })
})

export default publicRouter