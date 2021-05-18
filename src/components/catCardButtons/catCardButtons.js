import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App'
import axios from 'axios';

const DeleteButton = ({catName}) => {
  const { state } = React.useContext(AuthContext)

    axios.DELETE(`http://localhost:8082/api/cats/${catName}`)
    .then(response => {
      if (response === 200) {
        console.log(response)
      }
    })
    .catch(error => {
      console.log(error)
    })
    return (
      <>
      <button>Delete Cat</button>
      </>
    )}


export default DeleteButton;
