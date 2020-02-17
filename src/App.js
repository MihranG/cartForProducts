import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

import Cart from './Cart';
import Home from './Home';
import Header from "./Header";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          {/*<Route path="*" component= {Home}/>*/}
        </Switch>
      </BrowserRouter >
    </Provider>
  );
}

export default App;
