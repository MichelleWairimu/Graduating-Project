import { useState } from "react";
import "./addproduct.css"
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const Addproduct = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [harvestTime, setHarvestTime] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
  <Navbar/>
  <div className="part3">
    <button className="A">Farmer</button>
    <button className="B">Farmer</button>
  </div>
  <div className="weather">
    <h2>Meru</h2>
    <img className="pic1"  src="../../public/images/icon4.png" alt="" />
    <img className="pic2" src="../../public/images/icon6.png" alt="" />
    <img className="pic3" src="../../public/images/icon5.png" alt="" />
    <h3>June 9th</h3>
    <h4>23 Degrees</h4>
    <h5>Strong winds</h5>
  </div>
  <div className="harvests">
    <div className="harvest1">
        <form onSubmit={handleSubmit}>
            <h2>Details</h2>
            <label htmlFor="name">Description</label>
            <input type="text" id="description" name="description"  onChange={e => setDescription(e.target.value)}  required />
            <label htmlFor="name">Location</label>
            <input type="text" id="location" name="location" onChange={e => setLocation(e.target.value)} required />
            <div className="flex">
            <label className="C" htmlFor="name">Harvest Time</label>
            <label className="D" htmlFor="name">Price</label>
            </div>
            <input className="E" type="text" id="harvesttime" onChange={e => setHarvestTime(e.target.value)} name="harvesttime" required />
            <input className="F" type="text" id="price" onChange={e => setPrice(e.target.value)} name="price" required />
            <label htmlFor="name">Contact</label>
            <input type="tel" id="contact" onChange={e => setContact(e.target.value)} name="contact" required  />
           <button  type="submit" className="Dodo">Post</button>
        </form>
    </div>
    </div>
    <Footer/>
  </>
  )
}
