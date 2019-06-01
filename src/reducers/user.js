import axios from 'axios';

const SET_USER = 'SET_USER';

const setUser = user => ({
  type: SET_USER,
  user,
});

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};

export const login = () => dispatch => {
    return axios.get('/api/auth/facebook')
      .then(user => 
            dispatch(setUser(user.data)))
  };
