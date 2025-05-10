import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    }; // getProduct
  
    useEffect(() => {
      getProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;
    return (
        <div className="card mb-3 p-3">
          <div className="row">
            <div className="col-md-4">
    <img src={product.image} alt={product.title} className="img-fluid" />
            </div>
    
            <div className="col-md-8">
              <h3>{product.title}</h3>
              <p className="text-muted">{product.category}</p>
              <p>{product.description}</p>
              <h4>${product.price}</h4>
            </div>
          </div>
        </div>
      );
    } // ProductDetails    
  