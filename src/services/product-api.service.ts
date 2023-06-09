import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { setProductsAction, setProductAddAction } from '../store/product/product.slice';
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
  await axios.get<ProductData[]>(PRODUCTS_URL)
    .then(res => {
      store.dispatch(setProductsAction(res.data))
    })
}

export const createProductApi = async (product: Partial<ProductData>) => {
  await axios.post(PRODUCTS_URL, {
      ...product,
      price: 13.5,
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
    .then(res => {
      if(res.status === 200) {
        console.log(res);
        store.dispatch(setProductAddAction(res.data));
      } else return;
      // console.log(res);
      // store.dispatch(setProductsAction(res.data));
    })
}