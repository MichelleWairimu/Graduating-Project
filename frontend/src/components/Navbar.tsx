import { Link } from "react-router-dom"

export const Navbar =() => {
    return(
        <div className='header3'>
        <div className='header4'>
      <a href=""><img src="../../public/images/p2.png" alt="" /></a>
        <nav>
        <div className="nav-link">
        <ul>
        <li><Link to={'/homepage'}>Home</Link></li>
        <li><Link to={'/'}>About Us</Link></li>
        <li><Link to={'/'}>Testimonials</Link></li>
        <li><Link to={'/'}>Contact Us</Link></li>
        <li ><Link to={'/register'}>Sign Up</Link></li>
        <li ><Link to={'/login'}>Log In</Link></li>
        </ul>
        </div>
        </nav>
      </div>
      </div>
    )
}