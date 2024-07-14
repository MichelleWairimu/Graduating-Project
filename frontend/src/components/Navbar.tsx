import { Link } from 'react-router-dom'
import './Navbar.css'

import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

export const Navbar =() => {
   /*  const persona = useSelector((state: any) => state.auth.persona); */
    const userId = useSelector((state: any) => state.auth.userId);
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    return(
        
        <div>
        <div>
        <div className='header3'>
        <div className='header4'>
        <a href=""><img src="../../public/images/p2.png" alt="" /></a>
            <nav>
            <div className="nav-link">
            <ul>
            <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li ><Link to={'/register'}>Sign Up</Link></li>
        <li ><Link to={'/login'}>Log In</Link></li>
            </ul>
            </div>
            </nav>
        </div>
        </div>
        </div>
    )
}