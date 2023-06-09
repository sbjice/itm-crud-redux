import { configureStore } from '@reduxjs/toolkit';
import productReducer  from './product/product.slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import productListContainerReducer from './common/common.slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    productListContainer: productListContainerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;