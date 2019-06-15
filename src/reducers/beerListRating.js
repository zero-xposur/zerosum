import axios from 'axios';

const GOT_BEER_LIST_RATING = 'GOT_BEER_LIST_RATING';

const gotBeerListRating = beerListRating => ({
    type: GOT_BEER_LIST_RATING,
    beerListRating,
});

export const beerListRatingReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_BEER_LIST_RATING:
            return [...state, action.beerListRating];
        // return { ...state, messages: [...state.messages, action.message] };

        default:
            return state;
    }
};

export const getBeerListRating = (facebookId, beerId) => {
    return dispatch => {
        return axios
            .get(`/api/ratings/${facebookId}/${beerId}`)
            .then(response => dispatch(gotBeerListRating(response.data)));
    };
};
