import { useEffect } from 'react';
import CustomLink from '../../utils/CustomLink';
import '../MusicEnded/MusicEnded.css'
import { triggerAlbumImg, triggerResult } from './animation';


interface MusicEndedProps {
  albumImageUrl: string;
  musicName: string;
}

function MusicEnded({ albumImageUrl, musicName }: MusicEndedProps) {
  useEffect(() => {
    triggerAlbumImg();
    triggerResult();
  }, []);
  const score = "Wip"
  return (
    <div className='MusicEnded'>
      <img src={albumImageUrl} />
      <div className='Result'>

        <h2>{musicName}</h2>
        <div className='Score'>
          <p>Score: </p>
          <h2 className="wip" id="wip">{score.toLocaleUpperCase().slice(0, 1)}</h2>
          <p className="wip">{score.toLocaleUpperCase().slice(1)}</p>

        </div>
        <div className='Score'>
          <p>Accuracity: </p>
          <h2 className="wip" id="wip">{score.toLocaleUpperCase().slice(0, 1)}</h2>
          <p className="wip">{score.toLocaleUpperCase().slice(1)}</p>

        </div>

        <CustomLink className='Return' to='/musics' title="Return" />

      </div>

    </div>
  )
}

export default MusicEnded