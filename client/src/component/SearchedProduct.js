import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../store/actions/productActions";
import { add_to_cart } from "../store/actions/cartActions";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

function Product(props) {

  const dispatch = useDispatch();

  const { products, searched_input} = useSelector((state) => state.product);
  const {is_authenticated} = useSelector(state => state.auth)

  console.log(searched_input)

  const searched = products?.filter(product => product.name.toLowerCase().includes(searched_input))

  if(!searched?.length > 0){
      return(
          <div className="no_search_found">
              <div className="no_search">
              <h4 >
                  No value found for : #{searched_input}
              </h4>
              </div>
          </div>
      )
  }

  return (
    <div className="product searched">
      {searched &&
        searched.map((item) => {
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
