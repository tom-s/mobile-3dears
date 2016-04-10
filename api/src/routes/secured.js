import Router from 'koa-router'
import passport from 'passport'
import R from 'ramda'
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
  const data = yield User.findOne({ _id: this.user.id })
    .populate('powerUps')
    .populate('achievements')
    .populate('trainingResults.training')
    .populate('progress.course')
    .populate('progress.courseType')
     // retrieve all user data: progress, achievements, etc

  if (data) {
    this.status = 200

    // Organise data
    const user = R.pick(['_id', 'username', 'password'], data)
    const achievements = data.achievements
    const powerUps = data.powerUps
    const progress = data.progress
    const trainingResults = data.trainingResults
    const examResults = data.examResults

    this.body = { user, achievements, powerUps, progress, trainingResults, examResults }
  } else {
    this.throw(400)
  }
})

export default securedRouter