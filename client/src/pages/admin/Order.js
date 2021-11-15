import React from "react";
import Header from "../../components/admin/Header";

function Order({ clickHandler, currUser }) {
  return (
    <div className="container-fluid p-0">
      <Header
        clickHandler={clickHandler}
        currPage="order"
        currUser={currUser}
      />
    </div>
  );
}

export default Order;
