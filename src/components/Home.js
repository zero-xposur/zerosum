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
        textAlign: 'center',
        backgroundImage: `url(${'https://cdn.pixabay.com/photo/2014/01/28/15/08/beer-253791_640.jpg'})`,
    },
});

function Home(props) {
    const classes = useStyles();
    const user = props.user;
    return (
        <Container className={classes.root}>
            <Grid container justify="center">
                <Grid item>
                    <Typography variant="h1" component="h1" gutterBottom>
                        <Link href="/#/discover">
                            Discover Beers and Breweries with Beer Friends
                        </Link>
                    </Typography>
                    {!user.id && (
                        <Link href="/#/login">
                            <Button>Login to rate a beer</Button>
                        </Link>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Home);
