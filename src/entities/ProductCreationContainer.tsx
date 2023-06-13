import { useCallback, useState } from 'react';
import { CreateButton } from '../components/CreateButton/CreateButton';
import { Modal } from '../components/Modal/Modal';
import { createProductApi } from '../services/product-api.service';
import { ProductData } from '../types/productData';
import { ProductCreationFrom } from './ProductCreationForm';

export const ProductCreationContainer = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onSubmit = useCallback(async (product: Partial<ProductData>) => {
    setError('');
    if (product.title === '') {
      setError('title must be filled');
      return;
    }
    closeModal();
    try {
      setLoading(true);
      await createProductApi(product);
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
    } finally {
      setLoading(false);
    }

  }, [closeModal]);

  return (
    <div>
      <CreateButton onClick={openModal} />
      <Modal title="Create Product" shown={showModal} onClose={closeModal}>
        <ProductCreationFrom onSubmit={onSubmit} />
        {error !== '' ? <div>{error}</div> : null}
        {loading ? <div>loading</div> : null}
      </Modal>
    </div>
  )
}