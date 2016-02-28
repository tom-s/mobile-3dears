import Router from 'koa-router';
import passport from '../auth';

const publicRouter = new Router();

// Configure /auth/github & /auth/github/callback
publicRouter.get('/auth/github', passport.authenticate('github', { scope: ['user', 'repo'] }));
publicRouter.get('/auth/github/callback',
  passport.authenticate('github', { successReturnToOrRedirect: '/', failureRedirect: '/' })
);

export default publicRouter;