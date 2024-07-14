import { Link} from 'react-router-dom';
import './Navbar.css'; // Ensure you import your CSS

export const Navigation = () => {
  return (
    <div>
      <div className='header3'>
        <div className='header4'>
          <Link to={'/'}>
            <img src="../../public/images/p2.png" alt="Logo" />
          </Link>
          <nav>
            <div className="nav-link">
              <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/addproduct'}>Add Product</Link></li>
                <li><Link to={'/order'}>Order</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
                <li><Link to={'/sell'}>Sell</Link></li>
                <li>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
