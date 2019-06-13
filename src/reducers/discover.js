import axios from 'axios';

const DISCOVERED_BEERS = 'DISCOVERED_BEERS';

const discoveredBeers = beers => ({
    type: DISCOVERED_BEERS,
    beers,
});

export const discoverReducer = (state = [], action) => {
    switch (action.type) {
        case DISCOVERED_BEERS:
            return action.beers;
        default:
            return state;
    }
};

export const discoverBeers = styleArr => {
    return dispatch => {
        return axios
            .post('/api/discover/', styleArr)
            .then(response => dispatch(discoveredBeers(response.data)));
    };
};
