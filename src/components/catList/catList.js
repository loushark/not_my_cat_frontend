import React from 'react';
import Cat from '../catCard/catCard.js'
import useCats from '../../hooks/use-cats'
import '../../App.css';
import { AuthContext } from "../../App";

const CatList = () => {
  const [cats] = useCats();
  const maxCats = 23;
  const threeCats = cats.slice(Math.max(cats.length - maxCats, 0));

  return (
    <AuthContext.Provider
      value={{
      state,
      dispatch
      }}>

      { !state.isAuthenticated ?
        <div className="cat-list">
        {threeCats.map((cat)=> (
        <Cat key={`cat-${cat.id}`} {...cat} />
        ))}
        </div>
        :
        <div className="cat-list">
        {cats.map((cat)=> (
        <Cat key={`cat-${cat.id}`} {...cat} />
        ))}
        </div>
      }

    </AuthContext.Provider>
  );
};

export default CatList;
