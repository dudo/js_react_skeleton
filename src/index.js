import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer } from 'react-router-modal';
import { BrowserRouter } from 'react-router-dom';
import 'react-router-modal/css/react-router-modal.css';
import './index.css';
import Routes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
    <ModalContainer />
  </BrowserRouter>, document.getElementById('root')
);
