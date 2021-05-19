import React from 'react';
import Cat from '../catCard/catCard.js'
import '../../App.css';

const CatList = ( { list, state } ) => {
  return (
    <div className="cat-list">
      <div className="cat-list-row">
        { list.map ? 
          list.map((cat)=> (
            <Cat key={`cat-${cat._id}`} {...cat} />
          )) : <p>Whaa... what? No cats found! Better go find some!</p>
        }
      </div>
    </div>
  );
};

export default CatList;
