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

    console.log('final props', props);
    return (
        <div>
            <h1>Taste Buddies!</h1>
            <ol>
                {tasteBuddies.map(user => {
                    return <li key={user.id}>{user.name}</li>;
                })}
            </ol>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatedBeers);
