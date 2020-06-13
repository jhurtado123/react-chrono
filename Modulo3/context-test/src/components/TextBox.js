import React, {Component} from 'react';
import TextContext from "../TextContext";

class TextBox extends Component {
  render() {
    return (
      <div>
        <TextContext.Consumer>
          {value => <div>{value}</div>}
        </TextContext.Consumer>
      </div>
    );
  }
}

export default TextBox;