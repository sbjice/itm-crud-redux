import { memo } from 'react';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import styles from './style.module.css';
import { ProductData } from '../types/productData';

interface ProductCreationFromProps {
  onSubmit: (product: Partial<ProductData>) => void;
}

export const ProductCreationFrom = memo(({onSubmit}: ProductCreationFromProps) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
    };
    const title = form.title.value;
    const description = form.description.value;
    if (title !== '') {
      form.title.value = '';
      form.description.value = '';
    }
    onSubmit({title, description});
  }

  return (
    <form onSubmit={submitHandler} className={styles.productForm}>
      <Input id='title'/>
      <Input id='description'/>
      <Button
        type='submit'
        text='Create'/>
    </form>
  )
})