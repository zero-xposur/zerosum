import axios from 'axios';

const GOT_BEERS = 'GOT_BEERS';

const gotBeers = beers => ({
  type: GOT_BEERS,
  beers,
});

export const beersReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_BEERS:
      return action.beers;
    default:
      return state;
  }
};

export const getBeers = search => {
  return dispatch => {
    return axios
      .get(`/api/search/${search}`)
      .then(response => dispatch(gotBeers(response.data)));
  };
};
