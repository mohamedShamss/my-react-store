import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
export default function ProductList() {
  const { products ,  categories, getProductsByCategory, getAllProducts } = useContext(ProductContext);
  return (
    <>
          <div className="mb-3">
        <button className="btn btn-outline-primary me-2" onClick={getAllProducts}>All</button>

        {categories.map(cat => (
          <button key={cat} className="btn btn-outline-secondary me-2" onClick={() => getProductsByCategory(cat)}>
            {cat}
          </button>
        ))}

      </div>

    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
     <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '250px', objectFit: 'contain' }} />

            <div className="card-body">
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
  <h5 className="card-title">{product.title}</h5>
</Link>

<p className="card-text text-truncate"> {product.description} </p>
    <p className="card-text fw-bold">${product.price}</p>
            </div> {/*  cart-body */}
          </div>
        </div> 
      ))}
    </div>
    </>
  );
}
