
import classes from './Backdrop.module.css'
const Backdrop=(props)=>{


    return (
<div className={classes.Backdrop}> {props.children} </div>

    )
}

export default Backdrop