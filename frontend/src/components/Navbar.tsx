/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom'
import './Navbar.css'



export const Navbar =() => {
    return(
        
        <div>
        <div className='header3'>
        <div className='header4'>
      
        <Link to={'/defhome'}>  <img src="../../public/images/p2.png" alt="" /></Link>
            <nav>
            <div className="nav-link">
            <ul>
            <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
       {!isLoggedIn && <li ><Link to={'/register'}>Sign Up</Link></li>}
        {!isLoggedIn && <li ><Link to={'/login'}>Log In</Link></li>}
            </ul>
            </div>
            </nav>
        </div>
        </div>
        </div>
        </div>
    )}