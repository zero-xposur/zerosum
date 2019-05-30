import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../reducers';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props
      .searchBeers(this.state.search)
      .then(response => console.log(response))
      .then(() => this.props.history.push(`/search/${this.state.search}`));
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchBeers: search => dispatch(getBeers(search)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
