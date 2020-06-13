import React, {Component} from 'react';

class ResultsBox extends Component {

  render() {
    const {results} = this.props;
    return (
      <div>
        <ul>
          {results.map((result, index) => <li key={index}><a href={result.html_url}>{result.login}</a></li>)}
        </ul>
      </div>
    );
  }
}

export default ResultsBox;