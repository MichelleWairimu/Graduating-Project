/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useProductContext } from '../context/productcontext';
import { Navigate } from '../../components/navigat';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './buyerhome.css';

export const BuyerHome: React.FC = () => {
  const { products, removeProduct } = useProductContext();
  const navigate = useNavigate();
  const persona = useSelector((state: any) => state.auth.persona);
  const [myList, setMyList] = useState<any[]>([]); // State for the list of saved products

  useEffect(() => {
    // Check if persona is not 'Buyer' (or not logged in)
    if (persona !== 'Buyer') {
      navigate('/defhome'); // Redirect to DefaultHome or desired route
    }

    // Load saved products from local storage
    const savedProducts = localStorage.getItem('myList');
    if (savedProducts) {
      setMyList(JSON.parse(savedProducts));
    }
  }, [persona, navigate]);

  const handleAddToMyList = (product: any) => {
    const updatedList = [...myList, product];
    setMyList(updatedList);
    localStorage.setItem('myList', JSON.stringify(updatedList)); // Save to local storage
    alert(`${product.name} added to My List!`);
  };

  const handleRemoveFromMyList = (index: number) => {
    const updatedList = myList.filter((_, i) => i !== index);
    setMyList(updatedList);
    localStorage.setItem('myList', JSON.stringify(updatedList)); // Update local storage
  };

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
            <button className="add-button" onClick={() => handleAddToMyList(product)}>
              Add to My List
            </button>
          </li>
        ))}
      </ul>

{/*       <h2>My List</h2> */}
      <ul className="my-list">
        {myList.map((item, index) => (
          <li key={index} className="my-list-item">
            <h3>{item.name}</h3>
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
              />
            )}
            <button className="remove-button" onClick={() => handleRemoveFromMyList(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
