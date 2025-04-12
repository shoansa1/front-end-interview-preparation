import React, { useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Reducer function
function productReducer(state, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_PRODUCTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'FETCH_PRODUCTS_START' });
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
      }
    };

    fetchProducts();
  }, []);

  const { products, loading, error } = state;

  return (
    <div>
      <h2>🛍️ Products</h2>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong> — ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerExample;
