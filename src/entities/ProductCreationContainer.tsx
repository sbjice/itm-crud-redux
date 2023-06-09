import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateButton } from '../components/CreateButton/CreateButton';
import { Modal } from '../components/Modal/Modal';
import { createProductApi } from '../services/product-api.service';
import { ProductData } from '../types/productData';
import { ProductCreationFrom } from './ProductCreationForm';

export const ProductCreationContainer = () => {

  // const productsLoading = useAppSelector((state: RootState) => state.productListContainer.loading);

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState('');


  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleSumbit = useCallback(async (product: Partial<ProductData>) => {
    console.log(product);
    setError('');
    if (product.title === '') {
      setError('title must be filled');
      return;
    }
    closeModal();
    try {
      setDataLoading(true);
      await createProductApi(product);
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
    } finally {
      setDataLoading(false);
    }

  }, [closeModal]);

  return (
    <div>
      <CreateButton onClick={openModal} />
      <Modal shown={showModal} onClose={closeModal}>
        <ProductCreationFrom onSubmit={handleSumbit} />
        {error !== '' ? <div>{error}</div> : null}
        {dataLoading ? <div>loading</div> : null}
      </Modal>
    </div>
  )
}