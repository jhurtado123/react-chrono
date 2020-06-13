import React, {Component} from 'react';
import apiClient from '../services/ApiClient';

class Login extends Component {

  status = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name={'username'} placeholder={'Name'} onChange={this.handleChange} />
          <input type="text" name={'password'} placeholder={'Password'} onChange={this.handleChange} />
          <button type={'submit'}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;