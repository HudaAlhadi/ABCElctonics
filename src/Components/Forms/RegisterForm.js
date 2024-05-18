import { useState } from "react";
import classes from './RegisterForm.module.css';
import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";



const RegisterForm = () => {

    const [username, setname]= useState('')
    const [Password, setpassword]= useState('')
    const [Email, setemail]= useState('')
    const[show, setshow]= useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const res = await fetch('http://localhost:3005/user/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ username: username, password: Password, email: Email })
            });
            console.log(res)
            
            console.log(await res.json())
            if(res.status===200){
          
             window.location.href = '/';
            }   
            else
           setshow(true)   
        } catch (err) {
            console.error('Error occurred:', err);
        }
    };
    
    return (
        <> 
   
        <form action="submit" method="post" >
        {show&&<p className="show-user"><AiOutlineWarning /> User is already exists</p>}
            <h2>Sign up</h2>
            <label htmlFor="username">Username</label>
            <input className={classes.input} type="text" id="username" name="username" required onChange={(e)=>{
                setname(e.target.value)
            }}/>
            <label htmlFor="email">Email</label>
            <input className={classes.input} type="email" id="email" name="email" required onChange={(e)=>{
                setemail(e.target.value)
            }}/>
            <label htmlFor="password">Password</label>
            <input className={classes.input} type="password" id="password" name="password" required onChange={(e)=>{
                setpassword(e.target.value)
            }} />
            <div className={classes.buttons}> 
            <Link to='/login'> <button onClick={handleSubmit}> Sign up
            </button></Link> 
            <div> 
          </div>  </div>
        </form>
 
        </>
    );
};

export default RegisterForm

