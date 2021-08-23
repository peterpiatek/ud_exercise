import React, {Component} from 'react';
import './App.css';
import SearchBar from "./SearchBar";
import fetchMovies from "./api/youtube";
import VideosList from "./VideosList";
import VideoPlayer from "./VideoPlayer";


export default class App extends Component {

    state = {
        videos: [],
        selectedVideo: ''
    };

    onSearchAction = async term => {
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

        this.setState({
            videos: moviesRes.data.items,
            selectedVideo: moviesRes.data.items[0]
        })

    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render(){
        return (
            <div className="ui grid">
                <div className={'sixteen wide column'}>
                    <SearchBar onSubmit={this.onSearchAction} />
                </div>
                <div className={'eleven wide column'}>
                    <VideoPlayer selectedVideo={this.state.selectedVideo} />
                </div>
                <div className={'five wide column'}>
                    <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    I have {this.state.videos.length} videos
                </div>
            </div>
        );
    }

};