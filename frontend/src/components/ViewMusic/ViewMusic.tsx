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
    difficulty: string;
};

const ViewMusic = ({ name, musicUrl, _id, albumImageUrl, difficulty }: ViewMusicProps) => {
    const triggerAnimation = animations();

    useEffect(() => {
        triggerAnimation();
    }, [triggerAnimation]);

    return (
        <div className="ViewMusic">
            <div className='Infos'>
                <img id='albumImageUrl' src={albumImageUrl} />
                <p>{name}</p>
                <div className='difficulty'>
                    <p>Difficulty: </p>
                    <h2 className={difficulty} id={difficulty}>{difficulty.toLocaleUpperCase().slice(0,1)}</h2>
                    <p id={`p${difficulty}`} className={difficulty}>{difficulty.toLocaleUpperCase().slice(1)}</p>
                    
                </div>

                <div className='StartMusicBox'>
                    <CustomLink to={`/sing-music/${_id}`} title='START!' className='StartMusic' />
                    <AudioPlayer
                        autoPlay
                        src={musicUrl}
                        volume={0.3}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewMusic;
