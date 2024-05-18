import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";


import React from 'react';

const Footer = () => {

    return (
        <>
            <footer class={classes.footer}>
                <div class={classes.container}>
                    <div class={classes.list}>
                        <ul>
                            <h2>Get to know us </h2>
                            <Link to='/home'> <li>Careers</li> </Link>
                            <Link to='/about'> <li> About </li> </Link>
                            <Link to='/'> <li> Home </li> </Link>
                            <Link to='/'> <li> Press Releases </li> </Link>
                        </ul>
                    </div>
                    <div class={classes.list}>
                        <ul>
                            <h2>Help</h2>
                            <Link to='/contact'> <li> Contact us </li> </Link>
                            <Link to='/contact'> <li> FAQ </li> </Link>
                            <Link to='/'> <li>Shipping & Delivery </li> </Link>
                            <Link to='/'> <li>Returns & Exchangesy </li> </Link>
                        </ul>
                    </div>
                    <div class={classes.list}>
                        <ul>
                            <h2>Contact us </h2>
                            <Link to='/about'> <li> Customer Service </li> </Link>
                            <Link to='/contact'> <li>Email Us</li> </Link>
                            <Link to='/contact'> <li> Call us </li> </Link>
                     
                        </ul>
                    </div>
                    <div class={classes.list}>
                        <ul>
                            <h2>Delivery Info</h2>
                            <Link to='/'> <li> Delivery</li> </Link>
                            <Link to='/'> <li> Refund policy </li> </Link>
                            <Link to='/'> <li> Terms and conditions </li> </Link>
                        </ul>
                    </div>
                </div>
                <div className={classes.btncontainer}>  <button className={classes.touch}> Get In touch</button> 
                <div > <h3> Follow us</h3>
                <FaFacebook  className={classes.social} /> <FaTwitter className={classes.social} /> <IoLogoInstagram className={classes.social} /> <FaYoutube className={classes.social} /> </div></div>
            </footer >
        </>)
}

export default Footer