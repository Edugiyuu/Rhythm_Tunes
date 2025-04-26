import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SelectMusic.css";
import { animations } from "./animations";
import ViewMusic from "../ViewMusic/ViewMusic";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const SelectMusic = () => {

  type Music = {
    lyrics: string;
    title: string;
    musicUrl: string;
  };

  const [selectedMusic, setSelectedMusic] = useState<Music | null>(null);

  const [musics, setMusics] = useState<Music[]>([])

  useEffect(() => {

		axios.get(`http://localhost:3000/musics`)
			.then((res) => {
        animations();
				console.log(res.data);
				setMusics(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

  return (
    <div className="SelectMusic">
      <div className="AllMusics">
        {musics.map((music) => (
          <div className="Music">
            <img src="/star.svg" alt="music icon" />
            <div>
              <p>{music.title}</p>
              <button onClick={() => setSelectedMusic(music)}>VIEW MUSIC..</button>
            </div>
          </div>
        ))}
      </div>

      {selectedMusic && (
        <ViewMusic
          title={selectedMusic.title}
       
        />
      )}
    </div>
  );
};

export default SelectMusic;