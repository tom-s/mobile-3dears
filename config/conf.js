import * as development from './development'
import * as production from './production'

// Pick adequate conf file
const env = process.env.NODE_ENV || 'development'
const cfg = (env === 'production') ? production : development

// Export conf variables
export const ROOT_URL = cfg.ROOT_URL
export const API_URL = cfg.API_URL
export const TOKEN_EXPIRE_DURATION = cfg.TOKEN_EXPIRE_DURATION
export const TOKEN_SECRET = cfg.TOKEN_SECRET
export const SESSION_SECRET = cfg.SESSION_SECRET
export const MAILGUN_CONF = cfg.MAILGUN_CONF
