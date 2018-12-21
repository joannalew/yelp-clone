import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 13,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: this.props.zoom,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            gestureHandling: 'none'
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses);
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