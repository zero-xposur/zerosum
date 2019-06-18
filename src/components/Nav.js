import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
const userLinks = [
    {
        label: 'Home',
        to: '/home',
    },
    {
        label: 'Rated Beers',
        to: '/ratedBeers',
    },
    {
        label: 'Taste Buddies',
        to: '/tasteBuddies',
    },
    {
        label: 'search',
        to: '/search',
    },
    // {
    //     label: 'Menu Capture',
    //     to: '/menu',
    // },
    {
        label: 'Discover',
        to: '/discover',
    },
    {
        label: 'Beer Buddies',
        to: '/social',
    },
    {
        label: 'Logout',
        to: '/logout',
    },
];
const guestLinks = [
    {
        label: 'Home',
        to: '/home',
    },
    {
        label: 'Login',
        to: '/login',
    },
    {
        label: 'search',
        to: '/search',
    },
    // {
    //     label: 'Menu Capture',
    //     to: '/menu',
    // },
    {
        label: 'Discover',
        to: '/discover',
    },
];
const Nav = props => {
    let links = [];
    useEffect(() => {
        console.log('in nav', props.user);

        if (props.user.name) {
            userLinks[0].label = `Hello, ${props.user.name}`;
        } else {
            userLinks[0].label = 'Home';
        }
    }, [props]);

    console.log('props user', props.user);
    if (props.user.name) {
        links = userLinks;
        links[0].label = `Hello, ${props.user.name}    
            Followers (${
                props.user.followers ? props.user.followers.length : 0
            }) Following (${
            props.user.followees ? props.user.followees.length : 0
        })`;
    } else {
        links = guestLinks;
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
            {links.map(link => {
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
        user: state.user,
    };
};
export default connect(mapStateToProps)(Nav);
