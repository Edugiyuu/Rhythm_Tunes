import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../SingMusic/SingMusic.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { triggerDialogAnimation, triggerBackDialogAnimation, TPDialogBack } from "./animations";

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
  const [randomImg, setRandomImg] = useState<number>(Math.floor(Math.random() * 2));
  const { id } = useParams();

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
      setRandomImg(Math.floor(Math.random() * 2));
    } else {
      triggerBackDialogAnimation();
    }
  }, [currentSubtitle]);

  const handleTimeUpdate = () => {
    const audio = document.querySelector("audio");
    if (!audio) return;

    setCurrentTime(audio.currentTime);

    const subtitle = lyrics.slice().reverse().find((subtitle) => currentTime >= subtitle.time)

    if (subtitle && subtitle.text !== currentSubtitle) {
      setCurrentSubtitle(subtitle.text);
    }
  };

  return (
    <div className="SingMusic">
      <AudioPlayer
      //musicUrl ou instrumentalUrl
        src={data?.instrumentalUrl}
        onListen={handleTimeUpdate}
        showSkipControls={false}
        showJumpControls={false}
        customVolumeControls={[]}

        layout="horizontal"
        volume={1}
      />

      <div className="lyrics">

        {lyrics.map((line, index) => {
          if (currentTime < line.time) return null;

          const nextLines = lyrics.slice(index + 1, index + 3);

          return (
            <div key={line.time}>
              <h1 className="highlighted">{line.text}</h1>
              {nextLines.map((nextLine) => (
                <p key={nextLine.time} className="faded">
                  {nextLine.text}
                </p>
              ))}
            </div>
          );
        }).reverse().find(Boolean)}
        {/* <h1>{currentSubtitle.toUpperCase()}</h1> */}
      </div>

      <div className="PersonaChar">
        <img src={`/imgs/Chie-${randomImg}.png`} alt="" />
      </div>
    </div>
  );
}

export default SingMusic;