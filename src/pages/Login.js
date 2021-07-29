import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import { postJson as login } from '../components/utilities/FetchUtils';
import Button from '../components/Button';
import LoginImage from '../assets/login_img_wereOpen.jpg';

// TODO: Create an account link to Signup

const Login = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const URL = 'https://ecomerce-master.herokuapp.com/api/v1/login';

  const handleSubmit = event => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const data = {
      email,
      password,
    };

    login(URL, data).then(accessData => {
      if (accessData.status !== 'fail') {
        setUser(() => ({
          token: accessData.token,
          role: accessData.role,
        }));

        history.push('/dashboard');
      } else {
        event.target.elements.email.value = '';
        event.target.elements.password.value = '';

        alert(accessData.message);
      }
    });
  };

  return (
    <div className="form__container">
      <div className="col-50">
        <img
          className="form__image"
          src={LoginImage}
          alt="We're Open! Come in Sign"
        />
      </div>
      <div className="col-50 form__info">
        <h1 className="title">Welcome back!</h1>
        <form className="form__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form__input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <Button styleClass="btn--full">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
