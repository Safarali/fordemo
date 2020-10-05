import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Welcome } from '../pages/Welcome';
import { ComingProducts } from '../pages/ComingProducts';
import { AppleWatch } from '../pages/AppleWatch';
import { Iphone } from '../pages/Iphone';
import { MacbookPro } from '../pages/MacbookPro';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/coming-products" component={ComingProducts} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/apple-watch" component={AppleWatch} />
      <Route exact path="/iphone" component={Iphone} />
      <Route exact path="/macbook-pro" component={MacbookPro} />
    </Switch>
  );
};

export default Routes;
