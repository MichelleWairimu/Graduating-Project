import { useState } from "react";
import "./addproduct.css";
import { Navigation } from "../../components/navigation";
import { useNavigate } from "react-router-dom";

export const Addproduct = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [harvestTime, setHarvestTime] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = { description, location, harvestTime, price, contact };

    try {
      const response = await fetch('http://localhost:5000/addproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        console.log('Product added successfully!');
        // Reset form
        setDescription('');
        setLocation('');
        setHarvestTime('');
        setPrice('');
        setContact('');
        // Navigate to Buy page
        navigate('/home');
      } else {
        const errorData = await response.json();
        console.error('Failed to add product:', errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="harvests">
        <div className="harvest1">
          <form onSubmit={handleSubmit}>
            <h2>Details</h2>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={e => setDescription(e.target.value)} required />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={e => setLocation(e.target.value)} required />
            <div className="flex">
              <label className="C" htmlFor="harvesttime">Harvest Time</label>
              <label className="D" htmlFor="price">Price</label>
            </div>
            <input className="E" type="text" id="harvesttime" onChange={e => setHarvestTime(e.target.value)} required />
            <input className="F" type="text" id="price" onChange={e => setPrice(e.target.value)} required />
            <label htmlFor="contact">Contact</label>
            <input type="tel" id="contact" onChange={e => setContact(e.target.value)} required />
            <button type="submit" className="Dodo">Post</button>
          </form>
        </div>
      </div>
    </>
  );
};
