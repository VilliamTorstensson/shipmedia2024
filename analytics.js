import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-TDP379QD6K'); // Replace with your GA tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};