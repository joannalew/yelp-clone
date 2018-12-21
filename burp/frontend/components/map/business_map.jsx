import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: {lat: 37.798500, lng: -122.417303},
            zoom: 13,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            }
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        if (this.props.business) {
            console.log('single business');
        }
        else {
            this.MarkerManager.updateMarkers(this.props.businesses);
        }
    }

    componentDidUpdate() {
        if (this.props.business) {
            console.log('single business');
        }
        else {
            this.MarkerManager.updateMarkers(this.props.businesses);
        }
    }

    render() {
        return (
            <div id="map" ref={ map => this.mapNode = map}>
                Map
            </div>
        )
    }
}

export default BusinessMap;