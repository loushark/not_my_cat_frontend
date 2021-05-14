import React, { useState } from 'react';
import { AuthContext } from "../../App";
import axios from 'axios';
import Cat from '../catCard/catCard.js'

const CreateCatCard = (props) => {

  const { state } = React.useContext(AuthContext);
  const [postData, setPostData] = useState({
    catName: "",
    user_id: state.user,
    cattitude: 0,
    floof: 0,
    chonk: 0
  })

  const [invalid, setInvalid] = useState(false)
  const [cattributes, setCattributes] = useState(true)

  const onChange = (element) => {
    setPostData((prevState) => ({...prevState, [element.target.name]: element.target.value }))
  }



  const createCat = (element) => {
    element.preventDefault()

    const { cattitude, floof, chonk } = postData
    if (parseFloat(cattitude) + parseFloat(floof) + parseFloat(chonk) > 20) {
        return setCattributes(false)
      } else {
        setCattributes(true)
      }

    axios.post('http://127.0.0.1:8082/api/cats', { postData, accessToken: state.accessToken })
    .then(response => {
      if (response.status === 201) {
        console.log(response)   
        props.history.push('/')
      }
    })
    .catch(error => {
      setInvalid(true)
      console.log(error)
    })
  }

  return (

  <div className="form">
    <div className="form-left">
      <Cat {...postData}/>
    </div>
    <form className="newcat-form" onSubmit={element => createCat(element)}>
      <h3>Add a cat!</h3>
      {!cattributes && <strong>You have overspent on cattributes! 20 Max!</strong>}
      {invalid && <strong>You have missed a cattribute!</strong>}
      <input type="text" name="catName" placeholder="Name of Cat" 
        onChange={element => onChange(element)}
      />
      <input type="number" name="cattitude" placeholder="Cattitude" min="1" max="10"
        onChange={element => onChange(element)}
      />
      <input type="number" name="floof" placeholder="Floofiness" min="1" max="10"
        onChange={element => onChange(element)}
      />
      <input type="number" name="chonk" placeholder="Chonk" min="1" max="10"
        onChange={element => onChange(element)}
      />
      <input type="submit" className="button"/>
    </form>
  </div>
  );
};

export default CreateCatCard;
