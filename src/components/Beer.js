import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBeer } from '../reducers/beer';
import { getImageUrl } from './utils';
import {
    Typography,
    Paper,
    Card,
    Grid,
    Container,
    CardMedia,
} from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';

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
        console.log(beer);
    }, []);
    let beerPage = beer.singleBeer;
    return (
        // <div>
        //     <h1>{beerPage.name}</h1>
        //     <h2>{beerPage.brewery}</h2>
        //     <h4>
        //         Score: {beerPage.score}, Ratings: {beerPage.ratings}
        //     </h4>
        //     <h5>{beerPage.style}</h5>
        // </div>
        <Container>
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
                        {/* <Card> */}
                        {/* <CardMedia
                                style={{ height: '80vh', width: '100%' }}
                                src={getImageUrl(beerPage.link)}
                                image={getImageUrl(beerPage.link)}
                                title={beerPage.name}
                            /> */}
                        <img
                            style={{
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                // alignContent: 'center',
                                height: '70vh',
                            }}
                            src={getImageUrl(beerPage.link)}
                        />
                        {/* </Card> */}
                    </Grid>
                    <Grid
                        style={{ padding: '5%' }}
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
                        <Typography
                            style={{ textAlign: 'center' }}
                            variant="h5"
                        >
                            {beerPage.brewery}
                        </Typography>
                        <div>
                            <Typography style={{ textAlign: 'justify' }}>
                                {beerPage.style} {beerPage.abv}% ABV
                            </Typography>
                        </div>
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
                        <Typography>
                            {beerPage.prices
                                ? beerPage.prices[0].description
                                : null}
                        </Typography>
                        {/* </Card> */}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Beer);
