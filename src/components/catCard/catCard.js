import React from 'react';
import SpottedButton from '../SpottedButton/SpottedButton.js'
import '../../App.css';
import crown1 from '../../svg/crown1outline.svg'
import crown2 from '../../svg/crown2outline.svg'
import crown3 from '../../svg/crown3outline.svg'
import spareImg from '../../svg/cat1.svg'
import { AuthContext } from '../../App'
import { DeleteButton, PlayGameButton } from '../catCardButtons/catCardButtons.js'
import { ReactComponent as PawPrint } from '../../svg/paw.svg'

const Cat =  ( { catName, user_id, cattitude, floof, chonk, image, wins, timesSpotted } ) => {
  const { state } = React.useContext(AuthContext)

  const catData = {
    catName: catName,
    user_id: user_id,
    cattitude: cattitude,
    floof: floof,
    chonk: chonk,
    image: image,
    timesSpotted: timesSpotted,
    wins: wins
  }

  if(!image) {
    image = spareImg
  }

  const crowns = () => {
    if (wins > 10 && wins < 20) {
      return crown1
    } else if (wins > 20 && wins < 30) {
      return crown2
    } else if (wins > 30) {
      return crown3
    }
  }

  return (
    <div className="Cat-id grow">
      {wins > 10 ? <img className='Cat-crown' src={crowns()} alt='crown'/> : null}
      <div className="Cat-wins">
        <p>WINS</p>
        <p>{wins}</p>
      </div>
      <header className="Cat-header">
        <h1 className="Cat-nametitle">SPOTTED BY: </h1>
        <h1 className="Cat-username">{user_id}</h1>
      </header>
      <div className="Cat-image-box">
         <img src={image} className="Cat-image" alt="cat"/>
      </div>
      <h2 className="Cat-name"><PawPrint className="paw-print" />{catName}</h2>
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
        {state.user === user_id ? <><DeleteButton catName={catName} /><PlayGameButton {...catData}/></> : null }
        <SpottedButton timesSpotted={timesSpotted} wins={wins} catName={catName} />
      </div>
    </div>
  )
}
export default Cat;
