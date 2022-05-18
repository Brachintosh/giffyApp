import React from 'react';
// import React, {useCallback, useRef, useEffect} from 'react';
import LoadingSpinner from "../../components/LoadingSpinner";
import ListOfGifs from "../../components/ListOfGifs";

import useGifs from "../../hooks/useGifs";
// import useNearScreen from "../../hooks/useNearScreen";
// import debounce from 'just-debounce-it';

export default function SearchResults({ params }) {
    const { keyword } = params;
    // Custom Hook:
    const { loading, gifs, setPage } = useGifs({ keyword });
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }

    const title = gifs ? `You are seeing ${gifs.length} giff's results of searching for: ${keyword.toLocaleUpperCase() }` : ""

    // const externalRef = useRef()
    // const {isNearScreen} = useNearScreen({
    //     externalRef: loading ? null : externalRef,
    //     once: false,
    // })

    // const debounceHandleNextPage = useCallback(debounce(
    //     () => setPage(prevPage => prevPage + 1), 250
    // ), [setPage]);

    // useEffect(function() {
    //     if(isNearScreen) debounceHandleNextPage()
    // }, [debounceHandleNextPage, isNearScreen]);

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
                {/* <div id="visor" ref={externalRef}></div>             */}
            </> 
        }
        <br />
        <h5>{title}</h5>
        <button className='btn' onClick={handleNextPage} >Get more Giffs</button>

        </>
    )
};