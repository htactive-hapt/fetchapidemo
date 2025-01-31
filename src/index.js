import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Menu from './components/header/Menu';
import Content from './components/content/Content';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Menu/>
    <Slider/>
    <Content/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();