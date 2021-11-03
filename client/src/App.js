import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Cart,
  Checkout,
  Contact,
  Intro,
  News,
  Price,
  Product,
  Login,
  Signup,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/intro">
              <Intro />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/price">
              <Price />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
