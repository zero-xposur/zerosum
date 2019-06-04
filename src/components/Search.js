import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../reducers/search';
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            beers: [],
        };
    }

    handleChange = ({ target }) => {
        this.setState({ search: target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props
            .searchBeers(this.state.search)
            .then(response =>
                this.setState({ ...this.state, beers: response.beers })
            );
        // .then(() => this.props.history.push(`/search/${this.state.search}`));
    };

    render() {
        return (
            <div>
                <h1>Find that babeer!</h1>

                <input onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>submit</button>

                <ul>
                    {this.state && this.state.beers !== undefined
                        ? this.state.beers.map(beer => {
                              return (
                                  <li key={beer.id}>
                                      <Link to={`/beer/${beer.id}`}>
                                          {beer.brewery} - {beer.name}
                                      </Link>
                                  </li>
                              );
                          })
                        : ''}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchResults: state.beers,
    };
};

const mapDispatchToProps = dispatch => ({
    searchBeers: search => dispatch(getBeers(search)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
