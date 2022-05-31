import React, { Component } from 'react';
import { Route } from 'react-router';
import { AuthContextComponent } from './AuthContext';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Secret from './pages/Secret';
import Logout from './pages/Logout';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <AuthContextComponent>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <PrivateRoute exact path='/secret' component={Secret} />
        </Layout>
      </AuthContextComponent>
    );
  }
}
