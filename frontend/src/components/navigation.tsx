import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
    <div className='header3'>
    <div className='header4'>
    <a href=""><img src="../../public/images/p2.png" alt="" /></a>
        <nav>
        <div className="nav-link">
        <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li ><Link to={'/addproduct'}>Addproduct</Link></li>
        <li ><Link to={'/order'}>Order</Link></li>
    <li><Link to={'/contact'}>Contact Us</Link></li>
    
        </ul>
        </div>
        </nav>
    </div>
    </div>
    </div>
  )
}
