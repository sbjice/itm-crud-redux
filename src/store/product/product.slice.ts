import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../../types/state/productState';
import { ProductData } from '../../types/productData';

const initialState: ProductState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<Array<ProductData>>) => {
      state.products = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = productsSlice.actions;

export default productsSlice.reducer;