import Router from 'koa-router'
import passport from 'passport'

import User from '../models/User'

const securedRouter = new Router()

const authed = function *(next) {
  var ctx = this
  try {
    yield passport.authenticate('bearer', { session: false }, function * (err, user, info) {
      if (err) throw err
      ctx.user = {
        id: user.id
      }
    })
    yield next
  } catch (err) {
    ctx.status = 401
  }
}

// Routes
securedRouter.get('/init', authed, function *() {
  const user = yield User.find({ _id: this.user.id })
    .populate('powerUps')
    .populate('achievements')
    .populate('trainingResults.training')
    .populate('progress.course')
    .populate('progress.courseType')
     // retrieve all user data: progress, achievements, etc

  if (user) {
    this.status = 200
    this.body = { user }
  } else {
    this.throw(400)
  }
})

export default securedRouter