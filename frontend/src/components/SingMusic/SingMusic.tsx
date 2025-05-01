import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../SingMusic/SingMusic.css";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Music {
  musicUrl: string;
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
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/music/${id}`)
      .then((res) => {
        setData(res.data);
        setLyrics(res.data.lyrics);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

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
        autoPlay
        src={data?.musicUrl}
        onListen={handleTimeUpdate}
        showSkipControls={true}
        showJumpControls={false}
        customVolumeControls={[]}
        layout="horizontal"
      />

      <div className="lyrics">
        <h2>{currentSubtitle}</h2>
      </div>
    </div>
  );
}

export default SingMusic;