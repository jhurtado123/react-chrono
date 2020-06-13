import React, {Component} from 'react';
import TextBox from "./TextBox";

class TextWrapper extends Component {
  render() {
    return (
      <div>
        <TextBox />
        <TextBox />
        <TextBox />
        <TextBox />
      </div>
    );
  }
}

export default TextWrapper;