import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
const userLinks = [
    {
        label: 'home',
        to: '/home',
    },
    {
        label: 'search',
        to: '/search',
    },
    {
        label: 'Menu Capture',
        to: '/menu',
    },
    {
        label: 'Discover',
        to: '/discover',
    },
    {
        label: 'Logout',
        to: '/logout',
    },
];
const Nav = props => {
    useEffect(() => {
        console.log(props.user);

        if (props.user.user) {
            userLinks[0].label = `Hello, ${props.user.user.displayName}`;
        } else {
            userLinks[0].label = 'Home';
        }
    }, [props]);

    if (props.user.user) {
        userLinks[0].label = `Hello, ${props.user.user.displayName}`;
    } else {
        userLinks[0].label = 'Home';
    }

    const [value, setValue] = React.useState(props.location.pathname);

    function handleChange(event, newValue) {
        console.log(value);
        setValue(newValue);
    }

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            {userLinks.map(link => {
                return (
                    <Tab
                        key={link.label}
                        component={Link}
                        to={link.to}
                        label={link.label}
                        value={link.to}
                    />
                );
            })}
        </Tabs>
    );
};

const mapStateToProps = state => {
    return {
        user: state,
    };
};
export default connect(mapStateToProps)(Nav);
