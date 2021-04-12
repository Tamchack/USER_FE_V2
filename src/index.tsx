import React from 'react';
import { render } from 'react-dom';
import Router from './router';
import GlobalStyle from './styles/globalStyle';


render(
    <>
        <GlobalStyle/>
        <Router />
    </>,
    document.getElementById('root')
);
