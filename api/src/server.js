import koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import session from 'koa-session';
import passport from './auth';


/************
* Bootstrap *
************/
// Create app
const app = koa();

// Logger
app.use(logger());

// (guest) Session
app.keys = ['3dearskey'];
app.use(session(app))

// Auth
app.use(passport.initialize());
app.use(passport.session());

/**********
* Routing *
**********/

/** Public  **/
const publicRouter = new Router();

//Configure /auth/github & /auth/github/callback
publicRouter.get('/auth/github', passport.authenticate('github', {scope: ['user','repo']}));
publicRouter.get('/auth/github/callback',
  passport.authenticate('github', {successReturnToOrRedirect: '/', failureRedirect: '/'})
);


app.use(publicRouter.routes());



/** Secured  **/
const securedRouter = new Router();

//Middleware: authed
function *authed(next){
  if (this.req.isAuthenticated()){
    yield next;
  } else {
    //Set redirect path in session
    this.session.returnTo = this.session.returnTo || this.req.url;
    this.redirect('/auth/github');
  }
}

securedRouter.get('/app', authed, function *(){
  this.body = 'Secured Zone: koa-tutorial\n' + JSON.stringify(this.req.user, null, '\t');
});

app.use(securedRouter.routes());

/**********
* Init *
**********/
app.use(function *() {
	// Ignore favicon
  if (this.path === '/favicon.ico') return;
  var n = this.session.views || 0;

  // Add session data
  this.session.views = ++n;
  
  // Body
  this.body = 'Hello from koajs';
});


app.listen(3000);