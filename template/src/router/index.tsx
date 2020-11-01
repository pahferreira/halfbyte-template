import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import PrivateRoute from 'utils/PrivateRoute'
import {TRoute} from 'types/router'

const RouterContainer: FC = () => {
  return <Switch>
          {routes.map((route: TRoute) => {
        if (route.private) {
          return (
            <PrivateRoute
              exact={route?.notExact ? false : true}
              component={route.component}
              path={process.env.PUBLIC_URL + route.path}
            />
          )
        }
        return (
          <Route
            exact={route?.notExact ? false : true}
            path={process.env.PUBLIC_URL + route.path}
            component={route.component}
            key={route.path}
          />
        )
      })}
  </Switch>
}

export default RouterContainer
