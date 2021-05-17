import './App.css';
import React { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
require ('dotenv/config');

const mapStyles = {
  height: '40%'',
  width: '40%'
};

export class MaContainer extends Component{
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  })

  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 51.52542,
            lng: -0.07055
          }
        }
      >
        <CurrentLocation
          centerAroundCurentLocation
          google={this.props.google}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'cat'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.sstate.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmCWzBckFdaNiS2aTm8PnbVqUyIFVChrY'
})(MapContainer)
