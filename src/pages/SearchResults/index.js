import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearchResults({ params }) {
    const { keyword } = params;
    // Custom Hook:
    const { loading, gifs } = useGifs({ keyword });

    return(
        <>
        {
            loading ? <LoadingSpinner /> : <ListOfGifs gifs={gifs} />
        }
        </>
    )

};