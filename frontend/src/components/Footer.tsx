import { Link } from "react-router-dom"

export const Footer = () => {
    return (
             <footer>
    <a href=""><img src="../../public/images/p2.png" alt="" /></a>
    <p>AgriGrow was made based on the issues faced in many countries.It is focused on being easily accessible and easy to use for all.This bridges the gap between farmer and supplier and it also helps the farmer to track their planting progress.</p>
    <div className="contents">
    <a href="https://www.instagram.com/"><img src="../../public/images/insta.png" alt="" /></a>
    <a href="https://twitter.com/"><img src="../../public/images/twitter.png" alt="" /></a>
    <a href="https://youtube.com/"><img src="../../public/images/youtube.png" alt="" /></a>
    <a href="https://web.whatsapp.com/"><img src="../../public/images/whatsapp.png" alt="" /></a>
    </div>
    <p className='boom'>AgriGrow © 2024 Privacy Policy</p>
    <ul>
    <li><Link to={'/homepage'}>Home</Link></li>
        <li><Link to={'/'}>About Us</Link></li>
        <li><Link to={'/'}>Testimonials</Link></li>
        <li><Link to={'/'}>Contact Us</Link></li>
        <li ><Link to={'/register'}>Sign Up</Link></li>
        <li ><Link to={'/login'}>Log In</Link></li>
        </ul>
    </footer>
    )
}