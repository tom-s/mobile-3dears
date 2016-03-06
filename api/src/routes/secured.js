import Router from 'koa-router'

const securedRouter = new Router()

// Middleware: authed
function * authed (next) {
  if (this.req.isAuthenticated()) {
    yield next
  } else {
    // this.session.returnTo = this.session.returnTo || this.req.url/ Set redirect path in session
    this.redirect('/login')
  }
}

// Routes
securedRouter.get('/app', authed, function *() {
  const request = JSON.stringify(this.req.user, null, '\t')
  const body = `Secured Zone: koa-tutorial\n${request}`
  this.body = body
})

export default securedRouter