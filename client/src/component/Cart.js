import React, { useEffect } from "react";

import {
  get_cart_items,
  remove_product_from_cart,
  increase_cart_quantity,
  decrease_cart_quantity,
  get_cart_total,
  clear_cart,
} from "../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const { carts, cartTotal } = useSelector((state) => state.cart);
  const { is_authenticated, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(get_cart_items());
    dispatch(get_cart_total());
  }, [cartTotal]);


  if(!is_authenticated && !carts?.cartItems){
    return <div className="empty_cart">
      <h2>Your Cart is currently empty!</h2>
    </div>
  }
  if(is_authenticated && carts === null){
    return <div className="empty_cart">
      <h2>Your Cart is currently empty!</h2>
    </div>
  }
  if(is_authenticated && carts?.cartItems?.length === 0){
    return <div className="empty_cart">
      <h2>Your Cart is currently empty!</h2>
    </div>
  }
  return (
    <div className="cart">
      <div className="cart_details">
        <div >
        <h3>Your shopping cart</h3>
          <div className="cart_title">
            <h6 onClick={()=>dispatch(clear_cart()) }>Clear all items in cart</h6>
            <p>Price</p>
          </div>
          
        </div>
        {(is_authenticated &&
          carts?.cartItems) &&
          carts.cartItems.map((item) => {
            return (
              <div key={item._id} className="cart_card">
                <div className="product_img">
                  <img
                    src="/image/item.jpg"
                    alt={item.name + "product image"}
                  />
                </div>
                <div className="name">
                  <div>
                  <h3>{item.name}</h3>
                  </div>
                  <p>In stock</p>

                  <div className="name_moreinfo">
                    <div className="name_space quantity">
                    <button
                      onClick={() => {
                        dispatch(increase_cart_quantity(item._id));
                      }}
                    >
                      +
                    </button>
                  
                   
                    <p>{item.quantity}</p>
                  
                    <button
                      onClick={() => dispatch(decrease_cart_quantity(item._id))}
                    >
                      -
                    </button>
                    </div>
                    <div className="name_space">
                    <p
                    onClick={() => dispatch(remove_product_from_cart(item._id))}
                  >
                    Remove
                  </p>
                  </div>
                  <div className="name_space">
                      <p> Total price #{item.total}</p>
                  </div>
                  </div>
                  
                 
                </div>

                <div className="price">
                  <h3>#{item.price}</h3>
                </div>
              </div>
            );
          })}
      </div>
      <div className="cart_total">
        <div className="cart_total_inner">
        {carts && carts.cartItems && carts.cartItems.length > 0 ? (
          <div>
            {
              is_authenticated && <>
                <p>Sub Total : <span>#{cartTotal.subTotal || 0}</span></p>
            <p>Tax : <span>#{cartTotal.tax || 0}</span></p>
            <p>Total : <span>#{cartTotal.total || 0}</span></p>

            <button>Proceed to Checkout</button>
              </>
            }
          </div>
        ) : (
          ""
        )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
