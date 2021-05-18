import React from 'react';
import SpottedButton from '../SpottedButton/SpottedButton.js'
import '../../App.css';
import spareImg from '../../svg/cat2_1.svg'
import { AuthContext } from '../../App'
import DeleteButton from '../catCardButtons/catCardButtons.js'

const Cat =  ( { catName, user_id, cattitude, floof, chonk, image } ) => {
  const { state } = React.useContext(AuthContext)

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
          <tbody>
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
          </tbody>
        </table>
      </div>
      <div className='Cat-footer'>
      {/* <PlayGameButton /> */}
      {state.user === user_id ? <><DeleteButton catName={catName} /></> : null }
      <SpottedButton />
      </div>
    </div>
  )
}
export default Cat;
