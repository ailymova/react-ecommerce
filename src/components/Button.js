import './Button.scss';

const Button = ({ styleClass, disabled, children }) => {
  return (
    <button className={`btn ${styleClass}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
