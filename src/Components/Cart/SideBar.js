import Modal from "../UI/Modal"
import { Link } from "react-router-dom"
import classes from './SideBar.module.css'
const SideBar = (props) => {

    return (
        <Modal onHide={props.onHide}>
            <button> x</button>
            <div className={classes.container} >
                <Link to='./'> <li> About</li> </Link>
                <Link to='./home'><li> Home</li></Link>
                <Link to='./contact'> <li> Contact</li></Link>
            </div>
        </Modal>
    )
}


export default SideBar