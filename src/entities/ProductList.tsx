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
          ? products.map(product => {
            return <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              key={product.id}
            ></ProductCard>
          })
          : error)
      }

    </div>
  )
})