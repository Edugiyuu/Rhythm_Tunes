import '../MusicEnded/MusicEnded.css'
import { triggerAlbumImg, triggerResult } from './animation';


interface MusicEndedProps {
  albumImageUrl: string;
  musicName: string;
}

function MusicEnded({ albumImageUrl, musicName }: MusicEndedProps) {
  triggerAlbumImg()
  triggerResult()
  const handleRefresh = () => {
    window.location.reload();
  };
  const score = "Wip"
  return (
    <div className='MusicEnded'>
      <img src={albumImageUrl}/>
      <div className='Result'>

        <h2>{musicName}</h2>
        <div className='Score'>
          <p>Score: </p>
          <h2 className="wip" id="wip">{score.toLocaleUpperCase().slice(0, 1)}</h2>
          <p className="wip">{score.toLocaleUpperCase().slice(1)}</p>

        </div>
        <button className='Replay' onClick={handleRefresh}>
          Refresh Page
        </button>
      </div>

    </div>
  )
}

export default MusicEnded