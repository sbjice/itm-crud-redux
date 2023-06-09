import { useEffect, useState } from 'react';
// import { ProductData } from '../types/productData';
import { fetchProductsApi } from '../services/product-api.service';
import { RootState, useAppSelector } from '../store/store';


export const useProducts = () => {
  const products = useAppSelector((state: RootState) => state.product.products);
  // const productsLoading = useAppSelector((state: RootState) => state.productListContainer.loading);
  // const productsLoadingError = useAppSelector((state: RootState) => state.productListContainer.error);
  // const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // dispatch(setProductListContainerLoadingAction(true));
      await fetchProductsApi();
    } catch(e) {
      setError(`Something went wrong! Error: ${e}`);
      // dispatch(setProductListContainerErrorAction(`Something went wrong! Error: ${e}`));
    } finally {
      setLoading(false);
      // dispatch(setProductListContainerLoadingAction(false));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return { products, loading, error };
  // return products;

}
