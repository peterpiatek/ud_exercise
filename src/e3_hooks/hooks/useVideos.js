import {useState, useEffect} from "react";
import fetchMovies from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    const fetchData = async term => {
        const moviesRes = await fetchMovies.get('', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 10,
                safeSearch: 'moderate',
                type: 'video',
            }
            // params: {q: term}
        });
        setVideos(moviesRes.data.items);
    };

    useEffect(() => {
        fetchData(defaultSearchTerm);
    }, [defaultSearchTerm]);

    return [
        videos,
        fetchData
    ]
}

export default useVideos;
