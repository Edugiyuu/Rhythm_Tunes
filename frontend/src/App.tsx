import { useState, useEffect } from "react";
import "./App.css";
import LoadingScreen from "./components/loadingScreen/loadingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

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
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
