import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {query: '', location: 'San Francisco, CA'};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchBusinesses(this.state)
            .then(() => this.props.history.push('/businesses/search'));
    }

    render() {
        console.log(this.state);
        return (
            <div className="header-search">
                <form onSubmit={ this.handleSubmit }>
                    <div className="header-search-elements">
                        <div className="search-left">
                            <label htmlFor="find-desc" className="search-label">
                                <div className="search-left-inner">
                                    <span className="search-desc search-start">Find</span>
                                    <span className="search-input search-find">
                                        <input type="text" value={this.state.query} onChange={this.update('query')} placeholder={this.props.placeholder} />
                                    </span>
                                </div>
                            </label>
                        </div>

                        <div className="search-right header-search-elements">
                            <label htmlFor="near-desc">
                                <div className="search-right-inner">
                                    <span className="search-desc search-mid">Near</span>
                                    <span className="search-input search-near">
                                        <input type="text" value={this.state.location} onChange={this.update('location')}/>
                                    </span>
                                </div>
                            </label>

                            <div className="search-submit search-end">
                                <button type="submit"><i className="material-icons">search</i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>  
        )
    }
}

export default withRouter(SearchBar);