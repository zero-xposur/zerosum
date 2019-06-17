import axios from 'axios';

const GOT_TASTE_BUDDIES = 'GOT_TASTE_BUDDIES';

const gotTasteBuddies = tasteBuddies => ({
    type: GOT_TASTE_BUDDIES,
    tasteBuddies,
});

export const tasteBuddiesReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_TASTE_BUDDIES:
            return action.tasteBuddies;
        default:
            return state;
    }
};

export const getTasteBuddies = userId => {
    return dispatch => {
        return axios
            .get(`/api/tasteBuddies/${userId}`)
            .then(response => dispatch(gotTasteBuddies(response.data)));
    };
};
