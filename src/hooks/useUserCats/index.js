import { useEffect, useState } from 'react';

const useUserCats = ( user ) => {
  const [userCats, setUserCats] = useState([]);

  console.log(user)

  const fetchUserCats = async () => {
    const res = await fetch(`http://localhost:8082/api/cats/${user}`, {
      method: 'GET',
    });
    const json = await res.json();

    setUserCats(json);
    
  };

  useEffect(() => {
    if (user) {
      fetchUserCats()
    }
  }, [user]);

  return [userCats];
}

export default useUserCats;
