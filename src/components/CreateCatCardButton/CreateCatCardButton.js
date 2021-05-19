import React from 'react';
import { Link } from 'react-router-dom';

const CreateCatCardButton = () => {
  return (
    <>
    <Link to="/new-cat" className="button-nav">Add a Cat</Link>
    </>
  );
};

export default CreateCatCardButton;
