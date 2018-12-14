import React from 'react';

const BusinessIndexItem = props => (
    <div>
        <ul>
            <li>{props.business.id}</li>
            <li>{props.business.business_name}</li>
            <li>{props.business.address}</li>
        </ul>
    </div>
);

export default BusinessIndexItem;