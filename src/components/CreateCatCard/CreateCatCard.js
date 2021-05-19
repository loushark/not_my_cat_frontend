import React, { useState, useEffect } from 'react';
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
    chonk: 0,
    image: "",
    location: {
      lng: 0,
      lat: 0
    },
    timesSpotted: 1,
    wins: 0
  })

  const [invalid, setInvalid] = useState(false)
  const [cattributes, setCattributes] = useState(true)

  const onChange = (element) => {
    if (element.target.id === "file") {
      let file = element.target.files[0];

      getBase64(file)
      .then((result) => {
        setPostData((prevState) => ({...prevState, image: result}))
      })
    }
    else {
    setPostData((prevState) => ({...prevState, [element.target.name]: element.target.value }))
    }
  }


  const getLocation = (options) => {
    return new Promise((position, error) => {
      navigator.geolocation.getCurrentPosition(position, error, options)
    })
  }

  useEffect(() => {
    getLocation({timeout:10000})
    .then((position) => {
      setPostData((prevState) => ({...prevState, position: {lat: position.coords.latitude, lng: position.coords.longitude} }))
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let base64image
      let reader = new FileReader();
      reader.readAsDataURL(file)

      reader.onload = () => {
        base64image = reader.result
        resolve(base64image)
      }
    })
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
        props.history.push('/')
        window.location.reload();
      }
    })
    .catch(error => {
      setInvalid(true)
      console.log(error)
    })
  }

  return (
  <div className="form cat-list-row">
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
      <input type="file" name="image" id="file" accept=".jpeg, .png, .jpg"
      onChange={element => onChange(element)} />
      <input type="submit" className="button"/>
    </form>
  </div>
  );
};

export default CreateCatCard;
