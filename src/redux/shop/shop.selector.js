import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const shopCollectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
)
 
export const collectionSelectorForOverview = createSelector(
    [shopCollectionsSelector],
    collections => collections ? Object.keys(collections).map(key=> collections[key]) : []
)

export const collectionSelector = paramFromUrl => 
    createSelector(
        [shopCollectionsSelector],
        collections => collections ? collections[paramFromUrl] : null
    )
