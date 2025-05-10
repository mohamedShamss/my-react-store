
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a context for the product data
// This context will be used to provide the product data to the components
export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getAllProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }; // getAllProducts

        const getCategories = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

    const getProductsByCategory = async (category) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

      useEffect(() => {
        getAllProducts();
        getCategories();
      }, []);
      return (
    <ProductContext.Provider value={{ products ,categories, getProductsByCategory, getAllProducts }}>
      {children}
    </ProductContext.Provider>
  );

} // ProductProvider