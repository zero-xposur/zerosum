import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Search, Nav, Login, Beer } from './index.js';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route
                        path="/"
                        render={({ location }) => Nav({ location })}
                    />
                    <Switch>
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/beer/:beerId" component={Beer} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
