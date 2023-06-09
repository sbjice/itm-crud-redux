import { Fragment, useCallback, useState } from 'react';
import { CreateButton } from '../components/CreateButton/CreateButton';
import { Modal } from '../components/Modal/Modal';
import { ProductCreationFrom } from './ProductCreationForm';
import { ProductData } from '../types/productData';

export const ProductCreationContainer = () => {


  const [showModal, setShowModal] = useState(false);


  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleSumbit = useCallback((product: Partial<ProductData>) => {
    console.log(product);
    closeModal();
  },[closeModal])


  return (
    <Fragment>
      <CreateButton onClick={openModal} />
      <Modal
        shown={showModal}
        onCLose={closeModal}>
          <ProductCreationFrom onSubmit={handleSumbit}/>
        </Modal>
    </Fragment>
  )
}