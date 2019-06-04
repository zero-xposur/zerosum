import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: { pathname } }) => {
    const userLinks = [
        {
            label: 'Login',
            to: '/login',
        },
        {
            label: 'Search',
            to: '/search',
        },
        {
            label: 'Menu Capture',
            to: '/menu',
        },
    ];

    return (
        <ul
            className="nav nav-pills"
            style={{ marginBottom: '20px', marginTop: '10px' }}
        >
            {userLinks.map(link => {
                return (
                    <li
                        key={link.to}
                        className={`nav-item${
                            pathname === link.to ? ' active' : ''
                        }`}
                    >
                        <Link
                            to={link.to}
                            className={`nav-link${
                                pathname === link.to ? ' active' : ''
                            }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Nav;
