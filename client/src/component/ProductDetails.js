import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {add_to_cart} from '../store/actions/cartActions'
import {IoMdHeartEmpty} from 'react-icons/io'
import { Link } from 'react-router-dom'

function ProductDetails(props) {

    const dispatch = useDispatch()

    const {is_authenticated} = useSelector(state => state.auth)

    const [item] = useState(props.location.state.item)

    useEffect(()=>{
        window.scroll(0, 0)
      },[item])

    console.log(props.location)
    console.log(item)
    return (
        <div key={item._id} className="product_card product_details">
            <div className="details_upper">
            <div className="fav">
                <p><IoMdHeartEmpty/></p>
            </div>

            <div className="product_img">
                <img src="/image/item.jpg" alt={item.name + "product image"} />
            </div>
            <div className="details_right">
            <div className="name">
            <h3>{item.name}</h3>
            </div>
            <p>In stock</p>
               
            <div className="price">
                <h3>#{item.price}</h3>
            </div>
            
               {
                   is_authenticated ? <div className="product_details_btn">
                   <Link to='/cart'>
                   <button onClick={()=>{dispatch(add_to_cart(item._id))}} >Add To Cart</button>
              
                   </Link>
    
                   <Link to='/check-out'>
                   <button  >Buy Now</button>
              
                   </Link>
                   </div> : <div className="product_details_btn">
               <Link to='/login'>
               <button  >Add To Cart</button>
          
               </Link>

               <Link to='/login'>
               <button  >Buy Now</button>
          
               </Link>
               </div>
               }
            </div>
            </div>

            <div className="product_description">
                <h2>Product Description</h2>
                <p>Perlegear Full Motion TV Wall Mount Bracket Dual Articulating Arms Swivels Tilts Rotation for Most 37-75 Inch LED, LCD, OLED FlatCurved TVs, Holds up to 132lbs, Max VESA 600x400mm</p>
                <p>Perlegear Full Motion TV Wall Mount Bracket Dual Articulating Arms Swivels Tilts Rotation for Most 37-75 Inch LED, LCD, OLED FlatCurved TVs, Holds up to 132lbs, Max VESA 600x400mm</p>
                
            </div>

        </div>
    )
}


export default ProductDetails
