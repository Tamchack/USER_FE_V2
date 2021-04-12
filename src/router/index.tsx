import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer';
import { Main, Learn, Admin, Adminbook } from '../container';
import { AdminFooter } from '../component/admin/style';
import AdminHeader from '../component/adminHeader';
import UserInfoManagement from '../component/userInfoManagement';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/admin'>
          <AdminHeader/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/admin/book" component={Adminbook}/>
          <Route exact path="/admin/user" component={UserInfoManagement}/>
          <AdminFooter/>
        </Route>
        <Route path='/'>
          <Header/>
          <Route exact path='/' component={Main} />
          <Route path='/learn' component={Learn} />
          <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
