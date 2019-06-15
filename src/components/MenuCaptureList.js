import React from 'react';
import { connect } from 'react-redux';
import { BeerList } from './index.js';

const MenuCaptureList = props => {
    return <BeerList beers={props.menuBeers} />;
};

const mapStateToProps = state => {
    return {
        menuBeers: state.menuBeers,
    };
};

export default connect(mapStateToProps)(MenuCaptureList);
