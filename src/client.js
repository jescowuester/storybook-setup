import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import FontFaceObserver from 'fontfaceobserver';

// Import global styles
import 'sanitize.css/sanitize.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles/beforeJs.css';

import configureStore from './utils/configureStore';
import routes from './routes';

const interRegularObserver = new FontFaceObserver('Inter', { weight: 400 });
const interMediumObserver = new FontFaceObserver('Inter', { weight: 500 });
const interSemiboldObserver = new FontFaceObserver('Inter', { weight: 600 });
const interBoldObserver = new FontFaceObserver('Inter', { weight: 700 });

Promise.all([
  interRegularObserver.load(),
  interMediumObserver.load(),
  interSemiboldObserver.load(),
  interBoldObserver.load()
]).then(() => {
  document.body.classList.add('font-loaded');
});

const history = createBrowserHistory();
const initialState = {};
const { store, persistor } = configureStore(history, initialState);
const ROOT_NODE = document.getElementById('react-root');

const renderApp = Routes => {
  render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </AppContainer>,
    ROOT_NODE
  );
};

renderApp(routes);

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept(['./routes'], () => {
    try {
      const nextRoutes = require('./routes').default;

      unmountComponentAtNode(ROOT_NODE);
      renderApp(nextRoutes);
    } catch (error) {
      console.error(`Routes hot reloading error ${error}`);
    }
  });
}

// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
// }
