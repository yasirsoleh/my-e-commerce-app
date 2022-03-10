import {call, put} from "redux-saga/effects"
import { setProducts } from './../ducks/Products'
import ApiService from '../../services/ApiService'

export function* handleGetProducts(action) {
  try {
    const response = yield call(ApiService.get, 'https://fakestoreapi.com'+'/products')
    const {data} = response
    yield put(setProducts(data))
  } catch (error) {
    console.log(error)
  }
}