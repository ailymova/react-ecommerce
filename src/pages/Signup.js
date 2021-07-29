import Button from '../components/Button';
import SignupImage from '../assets/signup_img_comeIn.jpg';
import { postJson } from '../components/utilities/FetchUtils';

const Signup = () => {
  const URL = 'https://ecomerce-master.herokuapp.com/api/v1/signup';

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      first_name: event.target.elements.firstName.value,
      last_name: event.target.elements.lastName.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    // postJson(URL, data).then();
  };

  return (
    <div className="form__container">
      <div className="col-50 form__info">
        <h1 className="title">Sign up today!</h1>
        <p>
          Sign up for an account in our totally a realStore® to purchase the
          best selection of products.
        </p>
        <form className="form__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Laura" required />
          </div>
          <div className="form__input-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Mayo" required />
          </div>
          <div className="form__input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="form__input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              required
            />
          </div>
          <Button styleClass="btn--full">Signup</Button>
        </form>
      </div>
      <div className="col-50">
        <img
          className="login__image"
          src={SignupImage}
          alt="We're Open! Come in Sign"
        />
      </div>
    </div>
  );
};

export default Signup;
