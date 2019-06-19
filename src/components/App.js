import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {
    Search,
    Nav,
    Login,
    Beer,
    MenuCapture,
    Discover,
    DiscoverList,
    Home,
    MenuCaptureList,
    RatedBeers,
    Social,
    TasteBuddies,
    Feed,
} from './index.js';
import { login, getUserBeerRatings } from '../reducers';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props
            .searchUsers()
            .then(() => this.props.getUserRatings(this.props.user.id));
    }

    render() {
        return (
            <Router>
                <Route path="/" component={Nav} />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/ratedBeers" component={RatedBeers} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/beer/:beerId" component={Beer} />
                    <Route exact path="/menu" component={MenuCapture} />
                    <Route exact path="/discover" component={Discover} />
                    <Route exact path="/social" component={Social} />
                    <Route
                        exact
                        path="/tasteBuddies"
                        component={TasteBuddies}
                    />
                    <Route
                        exact
                        path="/discover/:style"
                        component={DiscoverList}
                    />
                    <Route exact path="/logout" component={Login} />
                    <Route
                        exact
                        path="/menuresults"
                        component={MenuCaptureList}
                    />
                    <Route component={Home} />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    searchUsers: () => dispatch(login()),
    getUserRatings: userId => dispatch(getUserBeerRatings(userId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
