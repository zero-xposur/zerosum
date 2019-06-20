import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchUsers, follow, unfollow } from '../reducers/user';

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

function helper(array, id){
    let result=false;
    if(array && array.length>0){
        array.forEach(item=>{
            if(item.id===id){
                result = true;
            }
        })
    }
    
    return result;
}

function UserFollow(props){
    const [state, setState] = useState({
        follow: helper(props.user.followees, props.currentuser.id)
      });
    useEffect(()=>{
        setState({follow:helper(props.user.followees, props.currentuser.id) })
      }, [props.currentuser.id])
    return  (<Grid container spacing={2} style={{
        padding: '6px 20px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '1vh',
    }} key={props.currentuser.id}>
        <Grid  item xs={6}>
            <Typography variant="h6"  style={{ textAlign: 'center' }}>
                {props.currentuser.name}
            </Typography>
        </Grid>
        <Grid  item xs={6}>
            <Button style={{ textAlign: 'center' }} disabled={state.follow} onClick={()=>{state.follow=true; return props.follow(props.currentuser.id, props.user.id)}}>
                Follow
            </Button>
            <Button style={{ textAlign: 'center' }} disabled={!state.follow} onClick={()=>{state.follow=false; return props.unfollow(props.currentuser.id, props.user.id)}}>
                Unfollow
            </Button>
        </Grid>
    </Grid>)
}

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserFollow);