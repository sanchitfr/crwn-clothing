import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/collectionPreview.component';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionSelectorForOverview } from '../../redux/shop/shop.selector';


const CollectionsOverview = ({ collections }) => {
    console.log("From collections overview",collections)
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections : collectionSelectorForOverview
})

export default connect(mapStateToProps)(CollectionsOverview)