import React from 'react';


const CreateCatCard = () => {
  return (

  <div>
    <h3>Add a cat!</h3>

    <form className="newcat-form">
      <input type="text" placeholder="Name of Cat" />
      <br />
      <br />
      <input type="text" placeholder="Attribute 1" />
      <br />
      <br />
      <input type="text" placeholder="Attribute 2" />
      <br />
      <br />
      <input type="text" placeholder="Attribute 3" />
      <br />
      <br />
      <input type="submit" className="button"/>
    </form>
  </div>
  );
};

export default CreateCatCard;
