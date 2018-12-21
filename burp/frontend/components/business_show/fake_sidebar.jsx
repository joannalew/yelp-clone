import React from 'react';

const FakeSidebar = () => {
    return (
        <div className="fake-sidebar-container">
            <div className="sidebar-hours">
                <div className="sidebar-sub-title">
                    Hours
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-hours-item">
                        <div className="sidebar-hours-day">Mon</div>
                        <div className="sidebar-hours-times">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="sidebar-hours-item">
                        <div className="sidebar-hours-day">Tue</div>
                        <div className="sidebar-hours-times">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="sidebar-hours-item">
                        <div className="sidebar-hours-day">Wed</div>
                        <div className="sidebar-hours-times">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="sidebar-hours-item">
                        <div className="sidebar-hours-day">Thu</div>
                        <div className="sidebar-hours-times">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="sidebar-hours-item">
                        <div className="sidebar-hours-day">Fri</div>
                        <div className="sidebar-hours-times">11:00 am - 10:00 pm</div>
                        <div className="sidebar-hours-extra">Open</div>
                    </li>
                    <li className="sidebar-hours-item">
                        <div className="sidebar-hours-day">Sat</div>
                        <div className="sidebar-hours-times">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="sidebar-hours-item">
                        <div className="sidebar-hours-day">Sun</div>
                        <div className="sidebar-hours-times">11:00 am - 10:00 pm</div>
                    </li>
                </ul>
            </div>

            <div className="sidebar-business-info">
                <div className="sidebar-sub-title">
                    More business info
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Has Dairy-free Options</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Has Halal Options</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Has Gluten-free Options</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Liked by Vegetarians</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Takes Reservations</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Delivery</div>
                        <div className="sidebar-info-info">No</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Take-out</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Accepts Credit Cards</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Accepts Apple Pay</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Accepts Google Pay</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Accepts Cryptocurrency</div>
                        <div className="sidebar-info-info">No</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Good For</div>
                        <div className="sidebar-info-info">Lunch, Dinner</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Parking</div>
                        <div className="sidebar-info-info">Garage, Validated</div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default FakeSidebar;