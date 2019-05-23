import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet title="Page not found" />

    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>It seems the page you are trying to visit does not exist (anymore).</p>
    </div>
  </div>
);
