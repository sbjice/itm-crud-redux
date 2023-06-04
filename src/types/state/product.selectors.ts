import { RootState } from '../../store/store';
import { ProductState } from './productState';

const selectProductState: (state: RootState) => ProductState = (state: RootState) =>
state.product;

export const selectProducts = (state: RootState) => selectProductState(state).products;