import { memo } from 'react';
import { ProductData } from '../types/productData';
import styles from './style.module.css';

interface ProductCardProps extends ProductData {};

export const ProductCard = memo(({title, image, price, description}: ProductCardProps) => {
  return (
    <div className={styles.productData}>
      <img src={image} alt={image} className={styles.productData__image}/>
      <div className={styles.productData__texts}>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
      <p className={styles.productData__price}>{`${price}$`}</p>
  
    </div>
  )
})