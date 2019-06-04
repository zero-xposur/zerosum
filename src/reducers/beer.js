import axios from 'axios';

const GOT_BEER = 'GOT_BEER';

const gotBeer = beer => ({
    type: GOT_BEER,
    beer,
});

export const beerReducer = (state = {}, action) => {
    switch (action.type) {
        case GOT_BEER:
            return action.beer;
        default:
            return state;
    }
};

export const getBeer = beerId => {
    return dispatch => {
        return axios
            .get(`/api/beer/${beerId}`)
            .then(response => dispatch(gotBeer(response.data)));
    };
};
