import { useEffect } from 'react';
import { animations } from './animations';
import './ViewMusic.css';
import CustomLink from '../../utils/CustomLink';
import musicTest2 from '../../Sounds/musicTest2.mp3';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type ViewMusicProps = {
    musicName: string;
    author: string;
    duration: number;
};

const ViewMusic = ({ musicName, author, duration }: ViewMusicProps) => {
    const triggerAnimation = animations();

    useEffect(() => {
        triggerAnimation();
    }, [triggerAnimation]);

    return (
        <div className="ViewMusic">
            <div className='Infos'>
                <img src="./imgs/P4G.png" alt="" />
                <p>Music Name: {musicName}</p>
                <p>Author: {author}</p>
                <p>Duration in secs: {duration}</p>
                <div className='StartMusicBox'>
                    <CustomLink to="/select-music" title='START!' className='StartMusic' />
                    <AudioPlayer
                        autoPlay
                        src={musicTest2}
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
