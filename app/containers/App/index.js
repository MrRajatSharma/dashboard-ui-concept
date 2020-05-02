import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import PageNotFound from '../PageNotFound';
import Main from '../Main';

export default () => (
  <Switch>
    <Route
      render={() => (
        <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="*" component={PageNotFound} />
            </Switch>
        </Layout>
      )}
    />
  </Switch>
)