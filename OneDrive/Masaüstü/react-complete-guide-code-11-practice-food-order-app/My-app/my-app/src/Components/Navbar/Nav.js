import { Link } from "react-router-dom"

import Header from "../layout/Header"
import Meals from "../Meals/Meals"
const Nav = () => {
    return (
        <>
            <li> <Link to='./' >  Home</Link></li>
            <li> <Link to='./conatct' >  Contact</Link></li>
            <li> <Link to='./about' >  About</Link></li>

        </>
    )
}
export default Nav