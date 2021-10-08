export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=682k4iEU8KVpwlKHWrNm8Yshq0kBtokO`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( (gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    
    return gifs;

}