import { toast, Slide } from 'react-toastify';
import { get } from 'lodash';

const toastOptions = {
  transition: Slide,
  closeButton: false,
  draggablePercent: 40,
  position: 'top-center',
  autoClose: true,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true
};

const toastAlert = (type, content, options) => {
  toast(content, {
    ...toastOptions,
    ...options,
    className: `toast-${type}`,
    type
  });
};

// Return error message from response
const getError = err => {
  const res = err.response;

  let error = get(
    res,
    'data.fault.message',
    get(
      res,
      'data.error.message',
      String(err) || 'An unknown error has occured.'
    )
  );

  if (error === 'Error: Network Error') {
    error = 'Could not connect to the server!';
  }

  return error;
};

const gtag = (...args) => {
  if (typeof window === 'undefined') return false;
  if (!window.gtag) return console.warn('Tag manager not initalized yet');
  return window.gtag(...args);
};

export { gtag, getError, toastAlert };
