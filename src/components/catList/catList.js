import React from 'react';
import Cat from '../catCard/catCard.js'
import useCats from '../../hooks/use-cats'
import '../../App.css';
import { AuthContext } from "../../App";

const CatList = (state) => {
  const [cats] = useCats();
  const maxCats = 3;
  const threeCats = cats.slice(Math.max(cats.length - maxCats, 0));

  return (
    <div className="cat-list">
      { !state.isAuthenticated ?
        threeCats.map((cat)=> (
          <Cat key={`cat-${cat.id}`} {...cat} />
        ))
        :
          cats.map((cat)=> (
          <Cat key={`cat-${cat.id}`} {...cat} />
          ))
        }
      </div>
  );
};

export default CatList;
