import {API_KEY, API_URL} from './settings';

const APIdata_ToGifs = apiResponse => {
    const {data = []} = apiResponse;

    console.log('data :>> ', data);
    return data;
}

export default function getTrendingTerms() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(APIdata_ToGifs)
};