/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import'./buyerhome.css'

export const BuyerHome: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/buyerhome');
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                console.error('No data found');
            }
        };

        fetchData();
    }, []);

    return (
      <>
      <Navbar/>
        <div className='buy'>
            <h1>Buyer Home</h1>
            {data ? (
                <div>
                    <h2>Details</h2>
                    <p><strong>Description:</strong> {data.description}</p>
                    <p><strong>Location:</strong> {data.location}</p>
                    <p><strong>Harvest Time:</strong> {data.harvestTime}</p>
                    <p><strong>Price:</strong> {data.price}</p>
                    <p><strong>Contact:</strong> {data.contact}</p>
                </div>
            ) : (
                <p className='buy1'>No data available.</p>
            )}
        </div>
        </>
    );
};
