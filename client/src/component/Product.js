import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../store/actions/productActions";
import { add_to_cart } from "../store/actions/cartActions";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

function Product() {

  const dispatch = useDispatch();

  const { product, is_product_loading } = useSelector((state) => state.product);
  const {is_authenticated} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(get_products());
  }, []);

if(is_product_loading ){
  return <div className="loader">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
}
  return (
    <div className="product">
      {product &&
        product.map((item) => {
          return (
            <div key={item._id} className="product_card">
              <div className="fav">
                <p>
                  <IoMdHeartEmpty />
                </p>
              </div>

              <div className="product_img">
                <Link
                  to={{
                    pathname: `/product-details/${item._id}`,
                    state: { item: item },
                  }}
                >
                  <img
                    src="/image/item.jpg"
                    alt={item.name + "product image"}
                  />
                </Link>
              </div>
              <div className="name">
                <h3>{item.name}</h3>
              </div>
              <p>In stock</p>

              <div className="price">
                <h3>#{item.price}</h3>
              </div>

              {is_authenticated ? (
                <div className="product_details_btn">
                  <Link to="/cart">
                    <button
                      onClick={() => {
                        dispatch(add_to_cart(item._id));
                      }}
                    >
                      Add To Cart
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="product_details_btn">
                  <Link to="/login">
                    <button>Add To Cart</button>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Product;
