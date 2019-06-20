import React, { useEffect, Fragment, Component } from 'react';
import { Typography } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import { getBeerListRating } from '../reducers/index';

// const SingleRating = props => {

const SingleRating = props => {
    const { userBeerRatings, beer } = props;
    const rating = userBeerRatings.find(beerRating => {
        return beerRating.babeerId === beer.id;
    });
    return (
        <Fragment>
            <Typography>
                <Rating
                    initialRating={parseFloat(rating ? rating.score : 0)}
                    emptySymbol={
                        <StarBorder
                            style={{
                                color: 'red',
                            }}
                        />
                    }
                    fullSymbol={
                        <Star
                            style={{
                                color: 'red',
                            }}
                        />
                    }
                    readonly={true}
                />
            </Typography>
            <Typography>Your Rating {rating ? rating.score : ''}</Typography>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        // user: state.user,
        beerRating: state.beerListRating,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBeerListRating: (fbId, beerId) => {
        return dispatch(getBeerListRating(fbId, beerId));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleRating);
