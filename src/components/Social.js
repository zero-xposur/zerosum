import React, { Component, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchUsers, follow } from '../reducers/user';
import Follows from './Follows.js';

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
    Link,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Social(props){
        const [search, setSearch] = useState('');

        const handleChange = ({ target }) => {
            setSearch(target.value);
        };
    
        const handleSubmit = evt => {
            evt.preventDefault();
            const userId = props.user && props.user.id? props.user.id:null;
            console.log('userId in search component', props.user);
            props.searchUsers(search)
            .then((res)=>console.log('Show all the searched users', res))
            .catch(error=>console.log(error))
        };
    
        const keyPress = e => {
            if (e.keyCode === 13) {
                handleSubmit(e);
            }
        };
    
        console.log(props);
        //clicked=false;
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
                    {((props.user && search && (props.user.searchedUsers))? ((typeof props.user.searchedUsers === 'object')? props.user.searchedUsers.map(user=>(
                        <Grid container spacing={2} style={{
                            padding: '6px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            margin: '1vh',
                        }} key={user.id}>
                            <Grid  item xs={6}>
                                <Typography variant="h6"  style={{ textAlign: 'center' }}>
                                    {user.name}
                                </Typography>
                            </Grid>
                            <Grid  item xs={6}>
                                <Button  style={{ textAlign: 'center' }} onClick={()=>props.follow(user.id, props.user.id)}>
                                    Follow
                                </Button>
                            </Grid>
                        </Grid>)) : 
                        <Typography variant="h6">
                            No user found with this name. Send them a link to Beer Friends!
                        </Typography>
                        ): null )}
                    </Grid>
                </Grid>
            </Grid>
            <Follows />
            </Fragment>
        );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    searchUsers: search => dispatch(searchUsers(search)),
    follow: (userId, id) => dispatch(follow(userId, id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Social);