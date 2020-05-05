import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { collectionIsFetchingSelector } from '../../redux/shop/shop.selector';
import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/WithSpinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading : collectionIsFetchingSelector
});

//compose is used to chain multiple higher order containers, it evaluated=s from right to left
// so this eventually turns out as connect(mapStateToProps)(WithSpinner(CollectionsOverview))
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;