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
            <li><a href="/home">Home</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {!isLoggedIn && <li><a href="/login">Login</a></li>}
            {!isLoggedIn && <li><a href="/register">Sign up</a></li>}
          {isLoggedIn && userId && <li><Link to={`/profile/${userId}`}>My Profile</Link></li>}
            </ul> 
            </div>
            </nav>
        </div>
        </div>
        </div>
       
      </div>
     
    )
}