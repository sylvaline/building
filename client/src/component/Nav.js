import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Search from './Search'
import { IoIosCart, IoIosMenu } from 'react-icons/io';
import MobileMenu from './MobileMenu';


function Nav() {
    const[menuOpen, setMenuOpen] = useState(false)
    const {user, is_authenticated} = useSelector(state => state.auth)
    const {carts} = useSelector(state => state.cart)
    return (
        <div className="nav">
            <div className="nav_inner">
                <div className="logo">
                    <h1><NavLink to="/">Paragon P</NavLink></h1>
                </div>
                <div className="deliver">
                <p >Deliver to Orlu</p>
                </div>
                <div className="nav_search">
                    <Search />
                </div>
                <ul>
                    
                    {
                        is_authenticated ? <li ><NavLink to="/signout">Hello {' ' + user && user?.name ? user?.name : 'Guest'}</NavLink></li> : <li><NavLink to="/login">Login</NavLink></li>
                    }
                   <li><NavLink to="/cart"><i className="fas fa-shopping-cart"></i>{(carts  && carts.cartItems) && is_authenticated ? `(${carts.cartItems.length })`: ''}</NavLink></li>
                </ul>
            </div>
            <div className="nav_inner_mobile">
                <div className="upper_nav">

                <div>
                <i onClick={()=>setMenuOpen(!menuOpen)} className="fas fa-bars"></i>
                </div>
                <div className="logo">
                    <h1><NavLink to="/">Paragon P</NavLink></h1>
                </div>
                <ul>
                    
                    {
                        is_authenticated ? <li ><NavLink to="/signout"> {' ' + user && user?.name ? user?.name : 'Guest'}</NavLink></li> : <li><NavLink to="/login">Login</NavLink></li>
                    }
                    <li><NavLink to="/cart"><i className="fas fa-shopping-cart"></i>{(carts  && carts.cartItems) && is_authenticated ? `(${carts?.cartItems.length })`: ''}</NavLink></li>
                </ul>
                </div>
                
                <div className="nav_search">
                    <Search />
                </div>
                <div className="deliver">
                <p >Deliver to Orlu</p>
                </div>
                {
                menuOpen && <MobileMenu />
            }
            </div>
            
        </div>
    )
}

export default Nav
