import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useCats from '../../hooks/useCats';
import Cat from '../catCard/catCard.js'
import logo from '../../svg/catchin.svg';

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
      googleMapsApiKey="AIzaSyAxNJvn7AK8Ruz3Z091vDoASnrrY-R7NgE">
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
              key={`marker-${cat._id}`}
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
        <Cat className="MapCat" 
          key={`map-${selected._id}`} 
          {...selected}/>
      </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;
