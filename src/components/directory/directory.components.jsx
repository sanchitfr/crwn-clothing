import React from 'react';
import MenuItem from '../menu-item/menuItem.components';
import './directory.styles.scss';

import { sectionsSelector } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps}/>   
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections : sectionsSelector
})

export default connect(mapStateToProps)(Directory);