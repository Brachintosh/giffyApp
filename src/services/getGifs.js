import {API_KEY, API_URL} from './settings';

const APIdata_ToGifs = apiResponse => {
    const {data = []} = apiResponse

    if(Array.isArray(data)) {
        const gifs = data.map(image => {
            const {images, title, id} = image
            const { url } = images.downsized_medium
            
            return { title, id, url }
        })
        // console.log('gifs :>> ', gifs);
        return gifs;
    }
    return [];
}

export default function getGifs({limit=32, keyword='morty', page=0} = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}
    &limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    // const apiURL = 
    //     `https://api.giphy.com/v1/gifs/search?
    //         api_key=${apiKey}&
    //         q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(APIdata_ToGifs)
};