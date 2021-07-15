import Button from '../components/Button';
import LoginImage from '../assets/login_img_wereOpen.jpg';

const Login = () => {
  return (
    <div className="form__container">
      <div className="col-50">
        <img
          className="login__image"
          src={LoginImage}
          alt="We're Open! Come in Sign"
        />
      </div>
      <div className="col-50 login__info">
        <h1 className="title">Welcome back!</h1>
        <form className="login__form">
          <div className="login__input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="login__input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <Button styleClass="btn--full">Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
