import './Talktous.css'
import { Link } from 'react-router-dom'


const Talktous=()=>{

    return <> <div className='talktous'> <h1> Talk to us</h1> <p> If you have any suggestions or complaints, please get in touch. </p> <button className='contactbutton'> <Link to='/contact'>Contact us  </Link></button></div></>
}

export default Talktous