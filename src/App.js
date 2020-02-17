import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {getItems} from './store/thunks'

import {AppBar, Toolbar, Typography, IconButton , Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Home from './Home';
import Header from "./Header";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/*<Route path="/cart" component={Cart}/>*/}
          {/*<Route path="*" component= {Home}/>*/}
        </Switch>
      </BrowserRouter >
    </Provider>
  );
}

export default App;
