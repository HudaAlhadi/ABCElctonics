import { useContext, useState } from "react";
import { IoIosLock } from "react-icons/io";
import AuthProvider, { AuthContext } from "../../Store/authprovider";
import { useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import classes from './RegisterForm.module.css';
import { RiEyeCloseFill } from "react-icons/ri";

const LoginForm = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { loginState, login, failedlogin, users } = useContext(AuthContext);
  
console.log(failedlogin)
  console.log(users.role)
  const handleLogin =  (e) => {
    e.preventDefault();
  login(email, password);
  }
  useEffect(() => {
    if (users.role === 'user') {
      navigate('/account/myorders/');
    } else if (users.role === 'admin') {
      navigate('/admin');
    }
  }, [loginState, users, navigate]);

  console.log(failedlogin)
    return (
        <> 
            <form>
                {failedlogin && <p className={classes.warning}><AiOutlineWarning /> Incorrect password or email</p>}
                <h2>Sign in</h2>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                
                {!loginState &&
                    <button onClick={handleLogin}><IoIosLock /> Sign in</button> }
          {!loginState&&  <div> <span>Don't have an account?</span> <Link to='/user/register'><span className={classes.sign}> Sign up
           </span> </Link></div> }
            </form>
        </>
    );
};

export default LoginForm;
