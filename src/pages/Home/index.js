import React, { useState } from "react";
import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import LazyTrending from "../../components/LazyTrending";

export default function Home() {
    const [keyword, setKeyword] = useState('');
    
    const [path, pushLocation] = useLocation(); // eslint-disable-line
    const {loading, gifs} = useGifs();   // eslint-disable-line

    const handleSubmit = (e) => {
        e.preventDefault();
        //  Navigate to route
        pushLocation(`/search/${keyword}`);
    }

    const handleInput = (e) => {
        setKeyword(e.target.value);
    }

    return(
        <>
        <header>
            <form className="App-searchBar"  onSubmit={handleSubmit}>
                <button className="btn" >Search!</button>
                <input placeholder="Search for a gif..." onChange={handleInput} type='text' value={keyword} />
            </form>
        </header>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title" >⤗ Ésta es la última búsqueda:</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <LazyTrending />
                    </div>
                </div>
            </div>
        </>
    )
};