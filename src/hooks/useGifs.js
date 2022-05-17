import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export default function useGifs( { keyword } = { keyword: null } ){
    const [loading, setLoading] = useState(false);
    const [loadNextPage, setLoadNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const {gifs, setGifs} = useContext(GifsContext);

    // Reading the last keyword at localStorage:
    const keywordToUse  = keyword ? keyword : localStorage.getItem('lastKeyword') ? localStorage.getItem('lastKeyword') : 'random';
    // console.log("soy keywordToUse >> ", keywordToUse);

    useEffect(function() {
        setLoading(true)
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs);
                setTimeout(() => setLoading(false), 2500);
                
                // Saving the keyword at localStorage
                localStorage.setItem('lastKeyword', keyword);
            });
    }, [keyword, keywordToUse, setGifs]);

    useEffect(function(){
        if(page === INITIAL_PAGE) return
        setLoadNextPage(true)

        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadNextPage(false)
            })

    }, [keywordToUse, page, setGifs]);

    return {loading, loadNextPage, gifs, setPage};
};