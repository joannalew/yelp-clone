import React from 'react';
import BusinessIndexItem from './business_index_item';
import BusinessHeader from './business_header';


class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        let businesses = this.props.businesses.map((business, idx) => {
            return (
                <BusinessIndexItem key={business.id} business={business} idx={idx + 1}/>
            )
        });

        return (
            <div>
                <div className="main-header">
                    <BusinessHeader />

                    <div className="business-filter-bar">
                        <div className="business-filter-content">
                            <div className="business-filter-title">
                                <span className="query-title">Best Restaurants</span> in San Francisco, CA
                            </div>
                            <div className="business-filter-count">
                                <p>Showing 1-30 of 4400</p>
                            </div>
                        </div>
                    </div>

                    <div className="business-main-content">
                        <div className="business-main-arrange">
                            <div className="business-main-list">
                                <ul>
                                    { businesses } 
                                </ul>
                            </div>
                        
                            <div className="business-index-map-container">
                                <div className="business-index-map sticky">
                                    <div className="business-map-buttons">
                                        <button className="map-expand-btn"><i className="material-icons">chevron_left</i>Mo' Map</button>
                                        <button className="map-search-btn">Redo Search In Map</button>
                                    </div>
                                    <div className="business-map-google">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BusinessIndex;

