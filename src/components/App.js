// @flow
import React from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import Layout from './shared/Layout';
import Routes from './Routes';
import { googleAnalyticsTrack } from '../utils/analytics';

const history = createHashHistory();
history.listen((location: Location): void => {
  googleAnalyticsTrack(location);
});

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export default App;