/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';

export const Buy: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        setProducts(storedProducts);
    }, []);

    return (
        <>
            <Navbar />
            <div className='buy'>
                <h1>Available Products</h1>
                {products.length > 0 ? (
                    <div>
                        {products.map((product, index) => (
                            <div key={index} className="product-details">
                                <p><strong>Description:</strong> {product.description}</p>
                                <p><strong>Location:</strong> {product.location}</p>
                                <p><strong>Harvest Time:</strong> {product.harvestTime}</p>
                                <p><strong>Price:</strong> {product.price}</p>
                                <p><strong>Contact:</strong> {product.contact}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='buy1'>No data available.</p>
                )}
            </div>
        </>
    );
};
