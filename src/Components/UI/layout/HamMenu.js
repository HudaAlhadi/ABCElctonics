import { useState } from "react";
import classes from './HamMenu.module.css'
import React from 'react';
const HamMenu = (props) => {



    return (
        <svg onClick={props.onClick} className={classes.HamBurger}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="70"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    );
};

export default HamMenu;
