import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBeer } from '../reducers/beer';
import { getImageUrl } from './utils';

const mapStateToProps = beer => {
    return { beer };
};

const mapDispatchToProps = dispatch => ({
    fetchBeer: id => {
        return dispatch(getBeer(id));
    },
});

const RatedBeers = () => {
    // useEffect(() => {
    //     fetchBeer(match.params.beerId);
    // }, []);
    // let beerPage = beer.singleBeer;
    return (
        <div>
            <h1>Rated Beers</h1>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatedBeers);
