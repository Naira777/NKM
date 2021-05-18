import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <Route exact path="/" render={() => <HomePage />} />
      <Route path="/home" render={() => <HomePage />} />
  
    </>
  );
}

const JSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
};
export default JSApp;

