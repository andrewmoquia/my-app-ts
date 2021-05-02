import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';  
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {StoreProvider} from './components/store/Store'
import {Router, RouteComponentProps} from '@reach/router'
import HomePage from './components/home/HomePage'
import FavePage from './components/faves/FavePage'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<HomePage />} path="/" />
          <RouterPage pageComponent={<FavePage />} path="/faves" />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
