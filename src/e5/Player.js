import React,{useEffect, useState} from 'react';

const Player = () => {

    const [videoID, setVideoID] = useState('');

    useEffect(() => {
        const playHandler = (e) => {
            console.log(e);
            if(e.detail){
                setVideoID(e.detail);
            }
        }
        window.addEventListener('playVideo', playHandler, {capture: true});
        return () => {
            window.removeEventListener('playVideo', playHandler, {capture: true});
        }
    }, []);

    return (
        <div>
            <iframe id="ytplayer" width="100%" height="500"
                    src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                    frameBorder="0"> </iframe>
        </div>
    );
};

export default Player;
