import {combineReducers} from 'redux';
import productReducer from '../pages/Home/reducers/home-reducers';

const rootReducer = combineReducers({
    product: productReducer
});
export default rootReducer;