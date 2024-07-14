import './sell.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useProductContext } from '../context/productcontext';
import { Navigation } from '../../components/navigation';

interface Product {
  name: string;
  description: string;
  price: string;
  quantity: string;
  image: string | null; // Allow null initially
}

export const SellPage: React.FC = () => {
  const { addProduct } = useProductContext();
  const [formData, setFormData] = useState<Product>({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'image' && e.target instanceof HTMLInputElement) {
      const files = e.target.files;
      if (files && files.length > 0) {
        const imageUrl = URL.createObjectURL(files[0]); // Create a URL for the image
        setFormData({ ...formData, image: imageUrl }); // Set the image URL
      } else {
        setFormData({ ...formData, image: null }); // Reset to null if no files
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.image) {
      alert('Please upload an image');
      return;
    }

    addProduct({ ...formData }); // Add the product to the context
    setFormData({ name: '', description: '', price: '', quantity: '', image: null }); // Reset form
  };

  return (
    <>
      <Navigation />
      <div className="sell-page">
        <h1>Sell Your Farming Products</h1>
        <form onSubmit={handleSubmit} className="product-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
          <button type="submit">List Product</button>
        </form>
      </div>
    </>
  );
};
