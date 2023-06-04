import { useEffect, useState } from 'react';
// import { ProductData } from '../types/productData';
import { fetchProductsApi } from '../services/product-api.service';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useProducts = () => {
  // const [products, setProducts] = useState<Array<ProductData>>([]);
  const products = useSelector((state: RootState) => state.product.products)
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // const res = await fetchProductsApi();
      // setProducts(res.data);
      await fetchProductsApi();
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
