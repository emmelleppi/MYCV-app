import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CurriculaDashboardPage from '../components/CurriculaDashboardPage'
import AddCurriculumPage from '../components/AddCurriculumPage'
import EditCurriculumPage from '../components/EditCurriculumPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' component={CurriculaDashboardPage} exact />
          <Route path='/create' component={AddCurriculumPage} />
          <Route path='/edit/:id' component={EditCurriculumPage} />
          <Route path='/help' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default AppRouter
