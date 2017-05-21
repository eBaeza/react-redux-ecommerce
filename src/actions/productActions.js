import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SAVE_PRODUCT_INIT,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILURE,
} from './types'
import API from '../api'

// Actions Creators
export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  }
}

export function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  }
}

export function fetchProductSuccess(product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  }
}

export function fetchProductFailure(error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  }
}

export function saveProductSuccess() {
  return {
    type: SAVE_PRODUCT_SUCCESS,
  }
}

export function saveProductFailure(error) {
  return {
    type: SAVE_PRODUCT_FAILURE,
    payload: error,
  }
}

// Actions Creators (Async)
export function fetchProducts() {
  return async (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS_INIT,
    })

    try {
      const data = await API.products.getAll()
      return dispatch(fetchProductsSuccess(data.products))
    } catch (error) {
      return dispatch(fetchProductFailure(error))
    }
  }
}

export function fetchProduct(id) {
  return async (dispatch) => {
    dispatch({
      type: FETCH_PRODUCT_INIT,
    })

    try {
      const data = await API.products.getSingle(id)
      return dispatch(fetchProductSuccess(data.product))
    } catch (error) {
      return dispatch(fetchProductFailure(error))
    }
  }
}

export function saveProduct(item) {
  return async (dispatch) => {
    dispatch({
      type: SAVE_PRODUCT_INIT,
    })

    try {
      await API.products.save(item)
      return dispatch(saveProductSuccess())
    } catch (error) {
      return dispatch(saveProductFailure(error))
    }
  }
}
