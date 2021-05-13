import React from 'react';
import { Link } from 'react-router-dom';

const CreateCatCardButton = () => {
  return (
    <div>
    <Link to="/new-cat" className="NewCat-button">Add a Cat</Link>
    </div>
  );
};

export default CreateCatCardButton;
