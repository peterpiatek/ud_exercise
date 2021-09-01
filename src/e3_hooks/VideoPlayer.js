import React from 'react';

const VideoPlayer = ({selectedVideo}) => {

    const renderVideo = () => {
        if (selectedVideo) {
            return (
                <>
                    <iframe title={'VideoPlayer'} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                            width="100%"
                            height="443"
                            type="text/html"
                            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=0&fs=0`}>
                    </iframe>
                    <div>{selectedVideo.snippet.description}</div>
                </>
            )
        } else {
            return <div>'No Video Loaded'</div>;
        }
    }

    return (
        <div>{renderVideo()}</div>
    );
};

export default VideoPlayer;