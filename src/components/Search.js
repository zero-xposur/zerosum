import React, { Component, useState, Fragment } from 'react';
import MenuCapture from './MenuCapture';
import { connect } from 'react-redux';
import { getBeers } from '../reducers/search';
import { login } from '../reducers/user';

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
    Link,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { BeerList, Discover } from './index';

const Search = props => {
    const [search, setSearch] = useState('');
    const handleChange = ({ target }) => {
        console.log('props before login thunk is called', props);
        setSearch(target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const userId = props.user && props.user.id ? props.user.id : null;
        console.log('userId in search component', props.user);
        props
            .searchBeers({ search, userId })
            .then(props.history.push('/search'));
    };

    const keyPress = e => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };

    console.log(props);
    return (
        <Fragment>
            <Container>
                <AppBar position="sticky" style={{ margin: '0 0 0 5', paddingBottom: '2vh' }}>
                    <Typography align="center" variant="h2">
                        Discover
                    </Typography>
                    <Toolbar>
                        <Paper
                            style={{
                                padding: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                margin: '2 2 2 5',
                            }}
                        >
                            <InputBase
                                placeholder="Search beers and/or breweries"
                                // fullwidth={true}
                                onChange={handleChange}
                                style={{ marginLeft: 8, flex: 1 }}
                                onKeyDown={keyPress}

                                // inputProps={{ 'aria-label': 'Search Google Maps' }}
                            />
                            <IconButton onClick={handleSubmit}>
                                <SearchIcon />
                            </IconButton>
                            <IconButton>
                                <Link href="/#/menu">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z" />
                                    </svg>
                                </Link>
                            </IconButton>
                        </Paper>
                    </Toolbar>
                </AppBar>

                {props.location.pathname === '/discover' ? (
                    <Discover />
                ) : (
                    <BeerList beers={props.searchResults} />
                )}
            </Container>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        searchResults: state.searchBeers,
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    searchBeers: search => dispatch(getBeers(search)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
