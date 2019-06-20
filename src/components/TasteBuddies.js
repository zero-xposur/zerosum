import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasteBuddies } from '../reducers';
import { Container, Card, Typography, Paper, Grid } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import Rating from 'react-rating';
import Circle from 'react-circle';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return { tasteBuddies: state.tasteBuddies, user: state.user };
};

const mapDispatchToProps = dispatch => ({
    fetchTasteBuddies: id => {
        return dispatch(getTasteBuddies(id));
    },
});

// https://localhost:3000/api/getTasteBuddies/6

const RatedBeers = props => {
    useEffect(() => {
        console.log('rated props', props);
        if (props.user) {
            props.fetchTasteBuddies(props.user.id);
        }
    }, [props.user]);

    let tasteBuddies = props.tasteBuddies || [];

    return (
        <Container>
            <Typography>Taste Buddies!</Typography>
            {tasteBuddies.map(user => {
                return (
                    <Paper key={user.id} style={{ margin: '2%' }}>
                        <Grid container alignContent="space-between">
                            <Grid item xs={6} sm={6} md={6} alignItems="center">
                                <Typography
                                    variant="h3"
                                    align="center"
                                    style={{
                                        paddingLeft: '1vw',
                                        paddingTop: '1vh',
                                    }}
                                >
                                    {user.name}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                md={6}
                                style={{ textAlign: 'center' }}
                            >
                                <Typography>Correlation:</Typography>
                                <Circle
                                    progress={(user.correlation * 100).toFixed(
                                        2
                                    )}
                                    size={75}
                                />
                                <Typography>
                                    Matches:
                                    {user.precision}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} xl={12}>
                                <Typography
                                    variant="h5"
                                    style={{ textAlign: 'center' }}
                                >
                                    {user.name} recommends you try:
                                </Typography>
                            </Grid>
                            {user.bestBeers.map(beer => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        lg={4}
                                        key={beer.id}
                                    >
                                        <Card
                                            style={{
                                                textAlign: 'center',
                                                margin: '2%',
                                                padding: '2%',
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                component={Link}
                                                to={`/beer/${beer.babeer.id}`}
                                            >
                                                {beer.babeer.name}
                                            </Typography>
                                            <Typography variant="subtitle2">
                                                {beer.babeer.brewery}
                                            </Typography>
                                            <Typography variant="body2">
                                                {beer.babeer.style}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                component="span"
                                            >
                                                {user.name}'s rating:{' '}
                                                <Rating
                                                    initialRating={beer.score}
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
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                component="span"
                                            >
                                                ({beer.score})
                                            </Typography>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Paper>
                );
            })}
        </Container>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatedBeers);
