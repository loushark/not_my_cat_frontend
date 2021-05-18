import React from 'react';
import Cat from '../catCard/catCard.js'
import '../../App.css';

const CatList = ( { list } ) => {
  return (
    <div className="cat-list">
      <div className="cat-list-row">
        {list.map((cat)=> (
          <Cat key={`cat-${cat._id}`} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default CatList;
