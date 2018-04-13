import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './conteiners/Users';
import Users from './conteiners/Pizza';

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                    <div>
                        <Route path="/" exact component={Users} />
                        <Route path="/pizza" component={} />
                    </div>
                </div>
            </div>
        );
    }
}