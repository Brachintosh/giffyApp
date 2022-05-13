import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

export default function useGifs( { keyword } = { keyword: null } ){
    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext);

    useEffect(function() {
        setLoading(true)
        
        // Reading the last keyword at localStorage:
        const keywordToUse  = keyword ? keyword : localStorage.getItem('lastKeyword') ? localStorage.getItem('lastKeyword') : 'random';
        // console.log("soy keywordToUse >> ", keywordToUse);
        
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs);
                setTimeout(() => setLoading(false), 2500);
                
                // Saving the keyword at localStorage
                localStorage.setItem('lastKeyword', keyword);
            });
    }, [keyword, setGifs]);

    return {loading, gifs};
};