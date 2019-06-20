import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasteBuddies } from '../reducers';
import { Container, Card, Typography, Paper } from '@material-ui/core';

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

    let tasteBuddies = props.tasteBuddies;

    return (
        <Container>
            <Typography>Taste Buddies!</Typography>
            {tasteBuddies.map(user => {
                return (
                    <Paper key={user.id}>
                        {user.name}
                        <div />
                        Correlation:
                        <b>{(user.correlation * 100).toFixed(2)}%</b> Matches:
                        {user.precision}
                        <div />
                        Their recommended beers for you!
                        <ol>
                            {user.bestBeers.map(beer => {
                                return (
                                    <Card type="a" key={beer.id}>
                                        {beer.babeer.name}, {user.name} rated it
                                        a <b>{beer.score}</b>. Global rating:
                                        {beer.babeer.score}
                                    </Card>
                                );
                            })}
                        </ol>
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
