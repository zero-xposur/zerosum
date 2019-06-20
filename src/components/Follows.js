import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Paper
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
}));

 
function Follows({user}) {
    const classes = useStyles();
  
    return (
        <Paper className={classes.root}>
        {user.followers && user.followers.length>0?(<div><Typography variant="h5">
        Followers
        </Typography>
        <List className={classes.root} subheader={<li />}>
            {user.followers.map(fuser => (
            <li key={fuser.name} className={classes.listSection}>
               
                    <ListItem key={fuser.name}>
                        <ListItemText primary={fuser.name} />
                    </ListItem>
               
            </li>
            ))}
        </List></div>): null}
        {user.followees && user.followees.length>0?(<div><Typography variant="h5">
        Following
        </Typography>
        <List className={classes.root} subheader={<li />}>
            {user.followees.map(fuser => (
            <li key={fuser.name} className={classes.listSection}>
                
                    <ListItem key={fuser.name}>
                        <ListItemText primary={fuser.name} />
                    </ListItem>
               
            </li>
            ))}
        </List></div>):null}
        </Paper>
    );
  }

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(
    mapStateToProps,
    null
)(Follows);