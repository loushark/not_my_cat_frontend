import React from 'react';
import { Link } from 'react-router-dom';

const CreateCatCardButton = () => {
  return (
    <>
    <Link to="/new-cat" className="button">Add a Cat</Link>
    </>
  );
};

export default CreateCatCardButton;
