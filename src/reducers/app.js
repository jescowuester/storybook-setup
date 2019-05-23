const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_APP': {
      const { siteId, storeId, locale } = action;
      return { siteId, storeId, locale };
    }

    default:
      return state;
  }
};
