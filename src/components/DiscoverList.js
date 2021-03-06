import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BeerList } from './index.js';
import { discoverBeers } from '../reducers';
import { styles } from './utils';
import { Container } from '@material-ui/core';

const DiscoverList = props => {
    console.log(styles[props.match.params.style]);
    useEffect(() => {
        props.getDiscoveredBeers(styles[props.match.params.style]);
    }, []);

    return (
        <Container>
            <BeerList beers={props.discoveredBeers} />
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        discoveredBeers: state.discoveredBeers,
    };
};

const mapDispatchToProps = dispatch => ({
    getDiscoveredBeers: styleArr => dispatch(discoverBeers(styleArr)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverList);
