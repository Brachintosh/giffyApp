import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

const POPULAR_GIFS = ['Pandas', 'Argentina', 'Brasil', 'Matrix', ];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const {loading, gifs} = useGifs();

    const handleSubmit = (e) => {
        e.preventDefault();
        //  Navigate to route
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
            <h3 className="App-title" >⤗ Ésta es la última búsqueda:</h3>
            <ListOfGifs gifs={gifs} loading={loading} />
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