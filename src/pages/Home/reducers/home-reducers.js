import * as types from '../actions/types';

const initialState = {
    loadingProduct : false,
    errorProduct : null,
    products : []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case types.START_GET_DATA_PRODUCTS:
            return{
                ...state,
                loadingProduct : action.loading
            }
        case types.END_GET_DATA_PRODUCTS:
            return{
                ...state,
                loadingProduct: action.loading
            }
        case types.GET_DATA_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: action.products,
                errorProduct: null
            }
        case types.GET_DATA_PRODUCTS_FAIL:
            return{
                ...state,
                product: [],
                errorProduct: action.error,
            }
        default:
            return state;
    }
}
export default productReducer;