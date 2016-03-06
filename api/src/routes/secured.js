import Router from 'koa-router'
import passport from 'passport'

const securedRouter = new Router()

const authed = function *(next) {
  var ctx = this
  try {
    yield passport.authenticate('bearer', { session: false }, function * (err, user, info) {
      if (err) throw err
      ctx.body = {
        user: {
          id: user.id
        }
      }
    })
    yield next
  } catch (err) {
    ctx.status = 401
  }
}

// Routes
securedRouter.get('/app', authed, function *() {
  const body = { data: 'Secured Zone: koa-tutorial' }
  this.body = Object.assign({}, this.body, body)
})

export default securedRouter