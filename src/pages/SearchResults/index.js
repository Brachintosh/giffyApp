import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";
// import { makeStyles, IconButton, Box } from '@material-ui/core';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function SearchResults({ params }) {
    const { keyword } = params;
    // Custom Hook:
    const { loading, gifs, setPage } = useGifs({ keyword });

    // MUI btn:
    // const classes = useStyles();

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
        <button onClick={handleNextPage} >Get more Giffs</button>
        
        {/* <Box >
            <IconButton onClick={handleNextPage} className={classes.paginationBtn} edge="end" size="medium">
                <NavigateNextIcon fontSize="large"/>
            </IconButton>
        </Box> */}
        
        </>
    )
};