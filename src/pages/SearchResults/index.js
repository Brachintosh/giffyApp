import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearchResults({ params }) {
    const { keyword } = params;
    // Custom Hook:
    const { loading, gifs, setPage } = useGifs({ keyword });

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
        <button className='btn' onClick={handleNextPage} >Get more Giffs</button>

        </>
    )
};