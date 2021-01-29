import React from "react";
import { Link } from "react-router-dom";

export default function DashboardScreen() {
  return (
    <div className="container padding padding-bottom">
      <h1>Dashboard</h1>
      <div className="row center">
        <div key="" className="card">
          <Link to={`/productlist`}>
            <img
              className="xm no-radius-bottom"
              src="../images/z_products.jpg"
              alt="haha"
            />
          </Link>
          <div className="card-body ">
            <Link to={`/productlist`}>
              <h2 className="product-name text-center">Products</h2>
            </Link>
          </div>
        </div>
        <div key="" className="card">
          <Link to={`/orderlist`}>
            <img
              className="xm no-radius-bottom"
              src="../images/z_orders.jpg"
              alt="haha"
            />
          </Link>
          <div className="card-body ">
            <Link to={`/orderlist`}>
              <h2 className="product-name text-center">Orders</h2>
            </Link>
          </div>
        </div>
        <div key="" className="card">
          <Link to={`/userlist`}>
            <img
              className="xm no-radius-bottom"
              src="../images/z_users.jpg"
              alt="haha"
            />
          </Link>
          <div className="card-body ">
            <Link to={`/userlist`}>
              <h2 className="product-name text-center">Users</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
