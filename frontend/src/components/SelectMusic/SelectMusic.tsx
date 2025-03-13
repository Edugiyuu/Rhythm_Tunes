import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SelectMusic.css";
import { animations } from "./animations";
import ViewMusic from "../ViewMusic/ViewMusic";

gsap.registerPlugin(ScrollTrigger);

const SelectMusic = () => {
  animations();

  type Music = {
    name: string;
    author: string;
    duration: number;
  };

  const [selectedMusic, setSelectedMusic] = useState<Music | null>(null);

  const musics: Music[] = [
    { name: "Heart Break", author: "Someone", duration: 100 },
    { name: "Heart Break1", author: "Someone", duration: 100 },
    { name: "Heart Break2", author: "Someone", duration: 100 },
    { name: "Heart Break3", author: "Someone", duration: 80 },
    { name: "Heart Break4", author: "Someone", duration: 60 },
    { name: "Heart Break5", author: "Someone", duration: 120 },
    { name: "Heart Break6", author: "Someone", duration: 120 },
  ];

  return (
    <div className="SelectMusic">
      <div className="AllMusics">
        {musics.map((music) => (
          <div className="Music">
            <img src="/star.svg" alt="music icon" />
            <div>
              <p>{music.name}</p>
              <button onClick={() => setSelectedMusic(music)}>VIEW MUSIC..</button>
            </div>
          </div>
        ))}
      </div>

      {selectedMusic && (
        <ViewMusic
          musicName={selectedMusic.name}
          author={selectedMusic.author}
          duration={selectedMusic.duration}
        />
      )}
    </div>
  );
};

export default SelectMusic;
