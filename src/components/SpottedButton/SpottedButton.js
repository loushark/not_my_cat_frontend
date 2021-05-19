import React, { useState, useEffect } from 'react';
import { AuthContext } from "../../App";
import axios from 'axios';
import Cat from '../catCard/catCard.js'


const SpottedButton = ( { timesSpotted, catName } ) => {

  const onClickHandler = () => {
    timesSpotted += 1
    axios.put(`http://localhost:8082/api/cats/${catName}`, {timesSpotted: timesSpotted})
    .then(response => {
      if (response.status === 200) {
        window.location.reload();
      }
    })
    .catch(error => {
      console.log(error)
    })
    }

  return (
    <>
    <p> Spotted {timesSpotted} times</p>
    <button onClick={() => onClickHandler() } className='button'>Spotted!</button>
    </>
  );
};

export default SpottedButton;
