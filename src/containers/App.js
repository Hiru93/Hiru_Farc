import React from 'react';
import { Route, Switch } from 'react-router';

//Actions

//Components
import Login from '../components/Login/index';
import Landing from '../components/Landing/index';
import Authorize from '../utils/Authorize/index';

//Style
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/home' component={ Authorize(Landing) } />
        <Route exact path='/home/:componentId' component={ Authorize(Landing) } />
      </Switch>
    )
  }
}

export default App;