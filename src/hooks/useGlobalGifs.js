import { useContext } from "react";
import GifsContext from "../context/GifsContext";

export default function useGlobalGifs() {
    // const {gifs} = useContext(GifsContext);

    console.log('soy gifs :>> ', useContext(GifsContext).gifs);
    return useContext(GifsContext).gifs;

};