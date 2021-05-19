import React from 'react';
import SpottedButton from '../SpottedButton/SpottedButton.js'
import '../../App.css';
import spareImg from '../../svg/cat1.svg'
import { AuthContext } from '../../App'
import DeleteButton from '../catCardButtons/catCardButtons.js'

const Cat =  ( { catName, user_id, cattitude, floof, chonk, image, wins, timesSpotted } ) => {
  const { state } = React.useContext(AuthContext)

  if(!image) {
    image = spareImg
  }

  return (
    <div className="Cat-id grow">
      <div className="Cat-wins">
      <img className='Cat-crown' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Heraldic_eastern_crown.svg/1200px-Heraldic_eastern_crown.svg.png"/>
        <p>Wins</p>
        <p>{wins}</p>
      </div>
      <header className="Cat-header">
        <h1 className="Cat-nametitle">SPOTTED BY: </h1>
        <h1 className="Cat-username">{user_id}</h1>
      </header>
      <div className="Cat-image-box">
         <img src={image} className="Cat-image" alt="cat"/>
      </div>
      <h2 className="Cat-name">🐾 {catName}</h2>
      <div className="Cat-attributes">
        <table className="Cat-table">
          <tbody>
          <tr>
            <th>CATTITUDE</th>
            <td>{cattitude}</td>
          </tr>
          <tr>
            <th>FLOOFINESS</th>
            <td>{floof}</td>
          </tr>
          <tr>
            <th>CHONK</th>
            <td>{chonk}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className='Cat-footer'>
      {/* <PlayGameButton /> */}
      {state.user === user_id ? <><DeleteButton catName={catName} /></> : null }
      <SpottedButton timesSpotted={timesSpotted} />
      </div>
    </div>
  )
}
export default Cat;
