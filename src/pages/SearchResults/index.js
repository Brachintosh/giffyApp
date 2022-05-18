import React, {useCallback, useRef, useEffect} from 'react';
import LoadingSpinner from "../../components/LoadingSpinner";
import ListOfGifs from "../../components/ListOfGifs";

import useGifs from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from 'just-debounce-it';

export default function SearchResults({ params }) {
    const { keyword } = params;
    // Custom Hook:
    const { loading, gifs, setPage } = useGifs({ keyword });

    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    })

    const title = gifs ? `You are seeing ${gifs.length} giff's results of searching for: ${keyword.toLocaleUpperCase() }` : ""

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }

    return(
        <>
        {
            loading 
            ? <LoadingSpinner /> 
            : <>
                <h3 className="App-title">
                    {decodeURI(keyword)}
                </h3>
                <ListOfGifs gifs={gifs} />
            </> 
        }
        <br />
        <h5>{title}</h5>
        <button className='btn' onClick={handleNextPage} >Get more Giffs</button>

        </>
    )
};