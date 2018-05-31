import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CurriculaDashboardPage from '../components/CurriculaDashboardPage';
import AddCurriculumPage from '../components/AddCurriculumPage';
import EditCurriculumPage from '../components/EditCurriculumPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={CurriculaDashboardPage} exact={true} />
        <Route path="/create" component={AddCurriculumPage} />
        <Route path="/edit/:id" component={EditCurriculumPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
