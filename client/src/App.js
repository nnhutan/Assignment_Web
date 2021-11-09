import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextList,ContextProvider } from "./Context";
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
  Admin,
  User,
  Test as Test,
} from "./pages/index";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <ContextProvider>
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/intro">
              <TopHeader />
              <Intro />
            </Route>
            <Route path="/product">
              <TopHeader />
              <Product />
            </Route>
            <Route path="/price">
              <TopHeader />
              <Price />
            </Route>
            <Route path="/contact">
              <TopHeader />
              <Contact />
            </Route>
            <Route path="/news">
              <TopHeader />
              <News />
            </Route>
            <Route path="/cart">
              <TopHeader />
              <Cart />
            </Route>
            <Route path="/checkout">
              <TopHeader />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <TopHeader />
              <Home />
              </Route>
              <Route exact path="/test" component={ Test}/>
          </Switch>
        </div>
      </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
