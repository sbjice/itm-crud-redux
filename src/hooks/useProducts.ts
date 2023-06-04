import { useEffect, useState } from 'react';
import { ProductData } from '../types/productData';
import { fetchProductsApi } from '../services/product-api.service';

export const useProducts = () => {
  const [products, setProducts] = useState<Array<ProductData>>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const req = await fetchProductsApi();
      setProducts(req.data);
    } catch(e) {
      setError(`Something went wrong! Error: ${e}`);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return { products, loading, error };
}