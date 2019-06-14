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

const Beer = ({ match, beer, fetchBeer }) => {
    useEffect(() => {
        fetchBeer(match.params.beerId);
    }, []);
    let beerPage = beer.searchBeer;
    return (
        <div>
            <img src={getImageUrl(beerPage.link)} />
            <h1>{beerPage.name}</h1>
            <h2>{beerPage.brewery}</h2>
            <h4>
                Score: {beerPage.score}, Ratings: {beerPage.ratings}
            </h4>
            <h5>{beerPage.style}</h5>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Beer);
