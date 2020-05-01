import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsArrayToObject } from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/WithSpinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading : true
    }

    unsubscripeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsArrayToObject(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading : false})
        })
    }
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>    
                <Route exact path={match.path} render={ props => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionsPageWithSpinner isLoading={loading} {...props}/>}/>  
            </div>
        )
    } 
}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null,mapDispatchToProps)(ShopPage);

