import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import SearchBar from '../search/search_bar';
import GreetingContainer from '../greeting/greeting_container';
import Greeting from '../greeting/greeting';

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        let businesses = this.props.businesses.map(business => {
            return (
                <BusinessIndexItem key={business.id} business={business} />
            )
        });

        return (
            <div>
                <header className="main-header">
                    <div className="business-main-header">
                        <div className="business-header-arrange">
                            <div className="business-header-logo">
                                <Link to={'/'}>Bulrp</Link>
                            </div>

                            <div className="business-header-search">
                                <SearchBar />
                            </div>

                            <div className="greeting-buttons">
                                <GreetingContainer />
                            </div>
                        </div>

                    
                        
                    </div>
                </header>
            </div>
        );
    }
}

export default BusinessIndex;

