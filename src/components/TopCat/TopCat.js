import CatCard from '../catCard/catCard'
import useCats from '../../hooks/useCats'
import { useLocation } from 'react-router-dom'

const TopCat = () => {
  const [listCats] = useCats();

  const location = useLocation()

  console.log(location)
  
  const catData = location.catData

  console.log(catData)

  return (
    <div>
      <CatCard {...catData}/>
    </div>
  )

}

export default TopCat;
