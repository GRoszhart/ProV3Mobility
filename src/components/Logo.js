import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.webp';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} className="img" alt="Logo" />
        </Link>
    );
};

export default Logo;
