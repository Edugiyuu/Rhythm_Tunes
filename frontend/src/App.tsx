import { useState, useEffect } from "react";
import "./App.css";
import LoadingScreen from "./components/loadingScreen/loadingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SelectMusic from "./components/SelectMusic/SelectMusic";
import SingMusic from "./components/SingMusic/SingMusic";
import PatchNotes from "./components/PatchNotes/PatchNotes";
import WorkInProgress from "./components/WorkInProgress/WorkInProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musics" element={<SelectMusic />} />
          <Route path="/sing-music/:id" element={<SingMusic />} />
          <Route path="/patch-notes" element={<PatchNotes />} />
          <Route path="/work-in-progress" element={<WorkInProgress />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
