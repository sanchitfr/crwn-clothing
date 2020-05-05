import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionPage  from './collection.component';
import WithSpinner from '../../components/with-spinner/WithSpinner.component';
import { isCollectionsLoadedSelector } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !isCollectionsLoadedSelector(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionsPageContainer;