import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../reducers/search';
import BeerList from './BeerList';

const Search = props => {
    const [search, setSearch] = useState('');

    const handleChange = ({ target }) => {
        setSearch(target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(props);
        props.searchBeers(search);
        // .then(() => this.props.history.push(`/search/${this.state.search}`)
    };

    return (
        <div>
            <h1>Find that babeer!</h1>

            <input onChange={handleChange} />
            <button onClick={handleSubmit}>submit</button>
            <BeerList beers={props.searchResults} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchResults: state.searchBeers,
    };
};

const mapDispatchToProps = dispatch => ({
    searchBeers: search => dispatch(getBeers(search)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
