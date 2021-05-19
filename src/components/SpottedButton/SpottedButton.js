import React from 'react';
import axios from 'axios';


const SpottedButton = ( { wins, timesSpotted, catName } ) => {

  const onClickHandler = () => {
    timesSpotted += 1
    axios.put(`http://localhost:8082/api/cats/${catName}`, {timesSpotted: timesSpotted, wins: wins})
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        window.location.reload();
      }
    })
    .catch(error => {console.log(error)})
  }

  return (
    <>
      {timesSpotted === 1 ? <p>Spotted {timesSpotted} time</p> : <p>Spotted {timesSpotted} times</p>}
      <button onClick={() => onClickHandler() } className='button'>Spotted!</button>
    </>
  );
};

export default SpottedButton;
