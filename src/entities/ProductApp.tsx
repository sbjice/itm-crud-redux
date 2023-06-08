import { memo, useCallback, useState } from 'react'
import { CreateButton } from '../components/CreateButton/CreateButton'
import { ProductList } from './ProductList'
import { Modal } from '../components/Modal/Modal'

export const ProductApp = memo(() => {
  const [showModal, setShowModal] = useState(false);
  

  const openModal = useCallback(() => {
    setShowModal(true);
  },[]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  },[]);

  return (
    <div>
      <ProductList />
      <CreateButton onClick={openModal}/>
      <Modal 
        shown={showModal}
        onCLose={closeModal}/>
    </div>
  )
})