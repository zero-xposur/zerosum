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
        height: '100%',
        textAlign: 'center',
        backgroundImage: `url(${'https://cdn.pixabay.com/photo/2014/01/28/15/08/beer-253791_640.jpg'})`,
        backgroundSize: 'cover',
    },
});

function Home(props) {
    const classes = useStyles();
    const user = props.user;
    return (
        <Container className={classes.root}>
            <Typography variant="h1" color="primary" gutterBottom>
                Discover New Beers with Beer Friends
            </Typography>
            {!user.id && (
                <Link href="/#/login">
                    <Button variant="contained" color="primary">
                        Login to rate a beer
                    </Button>
                </Link>
            )}
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Home);
