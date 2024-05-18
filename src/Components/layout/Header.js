import { Fragment, useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import HeaderCartButton from './HeaderCartButton';
import { MdAccountCircle } from "react-icons/md";
import classes from './Header.module.css';
import { Link, Outlet } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { AuthContext } from "../../Store/authprovider";
import { useContext } from 'react';
import cart from '../../Assets/cart.png'
import { Dropdown } from "react-bootstrap";
import Modal from '../UI/Modal';
import { GiConsoleController, GiHamburgerMenu } from "react-icons/gi";
import ProductContext from '../../Store/productcontext';
import { useRef } from 'react';

const Header = (props) => {
  const [value, setValue] = useState('');
  const {users,loginState, logout} = useContext(AuthContext);
const {products}= useContext(ProductContext)
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');
const [showaccount, setAccount]= useState(false)

const [Isshow, setshowstate] = useState(false);
console.log(Isshow)

  const handleLogout = () => {
     
      logout();
      setAccount(false); 
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
}, []);

const handleClickOutside=(event)=>{
  if (!event.target.closest('.header') && !event.target.closest('.hamIcon')){
    setshowstate(false)
  
  }

}
  const user = users?.username;
useEffect(() => {
  if(loginState && user) {
    setUsername(user);
  }
}, [loginState, user]);


  const handleSearch = (e) => {
    const input = e.target.value;
    setValue(input);
    const result = products?.filter((product) =>
      product.product.name.toLowerCase().includes(input.toLowerCase())
    );
    setMatchingProducts(result);

  };

  return (
    <Fragment>
   
      <header  className={classes.header}>
     <div className={classes.logocontainer}> 
        <img  src={cart}/>
         
        <h1>AbcElectonics</h1></div>
        <div className={classes.container}>
        
         {Isshow? <nav className={classes.OverlayMenu}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/contact'>Contact</Link> 

          </nav> :<nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/contact'>Contact</Link> 
            
          </nav>}
          <div onChange={handleSearch}  onFocus={e => setShowDropdown(true)}
              onBlur={e => setShowDropdown(false)} className={classes.searchBar}>
            <input type="text" placeholder="Search for product" />
            <IoIosSearch className={classes.icon} />
            {showDropdown && (
              <div className={classes.dropdown}>
                {matchingProducts?.map((product) => (
                  <div key={product.product.id} className={classes.dropdownItem}>
                    <Link to={`/meals/${product.product.name}`}>{product.product.name}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
            <div className={classes.accountContainer}>
            <div className={classes.cart}>
            <HeaderCartButton onClick={props.onShow} />
            <Link to='/favorite'>
              <FaRegHeart className={classes.account} />
            </Link> </div>
            {loginState && username ? (
                <div className={classes.loggedInContainer}>
                    <Link to="/account/myorders" className={classes.accountLink}>
                        Hello {username}!
                    </Link>
                    <button onClick={handleLogout} className={classes.logoutButton}>
                       Log Out
                    </button>
                </div>
            ) : (
                <Link to="/login" className={classes.loginLink}>
                    Login
                </Link>
            )}
            <MdAccountCircle className={classes.accountIcon} />
       
         <GiHamburgerMenu  onClick={(e)=>{     e.stopPropagation() ; setshowstate(true)}} className={classes.hamIcon}/>
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
