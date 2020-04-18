import React, {Component} from 'react';
import Chrono from "./Chrono";
import '../Chrono.css';

class ChronoWrapper extends Component {

  state = {
    show: true,
  };


  handleShowHide = () => {
    this.setState({
      show: !this.state.show
    })
  };

  render() {

    const {show} = this.state;

    return (
      <div className={'chrono'} >
        {show && <Chrono time={this.props.time} start={this.handleStart} stop={this.handleStop} reset={this.handleReset}  />}
        <button onClick={this.handleShowHide}>show/hide</button>
      </div>
    );
  }
}

export default ChronoWrapper;