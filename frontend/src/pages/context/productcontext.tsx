// src/context/ProductContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  name: string;
  description: string;
  price: string;
  quantity: string;
  image: string | null;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (index: number) => void;
  myListProducts: Product[];
  addToMyList: (product: Product) => void;
  removeFromMyList: (index: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const [myListProducts, setMyListProducts] = useState<Product[]>(() => {
    const storedMyList = localStorage.getItem('myListProducts');
    return storedMyList ? JSON.parse(storedMyList) : [];
  });

  const addProduct = (product: Product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const removeProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const addToMyList = (product: Product) => {
    const updatedMyList = [...myListProducts, product];
    setMyListProducts(updatedMyList);
    localStorage.setItem('myListProducts', JSON.stringify(updatedMyList));
    alert(`${product.name} added to My List!`);
  };

  const removeFromMyList = (index: number) => {
    const updatedMyList = myListProducts.filter((_, i) => i !== index);
    setMyListProducts(updatedMyList);
    localStorage.setItem('myListProducts', JSON.stringify(updatedMyList));
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('myListProducts', JSON.stringify(myListProducts));
  }, [products, myListProducts]);

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct, myListProducts, addToMyList, removeFromMyList }}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
