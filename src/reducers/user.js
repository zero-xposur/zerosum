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
    console.log('in login thunk');
    return axios.get('/api/auth/profile').then(user => {
        console.log('user in login thunk', user.data);
        dispatch(setUser(user.data));
    });
};

export const logout = () => dispatch => {
    console.log('in logout thunk');
    return axios.get('/api/auth/logout').then(res => {
        console.log('user in logout thunk');
        dispatch(setUser({}));
    });
};

export const localLogin = (email, password) => {
    return dispatch => {
        return axios
            .put('/api/auth/login', { email, password })
            .then(response => response.data)
            .then(user => dispatch(setUser(user)));
    };
};

export const localCreate = (email, password) => {
    return dispatch => {
        return axios
            .post('/api/auth/login', { email, password })
            .then(response => response.data)
            .then(user => dispatch(setUser(user)));
    };
};
