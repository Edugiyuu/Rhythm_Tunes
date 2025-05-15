import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../SingMusic/SingMusic.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { triggerDialogAnimation, triggerBackDialogAnimation, TPDialogBack, triggerBackDialogAnimationMode, triggerDialogAnimationMode } from "./animations";
import { PlayAudio } from "../../utils/PlayAudio";

interface Music {
  musicUrl: string;
  instrumentalUrl: string;
}

interface Subtitle {
  time: number;
  text: string;
}

function SingMusic() {
  const [lyrics, setLyrics] = useState<Subtitle[]>([]);
  const [data, setData] = useState<Music>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentSubtitle, setCurrentSubtitle] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [pacienceLevel, setpacienceLevel] = useState<number>(0);
  const [selectMode, setSelectMode] = useState<boolean>(true);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const { id } = useParams();

useEffect(() => {
  PlayAudio(`/audios/Chie/ModeSelector/Chie-${pacienceLevel}.mp3`);
  triggerDialogAnimationMode();
}, [pacienceLevel]);

useEffect(() => {
  setTimeout(() => {
    setpacienceLevel(1);
  }, 20000);
  setTimeout(() => {
    setpacienceLevel(2);
  }, 40000);
}, []);

  useEffect(() => {
    TPDialogBack();
    axios.get(`http://localhost:3000/music/${id}`)
      .then((res) => {
        setData(res.data);
        setLyrics(res.data.lyrics);
        triggerBackDialogAnimation();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    if (currentSubtitle === "♪♪♪") {
      triggerDialogAnimation();
      setRandomNumber(Math.floor(Math.random() * 2));
    } else {
      triggerBackDialogAnimation();
    }
  }, [currentSubtitle]);

  const handleTimeUpdate = () => {
    const audio = document.querySelector("audio");
    if (!audio) return;

    // guarda em segundos o momento atual da música
    setCurrentTime(audio.currentTime);
    // procura qual legenda deve aparecer neste momento
    // .slice cria uma cópia do array para não modificar o original
    // .reverse inverte a ordem do array para que a legenda mais recente apareça primeiro
    // .find procura a primeira legenda que tem o tempo menor ou igual ao momento atual
    const subtitle = lyrics.slice().reverse().find((subtitle) => currentTime >= subtitle.time)

    // se encontrou uma legenda nova, seta o currentSubtitle
    if (subtitle && subtitle.text !== currentSubtitle) {
      setCurrentSubtitle(subtitle.text);
    }
  };
  const handleModeSelect = (useSingerVoice: boolean) => {
    if (!data) {
      return console.log("no data");
    };

    if (useSingerVoice) {
      setAudioUrl(data.musicUrl)
    } else {
      setAudioUrl(data.instrumentalUrl)
    }
    triggerBackDialogAnimationMode();
    setSelectMode(false);
  };

  return (
    <div className="SingMusic">
      <AudioPlayer
        src={audioUrl}
        onListen={handleTimeUpdate}
        showSkipControls={false}
        showJumpControls={false}
        customVolumeControls={[]}
        layout="horizontal"
        autoPlay={true}
        volume={0.5}
      />

      {selectMode && (
        <div className="ModeSelector">
          <h2>Chose your mode</h2>
          <div className="ModeButtons">
            <button className="ModeButton" onClick={() => handleModeSelect(true)}>
              Sing together
            </button>
            <button className="ModeButton" onClick={() => handleModeSelect(false)}>
              Karaoke
            </button>
          </div>
        </div>
      )}

      <div className="lyrics">
        {lyrics.map((line, i) => {
          // Pula as letras que ainda não devem ser mostradas baseado no tempo atual
          if (currentTime < line.time) return null;
          // Pega as próximas 2 linhas da letra para mostrar como prévia

          const nextLines = lyrics.slice(i + 1, i + 3);

          return (
            <div key={line.time}>
              <h1 className="highlighted">{line.text}</h1>
              {/* Mostra as próximas 2 linhas */}
              {nextLines.map((nextLine) => (
                <p key={nextLine.time} className="faded">
                  {nextLine.text}
                </p>
              ))}
            </div>
          );
          // Inverte o array para mostrar a letra mais recente primeiro
          // Encontra o primeiro elemento não-nulo (letra atual a ser mostrada)
        }).reverse().find(Boolean)}

      </div>

      <div className="PersonaChar" id="ChieMode">
        <img src={`/imgs/Chie/ModeSelector/Chie-${pacienceLevel}.png`} />
      </div>

      <div className="PersonaChar" id="RandomChie">
        <img src={`/imgs/Chie/InMusic/Chie-${randomNumber}.png`} />
      </div>
    </div>
  );
}

export default SingMusic;