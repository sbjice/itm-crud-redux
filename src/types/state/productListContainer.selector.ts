import { RootState } from '../../store/store';

const selectProductListLoadingState: (state: RootState) => boolean = (state: RootState) =>
state.productListContainer.loading;

const selectProductListErrorState: (state: RootState) => string = (state: RootState) =>
state.productListContainer.error;

export const selectProductListLoading = (state: RootState) => selectProductListLoadingState(state);

export const selectProductListError = (state: RootState) => selectProductListErrorState(state);
