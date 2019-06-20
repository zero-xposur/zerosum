import React, { Component, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchUsers, follow, unfollow } from '../reducers/user';
import Follows from './Follows.js';
import Feed from './Feed.js';
import UserFollow from './UserFollow.js';

import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Paper,
    IconButton,
    Button,
    Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    searchUsers: search => dispatch(searchUsers(search)),
    follow: (userId, id) => dispatch(follow(userId, id)),
    unfollow: (userId, id) => dispatch(unfollow(userId, id)),
});

function Social(props){
        const [search, setSearch] = useState('');
        
        const handleChange = ({ target }) => {
            setSearch(target.value);
        };
        
        const handleSubmit = evt => {
            evt.preventDefault();
            // const userId = props.user && props.user.id? props.user.id:null;
            // console.log('userId in search component', props.user);
            props.searchUsers(search)
            .then((res)=>console.log('Show all the searched users', res))
            // .then(()=>{
            //     if(props.user && props.user.followees && (props.user.followees.length>0)){
            //         props.user.followees.forEach(user=>{
            //             if(user.id === props.user.)
            //         })
            //     }
            //     else{
            //         state.follow=false;
            //     }
            // })
            .catch(error=>console.log(error))
        };
    
        const keyPress = e => {
            if (e.keyCode === 13) {
                handleSubmit(e);
            }
        };
    
        console.log(props);
        return (
            <Fragment>
                <Container>
                    <AppBar position="static" style={{ margin: '5 0 5 0' }}>
                        <Toolbar>
                            <Paper
                                style={{
                                    padding: '2px 4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '60%',
                                    margin: '1vh',
                                }}
                            >
                                <InputBase
                                    placeholder="Search your friends by name or email"
                                    onChange={handleChange}
                                    style={{ marginLeft: 8, flex: 1 }}
                                    onKeyDown={keyPress}
                                />
                                <IconButton onClick={handleSubmit}>
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Toolbar>
                    </AppBar>
                    
                    {/* <UserList beers={props.user.searchedUsers} /> */}
                </Container>                       
            <Grid container >
                <Grid item>
                    <Grid>
                    {((props.user && search && (props.user.searchedUsers))? ((typeof props.user.searchedUsers === 'object')? props.user.searchedUsers.map(currentuser=>(
                       <UserFollow currentuser={currentuser} />)) : 
                        <Typography variant="h6">
                            No user found with this name. Send them a link to Beer Friends!
                        </Typography>
                        ): null )}
                    </Grid>
                </Grid>
            </Grid>
            <Follows />
            <Feed />
            </Fragment>
        );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Social);
