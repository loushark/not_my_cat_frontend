// import './App.css';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useCats from '../../hooks/use-cats';
import CatMapList from '../catMapList/catMapList.js'
require ('dotenv/config');

const MapContainer = () => {
  const [cats] = useCats();
  const [ selected, setSelected ] = useState({});

  const onSelect = cat => {
    setSelected(cat);
  }

  const mapStyles = {
    height: "80vh",
    width: "80%",
    margin: 'auto'};

  const defaultCenter = {
    lat:51.523490, lng: 0.076864
  }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCwHGfQTy_Eg2pSkOq-svnJCmB1f4fK54M'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
      {cats.map(cat => {
        return (
          <Marker
            key={cat._id}
            position={cat.position}
            onClick={() => onSelect(cat)}
          />
        )
      })}
      {selected.position && (<InfoWindow
        position={selected.position}
        clickable={true}
        onCloseClick={() => setSelected({})}
      >
        <p>{selected.catName}</p>
      </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;
