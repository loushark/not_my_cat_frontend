import React from 'react';
import axios from 'axios';

const DeleteButton = ( { catName } ) => {

  const onClickHandler = () => {
    axios.delete(`http://localhost:8082/api/cats/${catName}`)
    .then(response => {
      if (response === 200) {
        console.log(response)
      }
    })
    .catch(error => {
      console.log(error)
    })

    // props.history.push('/profile')
  }
   
  return (
    <>
    <button className='button' onClick={onClickHandler}>Delete Cat</button>
    </>
  )}

export default DeleteButton;
