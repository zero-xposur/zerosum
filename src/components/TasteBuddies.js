import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasteBuddies } from '../reducers';

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
        <div>
            <h1>Taste Buddies!</h1>
            <ol>
                {tasteBuddies.map(user => {
                    return (
                        <li key={user.id}>
                            {user.name}
                            <div />
                            Correlation:
                            <b>{(user.correlation * 100).toFixed(2)}%</b>{' '}
                            Matches:
                            {user.precision}
                            <div />
                            Their recommended beers for you!
                            <ol>
                                {user.bestBeers.map(beer => {
                                    return (
                                        <li type="a" key={beer.id}>
                                            {beer.babeer.name}, {user.name}{' '}
                                            rated it a <b>{beer.score}</b>.
                                            Global rating:
                                            {beer.babeer.score}
                                        </li>
                                    );
                                })}
                            </ol>
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
