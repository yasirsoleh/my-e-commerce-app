import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../Ducks/Products";
import { handleGetProducts } from "./Handlers/Products";

export function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS, handleGetProducts)
}