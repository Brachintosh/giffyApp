import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ['Pandas', 'Argentina', 'Brasil', 'Matrix', ];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    // console.log('location :>> ', location);

    const handleSubmit = (e) => {
        e.preventDefault();
        //  Navigate to route
        // console.log('keyword :>> ', keyword);
        pushLocation(`/search/:${keyword}`);
    }

    const handleInput = (e) => {
        setKeyword(e.target.value);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search for a gif..." onChange={handleInput} type='text' value={keyword} />
                <button>Search!</button>
            </form>

            <h3 className="App-title" >⤗ Éstos son los Giffs más vistos:</h3>
            
            <ul>
                {
                    POPULAR_GIFS?.map((popGifs) => (
                        <li key={popGifs} >
                            <Link to={`/search/${popGifs}`} >Giffs de {popGifs}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};