import axios from "axios";
import "../SingMusic/SingMusic.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingMusic() {
  const { id } = useParams(); // <-- pega o ID da URL

  useEffect(() => {
    if (!id) return;

    axios.get(`http://localhost:3000/music/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="SingMusic">
      <button>Start singing</button>
    </div>
  );
}

export default SingMusic;
