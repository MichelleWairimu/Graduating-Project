import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import './navigat.css';

export const Navigate = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem('userToken'); // Adjust according to your auth mechanism
    // Redirect to the login page
    navigate('/'); // Adjust to your login route
  };

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
                <li><Link to={'/list'}>My List</Link></li>
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
