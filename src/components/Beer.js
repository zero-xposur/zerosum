import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBeer } from '../reducers';
import { getImageUrl } from './utils';
import {
    Typography,
    Paper,
    Grid,
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';
import { Star, StarBorder, ExpandMore } from '@material-ui/icons';
import Rating from 'react-rating';
import { Review, ShowReview } from './index';

const mapStateToProps = state => {
    return {
        beer: state.singleBeer,
        user: state.user,
        userReviews: state.userBeerRatings,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBeer: id => {
        return dispatch(getBeer(id));
    },
});

const Beer = ({ match, beer, user, userReviews, fetchBeer }) => {
    let [beerPage, setBeerPage] = React.useState({});
    let yourReview = userReviews.find(review => review.babeerId === beer.id);

    useEffect(() => {
        fetchBeer(match.params.beerId).then(resp => {
            setBeerPage(resp.beer);
        });
        console.log(beer);
        return () => {
            console.log('UNMOUNTED!!!!!!!');
            setBeerPage({});
            yourReview = {};
        };
    }, [beer.id]);

    console.log(user);
    return (
        <Container style={{ marginBottom: '60px' }}>
            <Paper>
                <Grid container>
                    <Grid
                        style={{ alignItems: 'center' }}
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        <img
                            style={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                // alignContent: 'center',
                                height: '60vh',
                            }}
                            src={getImageUrl(beerPage.link)}
                        />
                        {/* </Card> */}
                    </Grid>
                    <Grid
                        style={{ padding: '5%', textAlign: 'center' }}
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        {/* <Card style={{ height: '100%', margin: '1%' }}> */}
                        <Typography
                            style={{ textAlign: 'center' }}
                            variant="h2"
                        >
                            {beerPage.name}
                        </Typography>
                        <Rating
                            initialRating={parseFloat(beerPage.score)}
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
                            readonly={true}
                        />
                        <Typography>({beerPage.ratings} ratings)</Typography>
                        <Typography
                            style={{ textAlign: 'center' }}
                            variant="h5"
                        >
                            {beerPage.brewery}
                        </Typography>
                        <Typography
                            component="div"
                            style={{ textAlign: 'center' }}
                        >
                            {beerPage.style}
                        </Typography>
                        <Typography
                            component="div"
                            style={{ textAlign: 'center' }}
                        >
                            {beerPage.abv}% ABV
                        </Typography>
                        <Typography>
                            {beerPage.prices
                                ? beerPage.prices[0]
                                    ? `Description: ${
                                          beerPage.prices[0].description
                                      }`
                                    : null
                                : null}
                        </Typography>
                    </Grid>
                </Grid>
                <ExpansionPanel styles={{ width: '100%' }}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <Typography>
                            {yourReview ? 'Your Review' : 'Add Your Review'}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {yourReview ? (
                            <ShowReview review={yourReview} />
                        ) : (
                            <Review userId={user.id} beerId={beerPage.id} />
                        )}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel styles={{ width: '100%', padding: 0 }}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <Typography>
                            All Reviews (
                            {beerPage.UserRatings
                                ? beerPage.UserRatings.length
                                : 0}
                            )
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div style={{ width: '100%', contentAlign: 'center' }}>
                            {beerPage.UserRatings
                                ? beerPage.UserRatings.length > 0
                                    ? beerPage.UserRatings.map(review => (
                                          <ShowReview review={review} />
                                      ))
                                    : 'No Reviews Yet!  Add Your Review Now!'
                                : 'No Reviews Yet!  Add Your Review Now!'}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        </Container>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Beer);
