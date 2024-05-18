import classes from './Form.module.css'
import { useContext, useState } from 'react'
import Validitefu from './Validate'

import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { AuthContext } from '../../Store/authprovider';

const ContactForm = () => {
const ctz= useContext(AuthContext)
console.log(ctz)
    const initialstate = {
        email: '',
        name: '',
        company: ''
    }
    const [values, Setvalue] = useState(initialstate)
    const [error, setError] = useState({})

    const CheckValid = (e) => {
        const valuee = e.target.value
        Setvalue({ ...values, [e.target.name]: valuee })
    }
    const validate = (event) => {
        event.preventDefault()
        setError(Validitefu(values))

    }


    return (
        <>

            <form onSubmit={validate} className={classes.form}>
            <div className={classes.contactRight}>
         <h2 className={classes.question}>Have a Question?</h2><br /><h1>Get in Touch</h1>
            <div className={classes.info}> 
              <p><span> OPENING TIME </span> <br />

         8.30am to 5.00pm Monday to Thursday  <br />
          8.30am to 4.30pm Friday  <br /><span> 
         Calling from abroad? +441293 529777</span></p></div>
           <div className={classes.socialButtons} > 
             <h3> FOLLOW US</h3>
                <FaTwitter className={classes.social} /> <IoLogoInstagram className={classes.social} /> <FaYoutube className={classes.social} /> </div></div>

                <div class={classes.contact}> 
                    <label htmlFor='name'>FIRST NAME  </label>
                    <input onChange={CheckValid} type="text" placeholder="First name"></input>
                    <label htmlFor='name'> SURNAME  </label>
                    <input onChange={CheckValid} type="text" placeholder="Surname"></input>
                    <label htmlFor='name'> Email</label>
                    <input onChange={CheckValid} type="email" placeholder="Email"></input>
                    {error.email && <p className={classes.error}>{error.email}</p>}
                    <label htmlFor='email'> Company Name </label>
                    <input onChange={CheckValid} type="email" placeholder="Company Name"></input>
                    {error.email && <p className={classes.error}>{error.email}</p>}
                    <button> Send Your Message</button>
                </div>
            </form>

        </>
    )
}
export default ContactForm