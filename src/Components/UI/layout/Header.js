import { Fragment } from 'react';
import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import HamMenu from './HamMenu';
import classes from './Header.module.css';
import { Link, Outlet } from 'react-router-dom';
import SideBar from '../Cart/SideBar';
import { useAuth0 } from "@auth0/auth0-react";
import TopBar from './TopBar';
import {BsBoxArrowRight , BsBoxArrowLeft} from 'react-icons/bs'
import Modal from '../Modal';
const Header = (props) => {

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    console.log(useAuth0())
    return (
        <Fragment>
               
            <TopBar></TopBar>
            <div className={classes.header}>
            <h1 className={classes.logo}>HudMeals.</h1>
            <HamMenu onClick={props.onShoww} />
                    <div className={classes.list}>
                        <Link to='./'> <li> Home</li> </Link>
                        <Link to='./home'><li> About</li></Link>
                        <Link to='./contact'> <li> Contact</li></Link>

                    </div>
                   {
      isAuthenticated && (
        <div>
          <h2>{user.name}</h2>
        </div>
      )}
     <HeaderCartButton onClick={props.onShow} />
          </div>
              </Fragment>
    );
};

export default Header;