import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import { Container, Typography, Button } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import { rateBeer, getUserBeerRatings } from '../reducers';

const Review = ({ beerId, userId, addNewReview, getUserReviews }) => {
    useEffect(() => {}, []);

    const ratings = {
        appearance: 0,
        aroma: 0,
        mouthfeel: 0,
        taste: 0,
        overall: 0,
    };

    const clickHandler = (rating, cat) => {
        ratings[cat] = rating;
    };

    const submitReview = () => {
        addNewReview(userId, beerId, ratings);
        // .then(() =>
        //     getUserReviews(userId)
        // );
    };

    return (
        <Container style={{ textAlign: 'center' }}>
            <Typography variant="h5">
                Appearance:
                <Rating
                    quiet={true}
                    emptySymbol={
                        <StarBorder
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    fullSymbol={
                        <Star
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    onChange={value => clickHandler(value, 'appearance')}
                />
            </Typography>
            <Typography variant="h5">
                Aroma:
                <Rating
                    quiet={true}
                    emptySymbol={
                        <StarBorder
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    fullSymbol={
                        <Star
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    onChange={value => clickHandler(value, 'aroma')}
                />
            </Typography>
            <Typography variant="h5">
                Mouthfeel:
                <Rating
                    quiet={true}
                    emptySymbol={
                        <StarBorder
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    fullSymbol={
                        <Star
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    onChange={value => clickHandler(value, 'mouthfeel')}
                />
            </Typography>
            <Typography variant="h5">
                Taste:
                <Rating
                    quiet={true}
                    emptySymbol={
                        <StarBorder
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    fullSymbol={
                        <Star
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    onChange={value => clickHandler(value, 'taste')}
                />
            </Typography>
            <Typography variant="h5">
                Overall:
                <Rating
                    quiet={true}
                    emptySymbol={
                        <StarBorder
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    fullSymbol={
                        <Star
                            style={{
                                color: 'gold',
                            }}
                        />
                    }
                    onChange={value => clickHandler(value, 'overall')}
                />
            </Typography>
            <Button onClick={submitReview}>Add Review</Button>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    addNewReview: (userId, beerId, ratings) => {
        return dispatch(rateBeer(userId, beerId, ratings));
    },
    getUserReviews: userId => {
        return dispatch(getUserBeerRatings(userId));
    },
});

export default connect(
    null,
    mapDispatchToProps
)(Review);
