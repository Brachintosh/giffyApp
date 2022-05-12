const apiKey='0vXAlCjt4QqgQXLO2l81XTQbZ6XX4vFA';

export default function getGifs({keyword} = {} ) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=16&offset=0&rating=g&lang=en`
    
    return fetch(apiURL)
        .then(res => res.json())
        .then(pepito => {
            const {data} = pepito;
            // console.log('data :>> ', data);
            const giphyData = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium

                return { title, id, url };
            });
            // console.log('giphyData :>> ', giphyData);
            return giphyData;
    })
};