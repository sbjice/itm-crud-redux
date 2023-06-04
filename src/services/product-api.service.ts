import axios, { AxiosResponse } from 'axios'
import { ProductData } from '../types/productData'
import { PRODUCTS_URL } from '../constants/api.constants'

export const fetchProductsApi = (): Promise<AxiosResponse<ProductData[]>> => {
  return axios<ProductData[]>({
    method: 'get',
    url: PRODUCTS_URL,
    responseType: 'json'
  })
}