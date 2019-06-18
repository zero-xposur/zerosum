import React from 'react';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import {
    Container,
    Typography,
    Button,
    Grid,
    TextField,
} from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import { rateBeer, getUserBeerRatings } from '../reducers';

const Review = ({ beerId, userId, addNewReview }) => {
    const [review, setReview] = React.useState('');
    const [appearance, setAppearance] = React.useState(0);
    const [aroma, setAroma] = React.useState(0);
    const [mouthfeel, setMouthfeel] = React.useState(0);
    const [taste, setTaste] = React.useState(0);
    const [overall, setOverall] = React.useState(0);

    const handleChange = evt => {
        setReview(evt.target.value);
        console.log(review);
    };

    const submitReview = () => {
        const ratings = {
            appearance,
            aroma,
            mouthfeel,
            taste,
            overall,
        };
        addNewReview(userId, beerId, ratings, review).catch(e =>
            console.log(e)
        );
    };

    // const categories = [
    //     {
    //         display: 'Appearance',
    //         rating: appearance,
    //         setFunc: setAppearance,
    //     },
    //     {
    //         display: 'Aroma',
    //         rating: aroma,
    //         setFunc: setAroma,
    //     },
    //     {
    //         display: 'Mouthfeel',
    //         rating: mouthfeel,
    //         setFunc: setMouthfeel,
    //     },
    //     {
    //         display: 'Taste',
    //         rating: taste,
    //         setFunc: setTaste,
    //     },
    //     {
    //         display: 'Overall',
    //         rating: overall,
    //         setFunc: setOverall,
    //     },
    // ];

    return (
        <Container style={{ textAlign: 'center' }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant="h5">
                        Appearance:
                        <Rating
                            initialRating={appearance}
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
                            onClick={setAppearance}
                        />
                    </Typography>
                    <Typography variant="h5">
                        Aroma:
                        <Rating
                            initialRating={aroma}
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
                            onChange={setAroma}
                        />
                    </Typography>
                    <Typography variant="h5">
                        Mouthfeel:
                        <Rating
                            initialRating={mouthfeel}
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
                            onChange={setMouthfeel}
                        />
                    </Typography>
                    <Typography variant="h5">
                        Taste:
                        <Rating
                            initialRating={taste}
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
                            onChange={setTaste}
                        />
                    </Typography>
                    <Typography variant="h5">
                        Overall:
                        <Rating
                            initialRating={overall}
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
                            onChange={setOverall}
                        />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        label="Tasting Notes"
                        multiline
                        rows="6"
                        value={review}
                        onChange={handleChange}
                        margin="normal"
                        helperText="500 character max"
                        variant="filled"
                        fullWidth
                    />
                </Grid>
                <Button onClick={submitReview}>Add Review</Button>
            </Grid>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    addNewReview: (userId, beerId, ratings, review) => {
        return dispatch(rateBeer(userId, beerId, ratings, review));
    },
    getUserReviews: userId => {
        return dispatch(getUserBeerRatings(userId));
    },
});

export default connect(
    null,
    mapDispatchToProps
)(Review);
