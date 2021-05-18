import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteButton = ( { catName } ) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false)

  const onClickHandler = () => {
    axios.delete(`http://localhost:8082/api/cats/${catName}`)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        setDeleteSuccess(true)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    if(deleteSuccess === true) {
      window.location.reload();
    }
  }, [deleteSuccess])
   
  return (
    <>
    <button className='button' onClick={() => {if(window.confirm('Are you sure you want to delete this cat?')) onClickHandler() }} >Delete Cat</button>
    </>
  )
}

export default DeleteButton;
