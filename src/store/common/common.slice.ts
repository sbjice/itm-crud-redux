import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductListContainerState } from '../../types/state/productListContainerState';

const initialState: ProductListContainerState = {
  loading: false,
  error: '',
}

export const productListContainerSlice = createSlice({
  name: 'productListContainer',
  initialState,
  reducers: {
    setProductListContainerLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProductListContainerErrorAction: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProductListContainerLoadingAction, setProductListContainerErrorAction } = productListContainerSlice.actions;

export default productListContainerSlice.reducer;