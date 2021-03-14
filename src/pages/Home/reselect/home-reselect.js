import {createSelector} from 'reselect';
 
const productSelector = state => state.product;

export const loadingProductSelector = createSelector(
    productSelector,
    item => item.loadingProduct

    );
export const featuredSelector = createSelector(
    productSelector,
    item => {
        if(item.hasOwnProperty('featured')){
            return item.featured;
        }
        return [];
    }
)
export const latestSelector = createSelector(
    productSelector,
    item => {
        if(item.hasOwnProperty('latest')){
            return item.latest;
        }
        return [];
    }
)
export const topSellingSelector = createSelector(
    productSelector,
    item => {
        if(item.hasOwnProperty('topSelling')){
            return item.topSelling;
        }
        return [];
    }
)
