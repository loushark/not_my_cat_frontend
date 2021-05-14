import React, { useEffect } from 'react';
import Cat from '../catCard/catCard.js'
import useCats from '../../hooks/use-cats'
import '../../App.css';
import { AuthContext } from "../../App";

const CatList = (state) => {
  const [cats] = useCats();
  let maxCats;
  let threeCats;

  useEffect( () => {
    if(!state.isAuthenticated) {
      maxCats = 3
    } else {
      maxCats = 10
    }
    threeCats = cats.slice(Math.max(cats.length - maxCats, 0));
  }, [state.isAuthenticated]);


  console.log(state)
 console.log(cats);
  return (
    <div className="cat-list">
      { threeCats.map((cat)=> (
          <Cat key={`cat-${cat._id}`} {...cat} />
        ))}
      </div>
  );
};

export default CatList;
