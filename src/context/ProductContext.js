
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a context for the product data
// This context will be used to provide the product data to the components
export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }; // getAllProducts

      useEffect(() => {
        getAllProducts();
      }, []);
      return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );

} // ProductProvider