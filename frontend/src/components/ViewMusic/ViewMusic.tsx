import { useEffect } from 'react';
import { animations } from './animations'; // Importa a função de animação
import './ViewMusic.css';
import CustomLink from '../../utils/CustomLink';

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
                </div>
            </div>
        </div>
    );
};

export default ViewMusic;
