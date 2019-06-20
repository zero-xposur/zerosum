import React, { Component, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { findAllFollowees, getFeed } from '../reducers/user';

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
import ShowReview from './ShowReview';

function Feed(props){
   function findFolloweeName(id){
    let result='';

    if(props.user.followees.length>0){
       props.user.followees.forEach((followee)=>{
           console.log('in findFolloweeName', followee);
           if(followee.id===id){
               result= followee.name;
           }
       })
    }
    return result;
   }
   return (
       <Container>
           {(props.user && (typeof props.user.followees === 'object'))? props.user.feed.map(followees=>
                followees.map(followee=>
            (<Grid>
                <Typography variant="h6">
                {findFolloweeName(followee.userId)} rated {followee.babeer.name} as
                </Typography>
                <ShowReview review={followee} />
            </Grid>
            )))
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
    findAllFollowees: (id) => dispatch(findAllFollowees(id)),
    getFeed: (id) => dispatch(getFeed(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
