import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import deletecat from '../../svg/deletecatred_1.svg'

const DeleteButton = ( { catName } ) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false)

  const onClickHandler = () => {
    axios.delete(`http://localhost:8082/api/cats/${catName}`)
    .then(response => {
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
    <img src={deletecat} className='delete-button' onClick={() => {if(window.confirm('Are you sure you want to delete this cat?')) onClickHandler() }} alt='Delete Cat' />
    </>
  )
}


const PlayGameButton = ( catData ) => {

  return (
    <>
      <Link to={{pathname:'/top-cat', catData:{...catData}}}  className='button'>Play Top Cat!</Link>
    </>
  )
}

export { DeleteButton, PlayGameButton };
