import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {searched_input} from '../store/actions/productActions'


function Search(props) {
    const dispatch = useDispatch()
  const [input, setInput] = useState("");
 
  const handleSubmit = e =>{
      e.preventDefault()

        dispatch(searched_input(input))

     setInput("")

     props.history.push("/searched-products")
  }

console.log(input)

  return (
    <>
        <div className="search">
          <form onSubmit={handleSubmit} className="">
            <div className="search_form">
              <input
                type="text"
                placeholder="Search building materials"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button>
              
                 <IoIosSearch />
              
              </button>
            </div>
          </form>
        </div>

        
    </>
  );
}

export default withRouter(Search);
