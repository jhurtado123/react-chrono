import React, {Component} from 'react';

class SearchBar extends Component {

  state = {
    searchValue: '',
  };

  handleClick = () => {
    const { onSearch } = this.props;
    onSearch(this.state.searchValue);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <input onChange={this.handleChange} type="text" name={'searchValue'} value={searchValue}/>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default SearchBar;