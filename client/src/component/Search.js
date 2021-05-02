import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
function Search() {

    const [input, setInput] = useState('')

    return (
        <div className="search">
            <form className="">
                <div className="search_form">
                    <input type="text" 
                    placeholder="Search building materials"
                    value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <p><IoIosSearch /></p>
                </div>
            </form>
        </div>
    )
}

export default Search
