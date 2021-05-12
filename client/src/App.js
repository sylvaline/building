import React, { useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Cart from './component/Cart'
import Home from './component/Home'
import Nav from './component/Nav'
import ProductDetails from './component/ProductDetails'
import {get_user} from './store/actions/authActions'
import {get_cart_items} from './store/actions/cartActions'
import {useDispatch, useSelector} from 'react-redux'
import Login from './component/Login'
import Signup from './component/Signup'
import Signout from './component/Signout'
import Footer from './component/Footer'
import SearchedProduct from './component/SearchedProduct'
import MobileMenu from './component/MobileMenu'
import About from './component/About'
import Reviews from './component/Reviews'
import Contact from './component/Contact'
import Blog from './component/Blog'

function App() {

  const dispatch = useDispatch()
  const {is_authenticated} = useSelector(state => state.auth)

  useEffect(()=>{
    dispatch(get_user())
  }, [])

 
  if(is_authenticated){
    dispatch(get_cart_items())
  }
  
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/blog" component={Blog} />
        <Route path="/cart"  component={Cart} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/mobile" component={MobileMenu} />
        <Route path="/searched-products" component={SearchedProduct} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
