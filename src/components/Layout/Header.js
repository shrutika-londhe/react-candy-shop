import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () =>{
    return (
        <header className={classes.header}>
        <h1>CandyShop</h1>
        <HeaderCartButton />
    </header>
    )
}

export default Header;
