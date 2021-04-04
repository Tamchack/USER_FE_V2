import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer';
import { Main, Learn, Admin } from '../container';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/' component={Main}>
          <Header></Header>
          <Route exact path='/' component={Main} />
          <Route path='/learn' component={Learn} />
          <Footer></Footer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
