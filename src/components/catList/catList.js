import React, { useEffect, useRef } from 'react';
import Cat from '../catCard/catCard.js'
import useCats from '../../hooks/use-cats'
import '../../App.css';
import { AuthContext } from "../../App";

const CatList = (state) => {
  const [cats] =  useCats();
 
  // const catArray = useCats().slice(Math.max(cats.length - maxCats, 0));
  // console.log(catArray)

  // const catArray = cats.slice(Math.max(cats.length - maxCats, 0));
  
  // useEffect( (catArray) => {
  //   if(!state.isAuthenticated) {
  //     maxCats.current = 3
  //   } else {
  //     maxCats.current = 10
  //   }
  // }, [state.isAuthenticated, cats]);

  return (
    <div className="cat-list">
      <div className="cat-list-row">
        {cats.map((cat)=> (
          <Cat key={`cat-${cat._id}`} {...cat}/>
        ))}
      </div>
    </div>
  );
};

export default CatList;
