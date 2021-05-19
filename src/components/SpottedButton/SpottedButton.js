import React, { useState, useEffect } from 'react';
import { AuthContext } from "../../App";
import axios from 'axios';
import Cat from '../catCard/catCard.js'


const SpottedButton = ( { timesSpotted } ) => {
  return (
    <>
    <p> Spotted {timesSpotted} times</p>
    <button onclick="" className='button'>Spotted!</button>
    </>
  );
};

export default SpottedButton;
