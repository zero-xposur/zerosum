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
    Home
} from './index.js';
import { login } from '../reducers/user';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props
            .searchUsers()
            .then(() => console.log('state user is', this.props.user));
    }
    render() {
        const user=this.props.user;
        return (
            <Router>
                {/* <Route path="/" render={(({location})=>Nav({location}, {user}))} /> */}
                <Route path="/" component={Nav} />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/beer/:beerId" component={Beer} />
                    <Route exact path="/menu" component={MenuCapture} />
                    <Route exact path="/discover" component={Discover} />
                    <Route
                        exact
                        path="/discover/:style"
                        component={DiscoverList}
                    />
                    <Route exact path="/logout" component={Login} />
                    <Route component={Home}/>
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
