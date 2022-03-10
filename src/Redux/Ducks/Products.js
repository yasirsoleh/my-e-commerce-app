export const GET_PRODUCTS = "GET_PRODUCTS"
const SET_PRODUCTS = "SET_PRODUCTS"

export const getProducts = () => ({
  type: GET_PRODUCTS
})

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products: products
})

const initialState = {
  products: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const {products} = action
      return {...state, products}
    default:
      return state
  }
}