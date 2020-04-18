import React, {Component} from 'react';

class Chrono extends Component {

  state  = {
    time: this.props.time,
    backupTime: this.props.time,
    interval: undefined,
  };

  handleStart = () => {
    if (!this.state.interval) {
      this.setState({
        interval: setInterval(() => {
          if (!this.state.time) return;
          this.setState({
            time: this.state.time - 1
          })
        }, 1000)
      });
    }
  };

  handleStop = () => {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({
        interval: undefined
      })
    }
  };

  componentWillUnmount() {
    this.handleStop();
  }

  handleReset = () => {
    this.setState({
      time: this.state.backupTime
    })
  };

  render() {
    const {time} = this.state;
    const minutes = ~~(time / 60);
    const seconds = time % 60;

    return (
      <div>
        <h1>{minutes}m:{seconds}s</h1>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Chrono;