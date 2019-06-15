import React from 'react';
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    Link,
    InputBase,
    TextField,
    Paper,
    Button,
    CssBaseline,
    Grid,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1000,
    textAlign: "center",
  },
});

function Home(props){
    const classes = useStyles();
    const user = props.user;
    return(
        <div className={classes.root}>
                <Grid container justify = "center">
                    <Typography variant="h1" component="h2" gutterBottom>Discover beers and breweries 
                    with Beer Buddies</Typography>
                    {user.id&&(<Link href='/#/login' ><Button>Login to rate a beer</Button></Link>)}

                </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Home);
