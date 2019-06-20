import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { localLogin, localCreate, login, logout } from '../reducers';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function LoginWithFacebook({ fbLogin }) {
    const onLogin = () => {
        fbLogin().catch(error => console.log(error));
    };
    const classes = useStyles();
    return (
        <Typography color="textSecondary" align="center">
            <Link
                color="inherit"
                variant="h5"
                href="/api/auth/facebook"
                onClick={onLogin}
            >
                Login with Facebook
            </Link>
        </Typography>
    );
}

function Login({
    loginUser,
    createUser,
    history,
    location,
    fbLogin,
    doLogout,
}) {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // console.log('history changed', location.pathname)
        if (location.pathname === '/logout') {
            console.log('calling the logout thunk from Login');
            doLogout(history);
        }
    }, [location.pathname]);

    const handleEmailChange = ({ target: { value } }) => {
        setEmail(value);
    };
    const handlePasswordChange = ({ target: { value } }) => setPassword(value);

    const handleOnSubmit = event => {
        event.preventDefault();

        loginUser(email, password)
            .then(() => {
                history.push('/search');
            })
            .catch(ex => setErrorMessage(ex.response.data));
    };

    const handleOnSignUp = event => {
        event.preventDefault();
        createUser(email, password)
            .then(() => {
                history.push('/search');
            })
            .catch(ex => setErrorMessage(ex.response.data));
    };

    return (
        <div>
            {location.pathname === '/login' ? (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar} src="icon.png" />
                        <Box mt={5}>
                            <LoginWithFacebook fbLogin={fbLogin} />
                            <Typography align="center">OR</Typography>
                        </Box>
                        <Typography component="h1" variant="h5">
                            Sign In/Create Account
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleOnSubmit}
                            >
                                Submit
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleOnSignUp}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </div>
                </Container>
            ) : null}
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fbLogin: () => dispatch(login()),
        loginUser: (email, password) => dispatch(localLogin(email, password)),
        createUser: (email, password) => dispatch(localCreate(email, password)),
        doLogout: history => dispatch(logout(history)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Login);
