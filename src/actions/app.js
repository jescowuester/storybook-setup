export const initializeApp = params => async dispatch => {
  let { locale } = params;

  if (locale) {
    locale = locale.replace('_', '-');
  }

  return dispatch({ type: 'INITIALIZE_APP', ...params, locale });
};
