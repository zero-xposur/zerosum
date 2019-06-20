import axios from 'axios';

const SET_USER = 'SET_USER';
const SET_FOLLOWERS = 'SET_FOLLOWERS';
const SET_FOLLOWEES = 'SET_FOLLOWEES';
const SET_FEED = 'SET_FEED';
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

const setFeed = feed => ({
    type: SET_FEED,
    feed,
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
        case SET_FEED:
            return {...state, feed: action.feed}
        default:
            return state;
    }
};

export const login = () => dispatch => {
    console.log('in login thunk');
    return axios.get('/api/auth/profile')
                .then((user)=>{
                    dispatch(setUser(user.data))
                    return user.data.id
                })
                .then((id)=>{
                    axios
                        .get(`/api/follows/followers/${id}`)
                        .then((response)=>response.data)
                        .then((followers)=>dispatch(setFollowers(followers)));
                    return id;
                })
                .then((id)=>{
                    axios
                        .get(`/api/follows/followees/${id}`)
                        .then((response)=>response.data)
                        .then((followees)=>dispatch(setFollowees(followees)));
                        return id;
                })  
                .then((id)=>{
                    axios
                        .get(`/api/ratings/followees/${id}`)
                        .then((response)=>response.data)
                        .then((followees)=>dispatch(setFollowees(followees)));
                }) 
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
            .then((user)=>{
                dispatch(setUser(user))
                return user.id
            })
            .then((id)=>{
                axios
                    .get(`/api/follows/followers/${id}`)
                    .then((response)=>response.data)
                    .then((followers)=>dispatch(setFollowers(followers)));
                return id;
            })
            .then((id)=>{
                axios
                    .get(`/api/follows/followees/${id}`)
                    .then((response)=>response.data)
                    .then((followees)=>dispatch(setFollowees(followees)));
            })  
    };
};

export const localCreate = (email, password) => {
    return dispatch => {
        return axios
            .post('/api/auth/login', { email, password })
            .then(response => response.data)
            .then((user)=>{
                dispatch(setUser(user))
                return user.id
            })
            .then((id)=>{
                axios
                    .get(`/api/follows/followers/${id}`)
                    .then((response)=>response.data)
                    .then((followers)=>dispatch(setFollowers(followers)));
                return id;
            })
            .then((id)=>{
                axios
                    .get(`/api/follows/followees/${id}`)
                    .then((response)=>response.data)
                    .then((followees)=>dispatch(setFollowees(followees)));
            })  
    };
};

export const findAllFollowers = (id) => {
    console.log('in findallfollowers')
    return dispatch => {
        return axios
            .get(`/api/follows/followers/${id}`)
            .then((response)=>response.data)
            .then((followers)=>dispatch(setFollowers(followers)));
    }
}

export const findAllFollowees = (id) => {
    return dispatch => {
        return axios
            .get(`/api/follows/followees/${id}`)
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

export const follow = (userId, id) => {
    return dispatch => {
        return axios
            .post(`/api/follows/${userId}/${id}`)
            .then(()=>axios.get(`/api/follows/followees/${id}`))
            .then((response)=>response.data)
            .then((followees)=>dispatch(setFollowees(followees)));
    }
}

export const unfollow = (userId, id) => {
    return dispatch => {
        return axios
            .delete(`/api/follows/${userId}/${id}`)
            .then(()=>axios.get(`/api/follows/followees/${id}`))
            .then((response)=>response.data)
            .then((followees)=>dispatch(setFollowees(followees)));
    }
}
