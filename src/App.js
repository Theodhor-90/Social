import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma';

import Navbar from './components/Navbar';
import SecureRoute from './components/SecureRoute';
import FlashMessages from './components/FlashMessages';
import Register from './components/users/Register';
import Login from './components/users/Login';
import UserShow from './components/users/UserShow';
import UserEdit from './components/users/UserEdit';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <FlashMessages />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <SecureRoute path="/profile/:id/edit" component={UserEdit} />
            <SecureRoute path="/profile" component={UserShow} />
            <Route path="/" component={Login} />
          </Switch>
          <Switch>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
