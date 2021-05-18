import React, { useEffect, useRef } from 'react';
import CatMap from '../catMap/catMap.js'
import useCats from '../../hooks/use-cats'
import '../../App.css';
import { AuthContext } from "../../App";
import { Map, Google, InfoWindow, Marker } from 'google-maps-react';

const CatMapList = (state) => {
  const [cats] =  useCats();
  let myLatLng
  let marker
  let google

  // const catArray = useCats().slice(Math.max(cats.length - maxCats, 0));
  // console.log(catArray)

  // const catArray = cats.slice(Math.max(cats.length - maxCats, 0));

  // useEffect( (catArray) => {
  //   if(!state.isAuthenticated) {
  //     maxCats.current = 3
  //   } else {
  //     maxCats.current = 10
  //   }
  // }, [state.isAuthenticated, cats]);

  return (
      cats.map((cat) => (
        myLatLng = new google.maps.LatLng(cat.latitude, cat.longitude),
        marker = new google.maps.Marker({
          position: myLatLng,
          title: cat.name,
        })
      ))

  );
};

export default CatMapList;
