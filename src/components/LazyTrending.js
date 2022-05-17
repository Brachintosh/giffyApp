import React from "react";
import useNearScreen from "../hooks/useNearScreen";
import LoadingSpinner from "./LoadingSpinner";

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches.js')
)

export default function LazyTrending() { 
   const {isNearScreen, fromRef} = useNearScreen({ distance: '200px' });

    return (
        <>
            <div ref={fromRef} >
                {
                    isNearScreen ? <TrendingSearches /> : <LoadingSpinner /> 
                }
            </div>
        </>
    )
};