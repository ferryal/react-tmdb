import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListMovie from './schenes/List-Movie';
import MovieDetail from './schenes/Movie-Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ListMovie} />
    <Route path="/movie/:id" component={MovieDetail} />
    <Redirect to="/" />
  </Switch>
);

const HotApp = hot(Routes);
export { HotApp as Routes };
