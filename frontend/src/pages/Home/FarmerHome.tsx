import React, { useEffect, useState } from 'react';
import './farmer.css';
import { Link, useNavigate } from 'react-router-dom';
import'../../components/navigat.css'
import { useSelector } from 'react-redux';

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
  
  const persona = useSelector((state:any) => state.auth.persona)

    const handleLogout = () => {
      // Clear user authentication data
      {persona &&  localStorage.removeItem('persona');}
      // Adjust according to your auth mechanism
      // Redirect to the login page
      navigate('/home'); // Adjust to your login route
    };
  

  return (
    <>
      <div className='header3'>
        <div className='header4'>
          <a href=""><img src="../../public/images/p2.png" alt="" aria-label="Logo"/></a>
          <nav aria-label="Main navigation">
            <div className="nav-link">
              <ul>
              <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/addproduct'}>Add Product</Link></li>
                <li><Link to={'/sell'}>Sell</Link></li>
             
              </ul>
            </div>
           
          </nav>
          <button onClick={handleLogout} className="logout-button"  aria-label="Logout">
                    Logout
            </button>
         
        </div>
      </div>
      <div className='homepage'>
        <h1>Products</h1>
        <ul className='display' aria-label='Product List'>
          {products.map((product) => (
            <li className='ting' key={product._id}>
              <h2 className='ting1'>{product.description}</h2>
              <p className='ting2'>Location: {product.location}</p>
              <p className='ting2'>Harvest Time: {product.harvestTime}</p>
              <p className='ting2'>Price: {product.price}</p>
              <p className='ting2'>Contact: {product.contact}</p>
              <button className='lol' onClick={() => handleRemove(product._id)} aria-label={`Remove ${product.description}`}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

