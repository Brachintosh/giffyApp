import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';

export default function useGifs( { keyword } = { keyword: null } ){
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function() {
        setLoading(true)
        // Reading the last keyword at localStorage:
        const keywordToUse  = keyword || localStorage.getItem('lastKeyword') || 'random';
        console.log("soy keywordToUse >> ", keywordToUse);
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs);
                setTimeout(() => setLoading(false), 2500);
                // Saving the keyword at localStorage
                localStorage.setItem('lastKeyword', keyword);
            });
    }, [keyword]);

    return {loading, gifs};
};