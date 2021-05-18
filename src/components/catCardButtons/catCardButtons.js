import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteButton = ( { catName } ) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  console.log(catName)

  const onClickHandler = () => {
    axios.delete(`http://localhost:8082/api/cats/${catName}`)
    .then(response => {
      if (response === 200) {
        setDeleteSuccess(true)
        console.log(response)
      }
    })
    .catch(error => {
      console.log(error)
    })

    // props.history.push('/profile')
  }

  useEffect(() => {
    if(deleteSuccess === true) {
      console.log('deleted')
    }
  }, [deleteSuccess])
   
  return (
    <>
    <button className='button' onClick={() => {if(window.confirm('Are you sure you want to delete this cat?')) onClickHandler() }} >Delete Cat</button>
    </>
  )}

export default DeleteButton;
