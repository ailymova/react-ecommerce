import { UserContext } from '../context/UserContext';
import { useContext, useEffect } from 'react';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const URL = 'https://ecomerce-master.herokuapp.com/api/v1/user/me';
    const getUserInfo = async () => {
      const resp = await fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      });
      const info = await resp.json();
      setUser(prevState => ({
        ...prevState,
        ...info.user,
      }));
      //console.log(user);
    };
    getUserInfo();

    return () => {};
  });

  return <div>{user.first_name}</div>;
};

export default Dashboard;
