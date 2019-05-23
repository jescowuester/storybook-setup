// https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';

import { trackingId } from '../config';
import { gtag } from './helpers';

const withTracker = WrappedComponent => {
  const sendPageView = page => {
    gtag('config', trackingId, { page_path: page });
  };

  const trackPage = page => {
    if (`requestAnimationFrame` in window) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => sendPageView(page));
      });
    } else {
      // simulate 2 rAF calls
      setTimeout(() => sendPageView(page), 32);
    }
  };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return (
        <Fragment>
          <Helmet>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
            />
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              `}
            </script>
          </Helmet>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };

  return HOC;
};

export default withTracker;
