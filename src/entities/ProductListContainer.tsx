import { memo } from 'react'
import { ProductCreationContainer } from './ProductCreationContainer'
import { ProductList } from './ProductList'

export const ProductListContainer = memo(() => {

  return (
    <div>
      <ProductList />
      <ProductCreationContainer/>
    </div>
  )
})