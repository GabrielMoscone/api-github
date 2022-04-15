import React, { memo } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Dashboard from '../components/pages/Dashboard'

const Routes = memo(() => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  )
})

export default Routes
