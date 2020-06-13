import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import apiClient from "./services/ApiClient";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {

  state = {
    isLogged : false,
    user: undefined,
  };

  handleLogin = (body) =>  {
    apiClient.login(body)
      .then(({data: user}) => {
        console.log('asd');
       this.setState({
         isLogged: true,
         user,
       });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLogged: false,
          user: undefined,
        });
      });
  };

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <h1>App</h1>
          <Switch>
            <Route exact path={'/home'} component={Home}/>
            <Route exact path={'/login'} render={() => <Login handleLogin={this.handleLogin}/>}/>
          </Switch>
          <p><Link to={'/login'}>Login</Link></p>

          <PrivateRoute exact path={'/admin'} isLogged={this.state.isLogged}>
            <Admin />
          </PrivateRoute>

          <p><Link to={'/admin'}>Admin</Link></p>
          <p><Link to={'/home'}>Home</Link></p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
