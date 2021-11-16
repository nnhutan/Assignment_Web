import React from 'react';
import TopSellingPoducts from './TopSellingPoducts';
import Samsung from './Samsung';
import Apple from './Apple';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const style = {
  display: "flex",
};
const list = {
  width: "250px",
};
function Mainproduct() {
  return (
    <> <Router>
      <div style={style}>
        <div class="list-group" style={list}>
          <li class="list-group-item active" aria-current="true">Danh sách sản phẩm</li>
          <Link to="/"></Link>
          <Link to="/samsung" style={{ textDecoration: 'none' }}><button type="button" class="list-group-item list-group-item-action">Samsung</button></Link>
          <Link to="/iphone" style={{ textDecoration: 'none' }}><button type="button" class="list-group-item list-group-item-action">Apple</button></Link>
        </div>
        <div>
          <Switch>
            <Route path="/product" exact>
              <TopSellingPoducts />
            </Route>

            <Route path="/samsung">
              <Samsung />
            </Route>
            <Route path="/iphone">
              <Apple />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  )
}
export default Mainproduct;