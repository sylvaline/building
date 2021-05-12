import React from "react";
import { NavLink, Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

function MobileMenu() {
  const {is_authenticated, user} = useSelector(state => state.auth)
  return (
    <div className="mobile_menu">
      <div className="mobile_menu_inner">
      <ul>
        <li>
          <NavLink activeClassName="active_link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_link" to="/reviews">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active_link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="join_chat">
      {
            is_authenticated ? <Link to="/logout">
            <button>Hello {user?.name} </button>
          </Link> : <Link to="/login_from_chat">
            <button>Sign in</button>
          </Link>
          }
      </div>
      </div>
    </div>
  );
}

export default MobileMenu;