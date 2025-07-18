import { useEffect, useState } from 'react';
import CustomLink from '../../utils/CustomLink';
import '../MusicEnded/MusicEnded.css';
import { triggerAlbumImg, triggerResult, triggerScoreBar } from './animation';
import axios from 'axios';

interface MusicEndedProps {
  albumImageUrl: string;
  musicName: string;
  userAudioId: string;
}

function MusicEnded({ albumImageUrl, musicName, userAudioId }: MusicEndedProps) {
  const [score, setScore] = useState<number | null>(null);
  const [rank, setRank] = useState<string>('');

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
            triggerScoreBar(newScore);
            clearInterval(interval); // para de tentar após obter
          }
        })
        .catch((err) => {
          console.error("Erro ao buscar score:", err);
        });
    }, 10000);

    return () => clearInterval(interval);
  }, [userAudioId]);

  useEffect(() => {
    if (score !== null) {
      if (score >= 90) {
        setRank('A');
      } else if (score >= 76) {
        setRank('B');
      } else if (score >= 60) {
        setRank('C');
      } else if (score >= 42) {
        setRank('D');
      } else if (score >= 23) {
        setRank('E');
      } else {
        setRank('F');
      }
    }
  }, [score]);


  return (
    <div className='MusicEnded'>
      <img src={albumImageUrl} alt="Album Cover" />
      <div className='Result'>
        <h2>{musicName}</h2>

        <div className='Score'>
          <p>Score:</p>
          <p>{score ? score : "Carregando score..."}</p>
          <p>Letra:{rank}</p>

        </div>
        <div className="ScoreWrapper">
          <div className="ScoreLabels">
            <span id='LabelF'>F</span>
            <span id='LabelE'>E</span>
            <span id='LabelD'>D</span>
            <span id='LabelC'>C</span>
            <span id='LabelB'>B</span>
            <span id='LabelA'>A</span>
          </div>

          <div className="ScoreBackground">
            <div className="ScoreBar"></div>
          </div>
        </div>


        <CustomLink className='Return' to='/musics' title="Return" />
      </div>
    </div>
  );
}

export default MusicEnded;
