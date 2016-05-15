import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'

// Services
import initRouter from './services/routing'

// Pages
import AboutPage from './containers/pages/About'
import HomePage from './containers/pages/Home'
import TrainingPage from './containers/pages/Training'
import UrlErrorPage from './containers/pages/UrlError'

export default(store) => {

  const { loadAuth, loginRequired, checkTraining } = initRouter(store)

  return (
    <Route path="" onEnter={loadAuth} component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/training/:type/:exerciseId" onEnter={checkTraining} component={TrainingPage} />
      <Route path="/404" component={UrlErrorPage}/>
      <Route path="*" component={UrlErrorPage}/>
    </Route>
  )
}
