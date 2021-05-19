import CatCard from '../catCard/catCard'
import useCats from '../../hooks/useCats'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const TopCat = () => {
  const [listCats] = useCats();
  const location = useLocation();
  const [catData, setCatData] = useState(location.catData ? location.catData : JSON.parse(localStorage.getItem("catInPlay")));

  let opponents = listCats.filter((cat) => cat.catName !== catData.catName)
  let opponent = opponents[Math.floor(Math.random() * opponents.length)]

  const storeCatData = () => {
    if(location.catData){
      setCatData(location.catData)
    }
  }

  useEffect(() => {
    storeCatData()
    localStorage.setItem("catInPlay", JSON.stringify(catData))
  }, [])

  return (
    <div className='topcat-box'>
      <div className='topcat-user'>
        <CatCard {...catData}/>
      </div>
      <div className='topcat-opponent'>
        <CatCard {...opponent}/>
      </div>
    </div>
  )
}

export default TopCat;
