import axios from 'axios';

const SET_USER = 'SET_USER';
const SET_FOLLOWERS = 'SET_FOLLOWERS';
const SET_FOLLOWEES = 'SET_FOLLOWEES';
const SET_SEARCH = 'SET_SEARCH';

const setUser = user => ({
    type: SET_USER,
    user,
});

const setFollowers = followers => ({
    type: SET_FOLLOWERS,
    followers,
});

const setFollowees = followees => ({
    type: SET_FOLLOWEES,
    followees,
});

const setSearchedUsers = searchedUsers => ({
    type: SET_SEARCH,
    searchedUsers,
});

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case SET_FOLLOWERS:
            return {...state, followers: action.followers}
        case SET_FOLLOWEES:
            return {...state, followees: action.followees}
        case SET_SEARCH:
            return {...state, searchedUsers: action.searchedUsers}
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

export const logout = (history) => dispatch => {
    console.log('in logout thunk');
    return axios.get('/api/auth/logout').then(res => {
        console.log('user in logout thunk');
        return dispatch(setUser({}));
    }).then(()=>{
        history.push('/home')
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

export const findAllFollowers = () => {
    return dispatch => {
        return axios
            .get('/api/follows/followers')
            .then((response)=>response.data)
            .then((followers)=>dispatch(setFollowers(followers)));
    }
}

export const findAllFollowees = () => {
    return dispatch => {
        return axios
            .get('/api/follows/followee')
            .then((response)=>response.data)
            .then((followees)=>dispatch(setFollowees(followees)));
    }
}

export const searchUsers = (search) => {
    return dispatch => {
        return axios
            .get(`/api/auth/search/${search}`)
            .then((response)=>response.data)
            .then((searchedUsers)=>dispatch(setSearchedUsers(searchedUsers)));
    }
}
