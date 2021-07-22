import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { fetchURL } from '../components/utilities/FetchUtils';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    user &&
      fetchURL('https://ecomerce-master.herokuapp.com/api/v1/user/me', {
        method: 'GET',
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      }).then(data => {
        setUser(prevState => ({
          ...prevState,
          ...data.user,
        }));
      });
  });

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
              <td>{new Date(user.createdAt).toLocaleString('es-MX')}</td>
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
