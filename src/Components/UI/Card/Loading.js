
import React from 'react';

import classes from './Loading.module.css'
import Modal from '../Modal';

const Loading = () => {

    return (
<> 
<div class={classes.container}>
        <span class={classes.loader}></span>
        </div>
        </>
    )
}

export default Loading