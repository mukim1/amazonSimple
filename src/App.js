import React from 'react';
import Header from './Components/1Header/Header';
import Shop from './Components/2Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/5Home/Home';
import Review from './Components/6Review/Review';
import Inventory from './Components/7Inventory/Inventory';
import Nomatch from './Components/8Nomatch/Nomatch';
import ProductDetail from './Components/9 ProductDetail/ProductDetail';

const App = () => {

  return (
    <div>
      <Router>
          <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            {/* main url url show this path first */}
            <Shop></Shop>
          </Route>
          <Route exact path="/:productKey">
            {/* Dynamic path, product detail page*/}
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            {/* No match*/}
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>

      
      
    </div>
  );
};

export default App;