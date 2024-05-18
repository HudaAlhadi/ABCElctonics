import classes from './Form.module.css'
import { useState } from 'react'
import Validitefu from './Validate'

const Form = () => {

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
                <div class={classes.container}>
                    <div className={classes.header}>
                        <h3 className={classes.contact}>Contact Form</h3>
                    </div>
                    <label htmlFor='name'> Company </label>
                    <input onChange={CheckValid} type="text" placeholder="Enter your name"></input>
                    <label htmlFor='name'> Company </label>
                    <input onChange={CheckValid} type="email" placeholder="Enter your email"></input>
                    {error.email && <p className={classes.error}>{error.email}</p>}
                    <label htmlFor='email'> Company </label>
                    <input onChange={CheckValid} type="email" placeholder="Enter your company"></input>
                    {error.email && <p className={classes.error}>{error.email}</p>}

                    <button> Register</button>
                </div>
            </form>

        </>
    )
}
export default Form