import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import ResultsBox from "./components/ResultsBox";
import axios from 'axios'

const STATUS = {
  WAITING: 'WAITING',
  LOADING: 'LOADING',
  LOADED: 'LOADED'
};


class App extends Component {

  state = {
    results: [],
    status: STATUS.WAITING,
  };

  handleSearch = (value) => {
    this.setState({
      status: STATUS.LOADING,
    });
    if (value === '') {
      this.setState({
        results: [],
        status: STATUS.LOADED,
      });
      return;
    }
    axios.get(`https://api.github.com/search/users?q=${value}`)
      .then(res => {
        this.setState({
          results: res.data.items,
          status: STATUS.LOADED,
        })
      })
      .catch(err => {
      })
  };

  render () {
    const { results, status } = this.state;
    return (
      <div className="App">
        <h1>Search on Github</h1>
        <SearchBar onSearch={this.handleSearch}  />
        {status === STATUS.LOADED && <ResultsBox results={results} />}
        {status === STATUS.LOADING && <div>Loading...</div>}
      </div>
    );
  }
}

export default App;
