import {API_KEY, API_URL} from './settings';

const APIdata_ToGifs = apiResponse => {
    const {data = []} = apiResponse

    if(Array.isArray(data)) {
        const gifs = data.map(image => {
            const {images, title, id} = image
            const { url } = images.downsized_medium
            
            return { title, id, url }
        })
        console.log('gifs :>> ', gifs);
        return gifs;
    }
    return [];
}

export default function getTrendingTerms() {
    const apiURL = `${API_URL}${API_KEY}&
            q=${keyword}&limit=32&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(APIdata_ToGifs)
};