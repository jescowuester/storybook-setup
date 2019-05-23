import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createRootReducer from '../reducers';

export default (history, initialState = {}) => {
  const middlewares = [
    routerMiddleware(history),
    thunk
    // Add other middlewares here
  ];
  const composeEnhancers =
    (__DEV__ &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
    // Add other enhancers here
  );

  const persistConfig = {
    key: 'root',
    storage
  };

  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history)
  );

  const store = createStore(persistedReducer, initialState, enhancers);
  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      try {
        const createNextReducer = require('../reducers').default;

        store.replaceReducer(
          persistReducer(persistConfig, createNextReducer(history))
        );
      } catch (error) {
        console.error(`Reducer hot reloading error ${error}`);
      }
    });
  }

  return { store, persistor };
};
