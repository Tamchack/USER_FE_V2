import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer';
import { Main, Learn } from '../container';

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/learn' component={Learn} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Router;
