import * as types from './types';

export const getDataProducts = () => ({
    type : types.GET_DATA_PRODUCTS
});

export const startGetDataProducts = (loading) => ({
    type : types.START_GET_DATA_PRODUCTS,
    loading
});

export const endGetDataProducts = (loading) =>  ({
    type: types.END_GET_DATA_PRODUCTS,
    loading
})

export const getDataProductsSuccess = (products) => ({
    type: types.GET_DATA_PRODUCTS_SUCCESS,
    products
})

export const getDataProductsFail = (error) => ({
    type: types.GET_DATA_PRODUCTS_FAIL,
    error
})