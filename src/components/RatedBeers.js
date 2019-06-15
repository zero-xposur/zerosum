import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserBeerRatings } from '../reducers';

const mapStateToProps = state => {
    return { beerRatings: state.userBeerRatings, user: state.user };
};

const mapDispatchToProps = dispatch => ({
    fetchBeerRatings: id => {
        return dispatch(getUserBeerRatings(id));
    },
});

// https://localhost:3000/api/ratings/6

const RatedBeers = props => {
    useEffect(() => {
        console.log('rated props', props);
        if (props.user) {
            props.fetchBeerRatings(props.user.id);
        }
    }, [props.user]);

    let ratings = props.beerRatings;

    console.log('final props', props);
    return (
        <div>
            <h1>Rated Beers</h1>
            <ol>
                {ratings.map(aRating => {
                    return (
                        <li key={aRating.id}>
                            {aRating.babeer.name} My Score: {aRating.score}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatedBeers);
