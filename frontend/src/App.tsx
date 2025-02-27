import { useState, useEffect } from "react";
import "./App.css";
import LoadingScreen from "./components/loadingScreen/loadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <h1 className="Title">Project Karaoke</h1>
          <p>TEST TEST TEST</p>
        </>
      )}
    </>
  );
}

export default App;
