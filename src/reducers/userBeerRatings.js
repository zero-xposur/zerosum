import axios from 'axios';

const GOT_USER_BEER_RATINGS = 'GOT_USER_BEER_RATINGS';

const gotUserBeerRatings = userBeerRatings => ({
    type: GOT_USER_BEER_RATINGS,
    userBeerRatings,
});

export const userBeerRatingsReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_USER_BEER_RATINGS:
            return action.userBeerRatings;
        default:
            return state;
    }
};

export const getUserBeerRatings = userId => {
    return dispatch => {
        return axios
            .get(`/api/ratings/${userId}/`)
            .then(response => dispatch(gotUserBeerRatings(response.data)));
    };
};
