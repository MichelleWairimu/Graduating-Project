/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useProductContext } from '../context/productcontext';
import { Navigate } from '../../components/navigat';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './buyerhome.css';

export const BuyerHome: React.FC = () => {
  const { products, removeProduct, addToMyList } = useProductContext();
  const navigate = useNavigate();
  const persona = useSelector((state: any) => state.auth.persona);

  useEffect(() => {
    if (persona !== 'Buyer') {
      navigate('/defhome'); // Redirect if not a buyer
    }
  }, [persona, navigate]);

  return (
    <div role='main' aria-label='Buyer Home Page'>    
      <Navigate />
      <h1 className='intromsg' aria-level={1}>Welcome to Agrigrow. Your E-commerce website for all agricultural products</h1>
      <h1 className='buy1'>Available Farming Products</h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <h3 aria-level={3}>{product.name}</h3>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                aria-hidden={product.name!== ''} 
              />
            )}
            <p aria-label={`Description of ${product.name}`}>{product.description}</p>
            <p aria-label={`Price of ${product.name}`}>Price: ${product.price}</p>
            <p aria-label={`Quantity of ${product.name}`}>Quantity: {product.quantity}</p>
            <button className="delete-button" onClick={() => removeProduct(index)}
            aria-label={`Remove ${product.name} from list`}>
              No Interest
            </button>
            <button className="add-button" onClick={() => addToMyList(product)}
               aria-label={`Add ${product.name} to my list`}>
              Add to My List
            </button>
          </li>
        ))}
      </ul>
      /</div>
  );
};
