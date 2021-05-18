import React from 'react'
import { AuthContext } from '../../App'
import useUserCats from '../../hooks/useUserCats'
import CatList from '../../components/catList/catList'

const UserProfile = () => {
  const { state } = React.useContext(AuthContext)
  const [listUserCats] = useUserCats(state.user)

  return (
    <CatList list={listUserCats} />
  )
}

export default UserProfile;