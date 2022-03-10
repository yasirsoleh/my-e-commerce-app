import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./Sagas/rootSaga";
import productsReducer from "./Ducks/Products"

const reducer = combineReducers({
  products: productsReducer,
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store