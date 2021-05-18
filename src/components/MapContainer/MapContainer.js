// // import './App.css';
// import React, { useState } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import useCats from '../../hooks/use-cats';
// import CatMapList from '../catMapList/catMapList.js'
// require ('dotenv/config');
//
// const mapStyles = {
//   height: '80%',
//   width: '80%',
//   margin: 'auto'
// };
// // const [cats] =  useCats();
//
// const MapContainer = () => {
//   const [cats] =  useCats();
//   const [mapState, setMapState] = useState({
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   });
//
//   // state = {
//   //   showingInfoWindow: false,
//   //   activeMarker: {},
//   //   selectedPlace: {}
//   // }
//
//   const onMarkerClick = (props, marker, e) =>
//   setMapState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   })
//
//   const onClose = (props) => {
//     if(mapState.showingInfoWindow) {
//       setMapState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };
//
//   // render() {
//     return (
//       <Map
//         // google={google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 51.52542,
//             lng: -0.07055
//           }
//         }
//       >
//       {cats.map((cat) => (
//         <Marker
//           lat={cat.latitude}
//           lng={cat.longitude}
//           onClick={onMarkerClick()}
//           name={cat._id}
//         />
//       ))}
//       </Map>
//       //   var myLatLng = new google.map.LatLng(cat.latitude, cat.longitude)
//       //   new google.maps.Marker({
//       //     position: myLatLng,
//       //     map,
//       //     title: cat.name,
//       //   })
//       // ))}
//           // <Marker
//           //   onClick={this.onMarkerClick}
//           //   name={'cat'}
//           // />
//           // <InfoWindow
//           //   marker={this.state.activeMarker}
//           //   visible={this.state.showingInfoWindow}
//           //   onClose={this.onClose}
//           // >
//           //   <div>
//           //     <h4>{this.state.selectedPlace.name}</h4>
//           //   </div>
//           // </InfoWindow>
//     );
//   // }
// }
//
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCmCWzBckFdaNiS2aTm8PnbVqUyIFVChrY'
// })(MapContainer())
