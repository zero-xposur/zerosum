import React, { Component, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { findAllFollowees, findAllFollowers } from '../reducers/user';

import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    Paper,
    IconButton,
    Button,
    Grid,
    Link,
} from '@material-ui/core';

function Feed(props){
   return (
       <Container>
           {(props.user && (typeof props.user.followees === 'object'))? props.user.followees.map(user=>
            (<Grid>
                ${user.name} rated 
            </Grid>
            ))
            : null }
       </Container>

   )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    findAllFollowees: (id) => dispatch(findAllFollowees()),
    findAllFollowers: (id) => dispatch(findAllFollowers()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
