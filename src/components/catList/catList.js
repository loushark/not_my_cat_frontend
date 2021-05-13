import React from 'react';
import Cat from '../catCard/catCard.js'
import useCats from '../../hooks/use-cats'
import '../../App.css';

const CatList = () => {
  console.log(useCats())
  const [cats] = useCats();

  return (
    <div className="cat-list">
    {cats.map((cat)=> (
      <Cat key={`cat-${cat.id}`} {...cat} />
      // need to refactor this iteration so it prints in the Cat function
    ))}
    </div>
  );
};

export default CatList;
