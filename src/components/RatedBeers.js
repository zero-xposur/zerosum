import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserBeerRatings } from '../reducers';
import { ShowReview } from './index';
import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

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
        <Container>
                        <AppBar position="sticky" style={{ margin: '0 0 0 5' }}>

                    <Toolbar>
                    <Typography align="center" style={{margin: 'auto'}} variant="h2">
                        Profile
                    </Typography>
                    <Button component={Link} variant='outlined' to='/logout' color='inherit' >Logout</Button>
                    </Toolbar>
                </AppBar>
                <Typography align='center' variant='h4'>
                Beers Rated: {ratings.length}
                </Typography>
            {ratings.map(rating => (
                <ShowReview review={rating} key={rating.id} />
            ))}
        </Container>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatedBeers);
