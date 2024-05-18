import { Link } from "react-router-dom"

import Header from "../layout/Header"

const Nav = () => {
    return (
        <>
            <li> <Link to='./' >  Home</Link></li>
            <li> <Link to='./contact' >  Contact</Link></li>
            <li> <Link to='./about' >  About</Link></li>

        </>
    )
}
export default Nav