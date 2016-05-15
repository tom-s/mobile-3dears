import * as development from './development'
import * as production from './production'
import * as test from './test'

// Pick adequate conf file
const env = process.env.NODE_ENV || 'development'
const cfg = (env === 'production')
  ? production
  : (env === 'test') ? test : development

// Export conf variables
export const ASSETS_URL = cfg.ASSETS_URL

