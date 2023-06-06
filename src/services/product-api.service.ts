import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { setProductsAction } from '../store/product/product.slice';
import { store } from '../store/store';
import { ProductData } from '../types/productData';

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