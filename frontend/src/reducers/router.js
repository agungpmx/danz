
import React from 'react'
import { Route} from "react-router-dom"

function generateRoutes(config, parentPath = '') {
    if (config.hasOwnProperty('routes')) {
        parentPath = config.path
      return <Route key={config.name} path={config.path}>{config.routes.map(item => generateRoutes(item, parentPath))}</Route>
    } else {
      return <Route key={config.name} path={parentPath + config.path} component={config.component}/>
    }
  }


  const base = [
    {
      name: 'home',
      path: '/',
      component: require('../pages/home/index').default,
    },
    {
      name: 'detail',
      path: '/detail/:id',
      component: require('../pages/detail/index').default,
    },
    {
      name: 'dataNotFound',
      path: '/data-not-found',
      component: require('../components/DataNotFound/index').default,
    },
  ] 

export default function router (state = {
      routes: base.map(item => generateRoutes(item)),
      base: base
  }, action) {
    switch (action.type) {
        default: return state
      }
  }