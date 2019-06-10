import React, { Component, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../reducers/search';
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    TextField,
    Paper,
    IconButton,
    CssBaseline,
} from '@material-ui/core';
import { Camera } from '@material-ui/icons';

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
        <Fragment>
            <CssBaseline />
            <Container>
                <AppBar position="static" style={{ margin: '1vh' }}>
                    <Toolbar>
                        <Paper
                            style={{
                                padding: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '60%',
                                margin: '1vh',
                            }}
                        >
                            <InputBase
                                placeholder="Search beers and/or breweries"
                                // fullwidth={true}
                                onChange={handleChange}
                                style={{ marginLeft: 8, flex: 1 }}

                                // inputProps={{ 'aria-label': 'Search Google Maps' }}
                            />
                            <IconButton onClick={handleSubmit}>
                                <Camera />
                            </IconButton>
                        </Paper>
                    </Toolbar>
                </AppBar>

                <Paper />
                <BeerList beers={props.searchResults} />
            </Container>
        </Fragment>
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
