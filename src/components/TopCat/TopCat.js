import CatCard from '../catCard/catCard'
import useCats from '../../hooks/useCats'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TopCat = () => {
  const [listCats] = useCats();
  const location = useLocation();
  const [catData, setCatData] = useState(location.catData ? location.catData : JSON.parse(localStorage.getItem("catInPlay")));

  const opponents = listCats.filter((cat) => cat.catName !== catData.catName)
  const opponent = opponents[Math.floor(Math.random() * opponents.length)]

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
    console.log('user cat', catData[cattribute])
    console.log('opponent cat', opponent[cattribute])
    if(catData[cattribute] > opponent[cattribute]) {
      console.log('you win')
    } else if (catData[cattribute] === opponent[cattribute]) {
      console.log('it was a draw')
    } else {
      console.log('you lose')
    }
  }


  return (
    <div className='topcat-box'>
      <div className='topcat-user'>
        <CatCard {...catData}/>
      </div>
      <div className='topcat-buttons-box'>
        <h1>Cat fight!</h1>
        <button id='cattitude' onClick={element => compareCattribute(element.target.id)}>Cattitude</button>
        <button id='floof' onClick={element => compareCattribute(element.target.id)}>Floofiness</button>
        <button id='chonk' onClick={element => compareCattribute(element.target.id)}>Chonk</button>
      </div>
      <div className='topcat-opponent'>
        <CatCard {...opponent}/>
      </div>
    </div>
  )
}

export default TopCat;
