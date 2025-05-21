import { useEffect } from 'react';
import { animations } from './animations';
import './ViewMusic.css';
import CustomLink from '../../utils/CustomLink';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type ViewMusicProps = {
    name: string;
    musicUrl: string;
    albumImageUrl: string;
    _id: string;
};

const ViewMusic = ({ name, musicUrl, _id, albumImageUrl}: ViewMusicProps) => {
    const triggerAnimation = animations();

    useEffect(() => {
        triggerAnimation();
    }, [triggerAnimation]);

    return (
        <div className="ViewMusic">
            <div className='Infos'>
                <img src={albumImageUrl} alt="" />
                <p>Music Name: {name}</p>
                <p>Author: {}</p>
                <div className='StartMusicBox'>
                    <CustomLink to={`/sing-music/${_id}`} title='START!' className='StartMusic' />
                    <AudioPlayer
                        autoPlay 
                        src={musicUrl}
                        onPlay={e => console.log("onPlay")}
                        volume={0.3}
                        style={{width: '100%', height:'100%'}}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewMusic;
