import React from 'react';
import SpottedButton from '../SpottedButton/SpottedButton.js'
import '../../App.css';
import spareImg from '../../svg/cat2_1.svg'

const Cat = ({ catName, user_id, cattitude, floof, chonk, image }) => {

  if(!image) {
    image = spareImg
  }

  return (
    <div className="Cat-id grow">
      <header className="Cat-header">
        <h1>Spotted By:</h1>
        <h1>{user_id}</h1>
      </header>
      <div className="Cat-image-box">
         <img src={image} className="Cat-image" alt="cat"/>
      </div>
      <h2 className="Cat-name">🐾 {catName}</h2>
      <div className="Cat-attributes">
        <table className="Cat-table">
          <tr>
            <th>Cattitude</th>
            <td>{cattitude}</td>
          </tr>
          <tr>
            <th>Floofiness</th>
            <td>{floof}</td>
          </tr>
          <tr>
            <th>Chonk</th>
            <td>{chonk}</td>
          </tr>
        </table>
      </div>
      <SpottedButton />
    </div>
  )
}
export default Cat;
