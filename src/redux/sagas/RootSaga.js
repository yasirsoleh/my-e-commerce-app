import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../ducks/Products";
import { handleGetProducts } from "./Products";

export function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS, handleGetProducts)
}