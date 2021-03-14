import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as types from '../actions/types';
import * as api from '../../../api/product';

function* getDataProductSaga(){
    try{
        yield put(actions.startGetDataProducts(true));
        const data = yield put(api.getListDataProducts);
        if(data){
            yield put(actions.getDataProductsSuccess(data));
        }
        else{
            yield put(actions.getDataProductsFail({
                code: 404,
                message: 'Not found data',
            }))
        }
    }catch(err){
        yield put(actions.getDataProductsFail(err))
    }
}
export default function*  watchGetDataProductSaga(){
    yield takeEvery(types.GET_DATA_PRODUCTS, getDataProductSaga)
}