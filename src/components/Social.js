import React, { Component, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchUsers, findAllFollowees, findAllFollowers } from '../reducers/user';

import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    TextField,
    Paper,
    IconButton,
    Button,
    Grid,
    CssBaseline,
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
                                {/* <IconButton>
                                    <Link href='/#/menu'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/></svg>			
                                    </Link>
                                </IconButton> */}
                            </Paper>
                        </Toolbar>
                    </AppBar>
                    
                    {/* <UserList beers={props.user.searchedUsers} /> */}
                </Container>
            {/* </Fragment>
            <Fragment> */}
                       
            <Grid container >
                <Grid item>
                    <Grid>
                    {(props.user && (props.user.searchedUsers) && (typeof props.user.searchedUsers === 'object'))? props.user.searchedUsers.map(user=>(
                        <Grid container spacing={3} style={{
                            padding: '6px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            margin: '2vh',
                        }}>
                            <Grid  item xs={6}>
                                <Typography variant="h6"  style={{ textAlign: 'center' }}>
                                    {user.name}
                                </Typography>
                            </Grid>
                            <Grid  item xs={6}>
                                <Button  style={{ textAlign: 'center' }}>
                                    Follow
                                </Button>
                            </Grid>
                        </Grid>)) : null}
                    </Grid>
                </Grid>
            </Grid>
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
    findAllFollowees: () => dispatch(findAllFollowees()),
    findAllFollowers: () => dispatch(findAllFollowers()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Social);