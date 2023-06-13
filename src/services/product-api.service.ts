import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { setProductsAction, setProductAddAction } from '../store/product/product.slice';
import { store } from '../store/store';
import { ProductData } from '../types/productData';

export const fetchProductsApi = async () => {
  await axios.get<Array<ProductData>>(PRODUCTS_URL)
    .then(({data}) => {
      store.dispatch(setProductsAction(data));
    })
}

export const createProductApi = async (product: Partial<ProductData>) => {
  await axios.post(PRODUCTS_URL, {
      ...product,
      price: 13.5,
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    })
    .then(({data}) => {
      store.dispatch(setProductAddAction(data));
    })
}