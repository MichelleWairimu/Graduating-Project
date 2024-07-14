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
    <div>
      <Navigate />
      <h1 className='buy1'>Available Farming Products</h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <h3>{product.name}</h3>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            )}
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button className="delete-button" onClick={() => removeProduct(index)}>
              No Interest
            </button>
            <button className="add-button" onClick={() => addToMyList(product)}>
              Add to My List
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
