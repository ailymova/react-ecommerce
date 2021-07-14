import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitch = ({ on, toggle }) => {
  const props = {
    type: 'button',
    role: 'switch',
    onClick: typeof toggle === 'function' ? toggle : () => {},
    'aria-checked': (on = on === true),
  };

  return (
    <a {...props}>
      {on ? (
        <>
          <FaSun />
          <span>Light</span>
        </>
      ) : (
        <>
          <FaMoon />
          <span>Dark</span>
        </>
      )}
    </a>
  );
};

export default ThemeSwitch;
