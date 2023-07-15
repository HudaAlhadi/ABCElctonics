import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <>
            <footer class={classes.footer}>
                <div class={classes.container}>
                    <div class={classes.list}>

                        <ul>
                            <h2>My account </h2>
                            <Link to='/home'> <li> About delivery</li> </Link>
                            <Link to='/home'> <li> About </li> </Link>
                            <Link to='/home'> <li> Ethical </li> </Link>
                        </ul>
                        <div>  <button> <i class="fas fa-plus"></i></button></div>


                    </div>
                    <div class={classes.list}>

                        <ul>
                            <h2>Help</h2>
                            <Link to='/contact'> <li> Contact us </li> </Link>

                        </ul>
                        <div class={classes.item}>  <button> <i class="fas fa-plus"></i></button></div>
                    </div>
                    <div class={classes.list}>

                        <ul>
                            <h2>About us </h2>
                            <Link to='/home'> <li> About delivery</li> </Link>
                            <Link to='/home'> <li> About </li> </Link>
                            <Link to='/home'> <li> Ethical </li> </Link>
                        </ul>
                        <div>  <button> <i class="fas fa-plus"></i></button></div>
                    </div>
                    <div class={classes.list}>

                        <ul>
                            <h2>Delivery </h2>
                            <Link to='/home'> <li> About delivery</li> </Link>
                            <Link to='/home'> <li> About </li> </Link>
                            <Link to='/home'> <li> Ethical </li> </Link>
                        </ul>
                        <div>  <button> <i class="fas fa-plus"></i></button></div>
                    </div>








                </div>


            </footer >
        </>)
}

export default Footer