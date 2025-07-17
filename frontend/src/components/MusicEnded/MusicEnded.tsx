import { useEffect, useState } from 'react';
import CustomLink from '../../utils/CustomLink';
import '../MusicEnded/MusicEnded.css';
import { triggerAlbumImg, triggerResult } from './animation';
import axios from 'axios';

interface MusicEndedProps {
  albumImageUrl: string;
  musicName: string;
  userAudioId: string;
}

function MusicEnded({ albumImageUrl, musicName, userAudioId }: MusicEndedProps) {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    triggerAlbumImg();
    triggerResult();
  }, []);

  useEffect(() => {
    if (!userAudioId) return;

    const interval = setInterval(() => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/score/result/${userAudioId}`)
        .then((res) => {
          const newScore = res.data?.score;
          console.log("Tentando pegar score:", newScore);
          if (newScore) {
            setScore(newScore);
            clearInterval(interval); // para de tentar após obter
          }
        })
        .catch((err) => {
          console.error("Erro ao buscar score:", err);
        });
    }, 10000); // a cada 10 segundos

    // Limpar intervalo se o componente for desmontado
    return () => clearInterval(interval);
  }, [userAudioId]);


  return (
    <div className='MusicEnded'>
      <img src={albumImageUrl} alt="Album Cover" />
      <div className='Result'>
        <h2>{musicName}</h2>

        <div className='Score'>
          <p>Score:</p>
          <p>{score ? score : "Carregando score..."}</p>
        </div>
        <div className='ScoreBackground'>
          <div className='ScoreBar' style={{width: `${score}%`}}></div>
        </div>

        <CustomLink className='Return' to='/musics' title="Return" />
      </div>
    </div>
  );
}

export default MusicEnded;
