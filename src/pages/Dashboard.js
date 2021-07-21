import { UserContext } from '../context/UserContext';
import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

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

    user && getUserInfo();

    // return () => {};
  }, []);

  return (
    <div className="dashboard__container">
      <h1 className="dashboard__title">Dashboard</h1>
      <div className="col-50">
        {user ? (
          <table>
            <tr>
              <td>First Name:</td>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>{user.role}</td>
            </tr>
            <tr>
              <td>Member since:</td>
              <td>{user.createdAt}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>Cambiar Password</td>
            </tr>
          </table>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
