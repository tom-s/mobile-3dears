import koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import passport from './auth';

// Routes
import publicRouter from './routes/public';
import securedRouter from './routes/public';

/* Boostrap */
// Create app
const app = koa();

// Logger
app.use(logger());

// (guest) Session
app.keys = ['3dearskey'];
app.use(session(app));

// Auth
app.use(passport.initialize());
app.use(passport.session());

/* Routing */
// public
app.use(publicRouter.routes());


// secured
app.use(securedRouter.routes());

/* Init */
app.use(function *() {
	// Ignore favicon
  if (this.path === '/favicon.ico') return;
  let n = this.session.views || 0;

  // Add session data
  this.session.views = ++n;

  // Body
  this.body = 'Hello from koajs';
});


app.listen(3000);