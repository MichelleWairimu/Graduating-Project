import React from 'react';
import { useProductContext } from '../context/productcontext';
import './mylist.css';
import { Navigate } from '../../components/navigat';

export const MyList: React.FC = () => {
  const { myListProducts, removeFromMyList } = useProductContext();

  return (
    <div>
      <Navigate />
      <h1 className='mylist-title'>My List</h1>
      <ul className="mylist">
        {myListProducts.map((product, index) => (
          <li key={index} className="mylist-item">
            <h3>{product.name}</h3>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="mylist-image"
              />
            )}
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button className="remove-button" onClick={() => removeFromMyList(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
