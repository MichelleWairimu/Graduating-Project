import React, { useEffect, useState } from 'react';
import './farmer.css';
import { Link, useNavigate } from 'react-router-dom';
import'../../components/navigat.css'

interface Product {
  _id: string;
  description: string;
  location: string;
  harvestTime: string;
  price: string;
  contact: string;
}

export const FarmerHome: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      if (response.ok) {
        const data: Product[] = await response.json();
        setProducts(data);
      } else {
        const errorData = await response.json();
        console.error('Failed to fetch products:', errorData.error);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleRemove = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts(); // Refresh the product list
        console.log('Product removed successfully!');
      } else {
        const errorData = await response.json();
        console.error('Failed to remove product:', errorData.error);
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };
  
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Clear user authentication data
      localStorage.removeItem('userToken'); // Adjust according to your auth mechanism
      // Redirect to the login page
      navigate('/home'); // Adjust to your login route
    };
  

  return (
    <>
      <div className='header3'>
        <div className='header4'>
          <a href=""><img src="../../public/images/p2.png" alt="" /></a>
          <nav>
            <div className="nav-link">
              <ul>
              <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/addproduct'}>Add Product</Link></li>
                <li><Link to={'/order'}>Order</Link></li>
                <li><Link to={'/sell'}>Sell</Link></li>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className='homepage'>
        <h1>Products</h1>
        <ul className='display'>
          {products.map((product) => (
            <li className='ting' key={product._id}>
              <h2 className='ting1'>{product.description}</h2>
              <p className='ting2'>Location: {product.location}</p>
              <p className='ting2'>Harvest Time: {product.harvestTime}</p>
              <p className='ting2'>Price: {product.price}</p>
              <p className='ting2'>Contact: {product.contact}</p>
              <button className='lol' onClick={() => handleRemove(product._id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

