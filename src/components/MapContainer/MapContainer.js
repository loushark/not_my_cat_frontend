import '../../App.css';
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useCats from '../../hooks/use-cats';
import CatMapList from '../catMapList/catMapList.js'
import Cat from '../catCard/catCard.js'
import logo from '../../cat.svg';
require ('dotenv/config');


const MapContainer = () => {
  const [cats] = useCats();
  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState();

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };

  const onSelect = cat => {
    setSelected(cat);
  }

  const mapStyles = {
    height: "80vh",
    width: "80%",
    margin: 'auto'};

  const defaultCenter = {
    lat:51.514401, lng: -0.105196
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBwYbpWJFVS10cEqo1lh_qFRm79dMq0_a0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={currentPosition}
      >
      {cats.map(cat => {
        return (
          <div className='marker'>
          <Marker
            icon={logo}
            key={cat._id}
            position={cat.position}
            onClick={() => onSelect(cat)}
          />
          </div>
        )
      })}
      {selected.position && (<InfoWindow
        position={selected.position}
        clickable={true}
        onCloseClick={() => setSelected({})}
      >

      <Cat className="MapCat" key={`cat-${selected._id}`} {...selected}/>

      </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;
