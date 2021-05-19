import CatCard from '../catCard/catCard'
import useCats from '../../hooks/useCats'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const TopCat = () => {
  const [listCats] = useCats();
  const location = useLocation();
  const [catData, setCatData] = useState(location.catData ? location.catData : JSON.parse(localStorage.getItem("catInPlay")));
  const [result, setResult] = useState('')
  const opponents = listCats.filter((cat) => cat.catName !== catData.catName)
  const opponent = useRef()

  const newOpponent = () => {
    return opponents[Math.floor(Math.random() * opponents.length)]
  }

  if (opponent.current === undefined) {
    opponent.current = newOpponent()
  }

  const storeCatData = () => {
    if(location.catData){
      setCatData(location.catData)
    }
  }

  useEffect(() => {
    storeCatData()
    localStorage.setItem("catInPlay", JSON.stringify(catData))
  }, [])

  const compareCattribute = (cattribute) => {
    if(catData[cattribute] > opponent.current[cattribute]) {
      setResult('Your cat won!')
      addWins(catData)
      catData.wins += 1
    } else if (catData[cattribute] === opponent.current[cattribute]) {
      setResult(`It's a draw!`)
    } else {
      setResult('Your cat lost!')
      addWins(opponent.current)
    }
  }

  const addWins = (winner) => {
    let winCount = winner.wins + 1

    axios.put(`http://localhost:8082/api/cats/${winner.catName}`, 
    {wins: winCount, timesSpotted: winner.timesSpotted })
    .catch(error => {console.log(error)})
  }

  const reset = () => {
    localStorage.setItem("catInPlay", JSON.stringify(catData))
    opponent.current = newOpponent()
    setResult('')
  }

  return (
    <div className='topcat-box'>
      <div className='topcat-user'>
        <CatCard {...catData}/>
      </div>
      <div className='topcat-buttons-box'>
        <h1>Cat fight!</h1>
        { result !== '' ? 
        <>
        <h1>{result}</h1>
        <button id='playAgain' onClick={() => reset()}>Play again?</button>
        </>
        : 
        <> 
        <button id='cattitude' onClick={element => compareCattribute(element.target.id)}>Cattitude</button>
        <button id='floof' onClick={element => compareCattribute(element.target.id)}>Floofiness</button>
        <button id='chonk' onClick={element => compareCattribute(element.target.id)}>Chonk</button> 
        </>
        }
      </div>
      <div className='topcat-opponent'>
        <CatCard {...opponent.current}/>
      </div>
    </div>
  )
}

export default TopCat;
