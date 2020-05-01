import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { collectionIsFetchingSelector, isCollectionsLoadedSelector } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/WithSpinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount(){
        const  { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
    render(){
        const { match, isCollectionsLoaded, collectionIsFetching } = this.props;
        return (
            <div className='shop-page'>    
                <Route exact path={match.path} render={ props => <CollectionsOverviewWithSpinner isLoading={collectionIsFetching} {...props}/>}/>
                <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>  
            </div>
        )
    } 
}

const mapStateToProps = createStructuredSelector({
    collectionIsFetching : collectionIsFetchingSelector,
    isCollectionsLoaded : isCollectionsLoadedSelector
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

