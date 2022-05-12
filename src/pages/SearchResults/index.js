import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ListOfGifs from "../../components/ListOfGifs";
import getGifs from "../../services/getGifs";

export default function SearchResults({ params }) {
    const { keyword } = params;
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function() {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs);
                setTimeout(() => setLoading(false), 2500);
            });
    }, [keyword]);

    return(
        <>
        {
            loading ? <LoadingSpinner /> : <ListOfGifs gifs={gifs} />
        }
        </>
    )

};