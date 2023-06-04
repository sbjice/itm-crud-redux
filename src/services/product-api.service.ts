import axios, { AxiosResponse } from 'axios';
import { ProductData } from '../types/productData';
import { PRODUCTS_URL } from '../constants/api.constants';
import { store } from '../store/store';
import { setProductsAction } from '../store/product/product.slice';

// export const fetchProductsApi = (): Promise<AxiosResponse<ProductData[]>> => {
//   return axios<ProductData[]>({
//     method: 'get',
//     url: PRODUCTS_URL,
//     responseType: 'json'
//   })
// }

export const fetchProductsApi = async () => {
  await axios<ProductData[]>({
    method: 'get',
    url: PRODUCTS_URL,
    responseType: 'json'
  })
  .then(res => {
    store.dispatch(setProductsAction(res.data))
  })
}