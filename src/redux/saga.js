import { all, call} from 'redux-saga/effects';
import watchGetDataProductSaga from '../pages/Home/saga/home-saga';


export default function* rootSaga(){
    yield all([
        call(watchGetDataProductSaga)
    ])
}