import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="style_nav">
      <div className="logo">
        <NavLink exact activeClassName="active_menu" to="/">
          <h2>ZapEcom</h2>
        </NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink activeClassName="active_menu" to="/men">
              men
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active_menu" to="/women">
              women
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active_menu" to="/kids">
              kids
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active_menu" to="/beauty">
              beauty
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active_menu" to="/homeandLiving">
              home & living
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active_menu" to="/offer">
              offer
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="searchBar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search Products..." />
      </div>
      <div className="header_icon">
        <i class="fas fa-shopping-bag"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
