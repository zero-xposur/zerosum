import React, { Component, useState, Fragment } from 'react';
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
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import BeerList from './BeerList';

const Search = props => {
    const [search, setSearch] = useState('');

    const handleChange = ({ target }) => {
        console.log('props before login thunk is called', props);
        setSearch(target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const userId = this.props.user && this.props.user.id? this.props.user.id:null;
        console.log('userId in search component', this.props.user);
        props.searchBeers({search, userId});
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
                <AppBar position="static" style={{ margin: '5 0 5 0' }}>
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
                                onKeyDown={keyPress}

                                // inputProps={{ 'aria-label': 'Search Google Maps' }}
                            />
                            <IconButton onClick={handleSubmit}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Toolbar>
                </AppBar>

                <BeerList beers={props.searchResults} />
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
