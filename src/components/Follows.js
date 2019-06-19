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
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
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
        <Paper>
        {user.followers && user.followers.length>0?(<div><Typography>
        Beer Friends Who Follow Me
        </Typography>
        <List className={classes.root} subheader={<li />}>
            {user.followers.map(fuser => (
            <li key={fuser.name} className={classes.listSection}>
                <ul className={classes.ul}>
                <ListSubheader></ListSubheader>
                {user.followers.map(item => (
                    <ListItem key={item.name}>
                    <ListItemText primary={item.name} />
                    </ListItem>
                ))}
                </ul>
            </li>
            ))}
        </List></div>): null}
        {user.followees && user.followees.length>0?(<div><Typography>
        Beer Friends Who I Follow
        </Typography>
        <List className={classes.root} subheader={<li />}>
            {user.followees.map(fuser => (
            <li key={fuser.name} className={classes.listSection}>
                <ul className={classes.ul}>
                <ListSubheader></ListSubheader>
                {user.followees.map(item => (
                    <ListItem key={item.name}>
                    <ListItemText primary={item.name} />
                    </ListItem>
                ))}
                </ul>
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