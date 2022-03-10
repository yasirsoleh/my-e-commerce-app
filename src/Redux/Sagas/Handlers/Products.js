import {call, put} from "redux-saga/effects"
import { setProducts } from "../../Ducks/Products"
import { requestGetProducts } from "../Request/Products"

export function* handleGetProducts(action) {
  try {
    const response = yield call(requestGetProducts)
    const {data} = response
    yield put(setProducts(data))
  } catch (error) {
    console.log(error)
  }
}