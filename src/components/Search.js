import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../reducers/search';

import BeerList from './BeerList';

const Search = props => {
    const [search, setSearch] = useState('');

    const handleChange = ({ target }) => {
        console.log('props before login thunk is called', props);
        setSearch(target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        props.searchBeers(search);
    };

    console.log(props);

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
        searchResults: state.searchBeers
    };
};

const mapDispatchToProps = dispatch => ({
    searchBeers: search => dispatch(getBeers(search))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
