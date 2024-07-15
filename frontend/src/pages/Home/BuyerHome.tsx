// src/pages/BuyerHome.tsx

import React from 'react';
import { useProductContext } from '../context/productcontext';
import { Navigate } from '../../components/navigat';
import './buyerhome.css';

export const BuyerHome: React.FC = () => {
  const { products, removeProduct, addToMyList } = useProductContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddToMyList = (product: any) => {
    addToMyList(product);
    alert(`${product.name} added to My List!`);
  };

  return (
    <div>
     
     
      <Navigate />
      <h1 className='intromsg'>Welcome to Agrigrow. Your E-commerce website for all agricultural products</h1>
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
            <button className="add-button" onClick={() => handleAddToMyList(product)}>
              Add to My List
            </button>
          </li>
        ))}
      </ul>
      <div className='navtoorder'>
        <h1>Place your first order</h1>
       <a href="/order" className='orderlink'>Order Here</a>
      </div>
    </div>
  );
};
