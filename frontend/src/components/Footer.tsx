import './Footer.css'

export const Footer = () => {
    return (
       <div className='container'>
       <footer>
        <a href=""><img src="../../public/images/p2.png" alt="" /></a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="contents">
        <a href="https://www.instagram.com/"><img src="../../public/images/insta.png" alt="" /></a>
        <a href="https://twitter.com/"><img src="../../public/images/twitter.png" alt="" /></a>
        <a href="https://youtube.com/"><img src="../../public/images/youtube.png" alt="" /></a>
        <a href="https://web.whatsapp.com/"><img src="../../public/images/whatsapp.png" alt="" /></a>
        </div>
        <p className='boom'>AgriGrow © 2024 Privacy Policy</p>
        <ul>
        <li><a href="">Home</a></li>
            <li><a href="">Contact Us</a></li>
            <li ><a href="">Sign up</a></li>
            <li ><a href="">Log In</a></li>
            </ul>
    </footer>
    </div>

    )
}