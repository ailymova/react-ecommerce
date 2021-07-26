// import { createContext } from 'react';

export const themes = {
  dark: {
    colorPrimary: '#d120ae',
    colorComplement: '#f56409',
    colorSecondary: '#f3b312',
    bgColor: '#011129',
    textColor: '#fafafa',
    shadow: '0px 1rem 2.5rem -1rem rgba(0, 0, 0, 0.8)',
    skeletonColor: '#173152',
    skeletonWrapper: '#11253d',
    shimmerColor: 'rgba(1, 17, 41, 0.2)',
    shimmerGlow: '0 0 4rem 4rem rgba(1, 17, 41, 0.025)',
  },
  light: {
    colorPrimary: '#20d1b1',
    colorComplement: '#0993f5',
    colorSecondary: '#121ef3',
    bgColor: '#fafafa',
    textColor: '#333',
    shadow: '0px 1rem 2.5rem -1rem rgba(0, 0, 0, 0.5)',
    skeletonColor: '#e0e0e0',
    skeletonWrapper: '#f0f0f0',
    shimmerColor: 'rgba(250, 250, 250, 0.2)',
    shimmerGlow: '0 0 4rem 4rem rgba(250, 250, 250, 0.05)',
  },
};

// not necesary
/*
export const ThemeSelectorContext = createContext({
  themeName: 'dark',
  toggleTheme: () => {},
});
*/
