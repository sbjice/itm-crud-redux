import { Fragment, useCallback, useState } from 'react';
import { CreateButton } from '../components/CreateButton/CreateButton';
import { Modal } from '../components/Modal/Modal';

export const ProductCreationContainer = () => {


  const [showModal, setShowModal] = useState(false);


  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);


  return (
    <Fragment>
      <CreateButton onClick={openModal} />
      <Modal
        shown={showModal}
        onCLose={closeModal} />
    </Fragment>
  )
}