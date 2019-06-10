import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

const Nav = props => {
    console.log(props);
    const userLinks = [
        {
            label: 'login',
            to: '/login',
        },
        {
            label: 'search',
            to: '/search',
        },
        {
            label: 'Menu Capture',
            to: '/menu',
        },
    ];
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

export default Nav;
