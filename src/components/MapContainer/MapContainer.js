import '../../App.css';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useCats from '../../hooks/use-cats';
import CatMapList from '../catMapList/catMapList.js'
import Cat from '../catCard/catCard.js'
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
    lat:51.514401, lng: -0.105196
  }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCwHGfQTy_Eg2pSkOq-svnJCmB1f4fK54M'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
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

      <Cat className="MapCat" key={`cat-${selected._id}`} {...selected}/>

      </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;
