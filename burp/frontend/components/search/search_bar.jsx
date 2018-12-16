import React from 'react';

const SearchBar = props => (
    <div className="header-search">
        <form action="get" action="/" className="header-search-form">
            <div className="header-search-elements">

                <div className="search-left">
                    <label htmlFor="find-desc" className="search-label">
                        <div className="search-left-inner">
                            <span className="search-desc search-start">Find</span>
                            <span className="search-input search-find">
                                <input type="text" method="get" action="/" placeholder={props.placeholder} />
                            </span>
                        </div>
                    </label>
                </div>

                <div className="search-right header-search-elements">
                    <label htmlFor="near-desc">
                        <div className="search-right-inner">
                            <span className="search-desc search-mid">Near</span>
                            <span className="search-input search-near">
                                <input type="text" method="get" action="/" defaultValue="San Francisco, CA" />
                            </span>
                        </div>
                    </label>

                    <div className="search-submit search-end">
                        <button type="submit" value="Submit"><i className="material-icons">search</i></button>
                    </div>
                </div>
            </div>
        </form>
    </div>  
);

export default SearchBar;