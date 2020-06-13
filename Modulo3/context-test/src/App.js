import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TextWrapper from "./components/TextWrapper";
import TextContext from "./TextContext";


class App extends Component {

  state = {
    textValue: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  };

  render() {
    return (
      <div className="App">
        <TextContext.Provider value={this.state.textValue}>
          <TextWrapper/>
        </TextContext.Provider>
        <input type="text" onChange={this.handleChange} name={'textValue'}/>
      </div>
    );
  }
}

export default App;
