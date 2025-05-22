import '../MusicEnded/MusicEnded.css'

interface MusicEndedProps {
  albumImageUrl: string;
  musicName: string;
}

function MusicEnded({ albumImageUrl, musicName }: MusicEndedProps) {
  return (
    <div className='MusicEnded'>
        <div className='Result'>
            <img src={albumImageUrl} alt="" />
            <h2>{musicName}</h2>
        </div>
    </div>
  )
}

export default MusicEnded