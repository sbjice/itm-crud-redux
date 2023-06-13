import { memo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import styles from './style.module.css';

// interface ProductListProps {
//   data: Array<ProductData>
// };

export const ProductList = memo(() => {
  const { products, loading, error } = useProducts();

  return (
    <div className={styles.productList}>
      {loading 
        ? 'Data loading'
        : (error === '' 
          ? products.map((product) => {
            return <ProductCard
              {...product}
              key={product.id}
            ></ProductCard>
          })
          : error)
      }

    </div>
  )
})