/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BeersList from '../beers/list'
import BeerDetails from '../beers/details'
import NotFound from '../../components/notFound'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={BeersList} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
)

export default App
