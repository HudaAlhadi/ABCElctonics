import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import { Link, Outlet } from 'react-router-dom';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div class={classes.container}>
                    <h1>HudMeals.</h1>
                    <nav>

                        <Link to='./'> <li> Home</li> </Link>
                        <Link to='./home'><li> Home</li></Link>
                        <Link to='./contact'> <li> Contact</li></Link>

                    </nav>
                    <HeaderCartButton onClick={props.onShow}> </HeaderCartButton>
                </div>
            </header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Header;