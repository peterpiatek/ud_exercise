import React, {useState, useEffect} from 'react';
import './App.css';

import SearchBar from "./SearchBar";
import VideosList from "./VideosList";
import VideoPlayer from "./VideoPlayer";

import useVideos from './hooks/useVideos';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, onSearchAction] = useVideos('space');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div className="ui grid">
            <div className={'sixteen wide column'}>
                <SearchBar onSubmit={onSearchAction}/>
            </div>
            <div className={'eleven wide column'}>
                <VideoPlayer selectedVideo={selectedVideo}/>
            </div>
            <div className={'five wide column'}>
                <VideosList onVideoSelect={setSelectedVideo} videos={videos}/>
                I have {videos.length} videos
            </div>
        </div>
    );
};

export default App;
