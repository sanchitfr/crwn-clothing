import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../collection-items/collection-item.component';
import './collectionPreview.style.scss';

const CollectionPreview = ({ items, title }) => (
    <div className='collection-preview'>
        {/* <h1 className='title'>{title.toUpperCase()}</h1> */}
        <Link className = 'titleLink' to={`shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
        <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map(item => (
                <CollectionItem key={item.id} item={item} />))}
        </div>
    </div>
);

export default CollectionPreview;